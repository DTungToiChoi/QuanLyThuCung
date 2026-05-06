import { Alert, Modal, Spin, Typography } from "antd";
import { useCallback, useState } from "react";

const PDF_EXTS = ["pdf"];
const IMAGE_EXTS = ["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"];
const OFFICE_EXTS = ["doc", "docx", "xls", "xlsx"];
const SUPPORTED_EXTS = [...PDF_EXTS, ...IMAGE_EXTS, ...OFFICE_EXTS];

function getExtension(url: string): string | null {
  const cleanPath = url.split("?")[0].split("#")[0];
  const lastDot = cleanPath.lastIndexOf(".");
  if (lastDot === -1) return null;

  const ext = cleanPath.slice(lastDot + 1);
  if (!ext || ext.includes("/") || ext.includes("\\")) return null;

  return ext.toLowerCase();
}

function getFullUrl(url: string): string {
  if (url.includes("http")) return url;
  return `${import.meta.env.VITE_RESOURCE_URL}${url}`;
}

function getFileName(url: string): string {
  const parts = url.split("?")[0].split("/");
  return parts[parts.length - 1];
}

type PreviewState = {
  open: boolean;
  url: string;
  fileName: string;
  ext: string;
  loading: boolean;
  error: string | null;
};

const initialState: PreviewState = {
  open: false,
  url: "",
  fileName: "",
  ext: "",
  loading: false,
  error: null,
};

export const usePreview = () => {
  const [state, setState] = useState<PreviewState>(initialState);

  const openPreview = useCallback(async (url: string) => {
    const fullUrl = getFullUrl(url);
    const ext = getExtension(fullUrl);

    if (!ext || !SUPPORTED_EXTS.includes(ext)) {
      console.warn(`usePreview: định dạng ".${ext}" không được hỗ trợ`);
      return;
    }

    setState({
      open: true,
      url: fullUrl,
      fileName: getFileName(fullUrl),
      ext,
      loading: false,
      error: null,
    });
  }, []);

  const closePreview = useCallback(() => {
    setState(initialState);
  }, []);

  const PreviewModal = () => (
    <Modal
      open={state.open}
      onCancel={closePreview}
      footer={null}
      title={
        <Typography.Text
          ellipsis
          style={{ maxWidth: "60vw", display: "inline-block", margin: "6px 16px" }}
        >
          {state.fileName}
        </Typography.Text>
      }
      width="85vw"
      style={{ top: 16 }}
      styles={{ body: { padding: 0, minHeight: 200 } }}
      destroyOnHidden
    >
      {state.loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <Spin size="large" tip="Đang tải file..." />
        </div>
      )}

      {state.error && (
        <div style={{ padding: 24 }}>
          <Alert type="error" message={state.error} showIcon />
        </div>
      )}

      {!state.loading && !state.error && PDF_EXTS.includes(state.ext) && (
        <iframe
          src={state.url}
          style={{ width: "100%", height: "80vh", border: "none", display: "block" }}
          title={state.fileName}
        />
      )}

      {!state.loading && !state.error && OFFICE_EXTS.includes(state.ext) && (
        <iframe
          src={`https://docs.google.com/gview?url=${encodeURIComponent(state.url)}&embedded=true`}
          style={{ width: "100%", height: "80vh", border: "none", display: "block" }}
          title={state.fileName}
        />
      )}

      {!state.loading && !state.error && IMAGE_EXTS.includes(state.ext) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            padding: 16,
            background: "#fafafa",
          }}
        >
          <img
            src={state.url}
            alt={state.fileName}
            style={{ maxWidth: "100%", maxHeight: "75vh", objectFit: "contain" }}
          />
        </div>
      )}
    </Modal>
  );

  return { openPreview, closePreview, PreviewModal };
};

export default usePreview;
