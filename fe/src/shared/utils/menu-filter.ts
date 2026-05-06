import { ROLE_ADMIN, ROLE_BAN_QUAN_LY } from '@/apps/auth/constants/role';
import { bqlMenuItems } from '../constants/menu';

export const getMenuItems = (role: string) => {
  // Admin (Ban Quản lý Chợ) sees the simplified grouped modules
  if (role === ROLE_ADMIN) {
    return bqlMenuItems;
  }

  // Economic (Phòng Kinh tế) - for now also showing the same or a subset
  if (role === ROLE_BAN_QUAN_LY) {
    return bqlMenuItems; // Adjust later if needed
  }

  // fallback
  return bqlMenuItems;
};

