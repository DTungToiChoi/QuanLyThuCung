import { useLocation } from '@tanstack/react-router'
import { useMemo } from 'react'
import type { MenuProps } from 'antd'

export function useMenu() {
  const location = useLocation()

  const selectedKeys = useMemo(() => [location.pathname], [location.pathname])
  const openKeys = useMemo(() => [], [])

  const onMenuClick: MenuProps['onClick'] = () => {
    return undefined
  }

  return {
    selectedKeys,
    openKeys,
    onMenuClick,
  }
}
