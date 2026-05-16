import type { MenuProps } from 'antd'

export function getMenuItems(role: string): MenuProps['items'] {
  const normalizedRole = role || 'admin'

  if (normalizedRole === 'staff') {
    return []
  }

  return []
}
