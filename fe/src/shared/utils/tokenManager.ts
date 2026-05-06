const LOCAL_STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  roles: 'roles',
} as const

const getStorageValue = (key: string): string | undefined => {
  return localStorage.getItem(key) ?? undefined
}

const setStorageValue = (key: string, value: string): void => {
  localStorage.setItem(key, value)
}

const tokenManager = () => {
  let accessToken: string | undefined = getStorageValue(LOCAL_STORAGE_KEYS.accessToken)
  let refreshToken: string | undefined = getStorageValue(LOCAL_STORAGE_KEYS.refreshToken)

  const getRoles = (): string[] | undefined => {
    const storedValue = getStorageValue(LOCAL_STORAGE_KEYS.roles)
    if (!storedValue) return undefined

    try {
      return JSON.parse(storedValue)
    } catch {
      return undefined
    }
  }

  const setRoles = (roles: string[]): void => {
    setStorageValue(LOCAL_STORAGE_KEYS.roles, JSON.stringify(roles))
  }

  const getAccessToken = (): string | undefined => {
    return accessToken
  }

  const setAccessToken = (token: string): void => {
    accessToken = token
    setStorageValue(LOCAL_STORAGE_KEYS.accessToken, token)
  }

  const removeAccessToken = (): void => {
    accessToken = undefined
    localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken)
  }

  const getRefreshToken = (): string | undefined => {
    return refreshToken
  }

  const setRefreshToken = (token: string): void => {
    refreshToken = token
    setStorageValue(LOCAL_STORAGE_KEYS.refreshToken, token)
  }

  const removeRefreshToken = (): void => {
    refreshToken = undefined
    localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken)
  }

  const removeAllToken = (): void => {
    accessToken = undefined
    refreshToken = undefined
    localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.roles)
  }

  return {
    getRoles,
    setRoles,
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    getRefreshToken,
    setRefreshToken,
    removeRefreshToken,
    removeAllToken,
  }
}

export default tokenManager()
