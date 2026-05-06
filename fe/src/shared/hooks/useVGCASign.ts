import { useState, useCallback } from 'react';
import { message } from 'antd';

// Type declaration cho VGCA
declare global {
  interface Window {
    vgca_sign_issued?: (params: string, callback: (response: string) => void) => void;
    vgca_sign_approved?: (params: string, callback: (response: string) => void) => void;
    vgca_sign_income?: (params: string, callback: (response: string) => void) => void;
    vgca_comment?: (params: string, callback: (response: string) => void) => void;
    vgca_sign_appendix?: (params: string, callback: (response: string) => void) => void;
    vgca_sign_copy?: (params: string, callback: (response: string) => void) => void;
    vgca_sign_files?: (params: string, callback: (response: string) => void) => void;
  }
}

// Các loại ký số VGCA
export const SignType = {
  ISSUED: 'ISSUED',           // Đóng dấu phát hành
  APPROVED: 'APPROVED',       // Ký phê duyệt
  INCOME: 'INCOME',           // Ký công văn đến
  COMMENT: 'COMMENT',         // Thêm ý kiến
  APPENDIX: 'APPENDIX',       // Ký phụ lục/đính kèm
  COPY: 'COPY',               // Ký bản sao điện tử
  FILES: 'FILES',             // Ký danh sách file
  MOCK: 'MOCK'                // Mock để test (không gọi VGCA)
} as const;

export type SignType = typeof SignType[keyof typeof SignType];

export interface VGCASignParams {
  fileUrl: string;
  docNumber?: string;
  sessionId?: string;
  jwtToken?: string;
  fileUploadHandler?: string;
  signType?: SignType;         // Loại ký số
  metaData?: Array<{Key: string, Value: string}>;  // Metadata cho comment/appendix
}

export interface VGCASignResponse {
  Status: number;
  Message?: string;
  FileServer?: string;
  [key: string]: any;
}

export interface UseVGCASignOptions {
  onSuccess?: (signedFileUrl: string, originalFileUrl: string) => void;
  onError?: (error: string) => void;
  autoAddMinioPrefix?: boolean;
  minioBaseUrl?: string;
}

/**
 * Custom hook để xử lý ký số VGCA
 * @param options - Các tùy chọn cho hook
 * @returns signing state và hàm handleSign
 */
export const useVGCASign = (options: UseVGCASignOptions = {}) => {
  const {
    onSuccess,
    onError,
    autoAddMinioPrefix = true,
    minioBaseUrl = `${import.meta.env.VITE_RESOURCE_URL}`
  } = options;

  const [signing, setSigning] = useState<string | null>(null);

  /**
   * Thêm prefix Minio vào URL nếu cần
   */
  const buildFullUrl = useCallback((url: string): string => {
    if (!autoAddMinioPrefix) return url;
    if (url.startsWith('blob:')) return url; // Không thêm prefix cho blob URL (file local vừa chọn)
    
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    const fullUrl = `${minioBaseUrl}${url.startsWith('/') ? url.slice(1) : url}`;
    console.log('[VGCA] Added Minio prefix. Full URL:', fullUrl);
    return fullUrl;
  }, [autoAddMinioPrefix, minioBaseUrl]);

  /**
   * Xử lý callback từ VGCA
   */
  const handleSignCallback = useCallback((
    originalFileUrl: string,
    responseString: string
  ) => {
    console.log('[VGCA] Received callback response:', responseString);
    
    try {
      const response: VGCASignResponse = JSON.parse(responseString);
      console.log('[VGCA] Parsed response:', response);
      
      if (response.Status === 0) {
        console.log('[VGCA] Sign successful, new file URL:', response.FileServer);
        message.success('Ký số thành công!');
        
        if (onSuccess && response.FileServer) {
          onSuccess(response.FileServer, originalFileUrl);
        }
      } else {
        const errorMsg = response.Message || 'Ký số thất bại';
        console.error('[VGCA] Sign failed with status:', response.Status, errorMsg);
        message.error(errorMsg);
        
        if (onError) {
          onError(errorMsg);
        }
      }
    } catch (error) {
      const errorMsg = 'Lỗi xử lý response từ VGCA';
      message.error(errorMsg);
      console.error('[VGCA] Error parsing response:', error);
      
      if (onError) {
        onError(errorMsg);
      }
    } finally {
      setSigning(null);
    }
  }, [onSuccess, onError]);

  /**
   * Mock signing để test (không cần USB)
   */
  const mockSign = useCallback(async (fileUrl: string, signType: SignType) => {
    console.log('[VGCA MOCK] Simulating signing...', signType);
    message.info('🧪 Đang ký số (Chế độ test - Không cần USB)');
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Sử dụng file gốc mà không thêm đuôi _signed
    const signedUrl = fileUrl;
    
    const mockResponse: VGCASignResponse = {
      Status: 0,
      FileServer: signedUrl,
      Message: 'Mock signing successful'
    };
    
    console.log('[VGCA MOCK] Mock response:', mockResponse);
    handleSignCallback(fileUrl, JSON.stringify(mockResponse));
  }, [handleSignCallback]);

  /**
   * Hàm ký số file
   */
  const handleSign = useCallback(async (params: VGCASignParams, signId?: string) => {
    const { fileUrl, docNumber, sessionId = '', jwtToken, signType = SignType.ISSUED, metaData } = params;
    
    console.log('[VGCA] handleSign called');
    console.log('[VGCA] Original file URL:', fileUrl);
    console.log('[VGCA] Sign type:', signType);
    
    if (!fileUrl) {
      message.error('Vui lòng tải file lên trước khi ký số');
      console.error('[VGCA] No fileUrl provided');
      return;
    }

    // Mock mode
    if (signType === SignType.MOCK) {
      if (signId) setSigning(signId);
      await mockSign(fileUrl, signType);
      return;
    }

    // Map signType to VGCA function
    const vgcaFunctions = {
      [SignType.ISSUED]: window.vgca_sign_issued,
      [SignType.APPROVED]: window.vgca_sign_approved,
      [SignType.INCOME]: window.vgca_sign_income,
      [SignType.COMMENT]: window.vgca_comment,
      [SignType.APPENDIX]: window.vgca_sign_appendix,
      [SignType.COPY]: window.vgca_sign_copy,
      [SignType.FILES]: window.vgca_sign_files,
    };

    const vgcaFunction = vgcaFunctions[signType];

    // Kiểm tra VGCA plugin
    console.log('[VGCA] Checking VGCA function:', signType, vgcaFunction);
    
    if (!vgcaFunction) {
      message.warning('Plugin VGCA chưa được tải. Vui lòng:\n1. Cài đặt phần mềm VGCA\n2. Copy vgcaplugin.js vào thư mục public\n3. Tải lại trang');
      console.error('[VGCA] VGCA function not available:', signType);
      return;
    }

    if (signId) {
      setSigning(signId);
    }

    // Build full URL với Minio prefix (nếu không phải blob URL)
    const fullUrl = buildFullUrl(fileUrl);

    const vgcaParams: any = {
      FileUploadHandler: params.fileUploadHandler,
      FileName: fullUrl,
      //FileName: "",
      SessionId: sessionId,
      JWTToken: jwtToken || localStorage.getItem('token') || ''
    };

    // Thêm params tùy theo loại ký
    if (signType === SignType.ISSUED || signType === SignType.APPROVED) {
      vgcaParams.DocNumber = docNumber || '';
    }

    if (signType === SignType.COMMENT || signType === SignType.APPENDIX || signType === SignType.COPY) {
      vgcaParams.MetaData = metaData || [];
      if (signType !== SignType.COMMENT) {
        vgcaParams.DocNumber = docNumber || '';
      }
    }

    try {
      console.log('[VGCA] Calling VGCA function:', signType);
      console.log('[VGCA] Params:', vgcaParams);
      console.log('[VGCA] File URL to sign (full):', fullUrl);
      console.log('[VGCA] Starting VGCA plugin...');
      
      // Gọi VGCA function tương ứng với callback
      vgcaFunction(
        JSON.stringify(vgcaParams),
        (response) => handleSignCallback(fileUrl, response)
      );
      
      console.log('[VGCA] vgca_sign_issued called successfully, waiting for user to sign...');
    } catch (error) {
      message.error('Lỗi khi gọi VGCA');
      console.error('[VGCA] Error calling vgca_sign_issued:', error);
      setSigning(null);
      
      if (onError) {
        onError('Lỗi khi gọi VGCA');
      }
    }
  }, [buildFullUrl, handleSignCallback, onError, mockSign]);

  return {
    signing,
    handleSign,
    isPluginAvailable: typeof window !== 'undefined' && !!window.vgca_sign_issued,
    SignType  // Export SignType để component có thể sử dụng
  };
};
