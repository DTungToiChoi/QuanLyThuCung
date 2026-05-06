import { useMutation } from '@tanstack/react-query';
import {
  singleUploadFile,
  multiUploadFile,
  exportDuThaoTemplate
} from './api';

/**
 * @mutation
 * @description Single Upload File
 */
export const useSingleUploadFile = () => {
  return useMutation({
    mutationFn: singleUploadFile,
    onSuccess: () => {},
  });
};

/**
 * @mutation
 * @description Multi Upload File
 */
export const useMultiUploadFile = () => {
  return useMutation({
    mutationFn: multiUploadFile,
    onSuccess: () => {},
  });
};

export const useExportTemplate = () => {
  return useMutation({
    mutationFn: exportDuThaoTemplate,
  });
};
