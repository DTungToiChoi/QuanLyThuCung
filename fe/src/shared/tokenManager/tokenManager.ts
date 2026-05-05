export type AuthTokens = {
  accessToken: string
  refreshToken?: string
  accessExpiresAt?: string
  refreshExpiresAt?: string
}

const TOKEN_STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  accessExpiresAt: 'accessExpiresAt',
  refreshExpiresAt: 'refreshExpiresAt',
} as const

export const tokenManager = {
  getAccessToken() {
    return localStorage.getItem(TOKEN_STORAGE_KEYS.accessToken)
  },

  setTokens(tokens: AuthTokens) {
    localStorage.setItem(TOKEN_STORAGE_KEYS.accessToken, tokens.accessToken)

    if (tokens.refreshToken) {
      localStorage.setItem(TOKEN_STORAGE_KEYS.refreshToken, tokens.refreshToken)
    }

    if (tokens.accessExpiresAt) {
      localStorage.setItem(TOKEN_STORAGE_KEYS.accessExpiresAt, tokens.accessExpiresAt)
    }

    if (tokens.refreshExpiresAt) {
      localStorage.setItem(TOKEN_STORAGE_KEYS.refreshExpiresAt, tokens.refreshExpiresAt)
    }
  },

  clearTokens() {
    Object.values(TOKEN_STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key)
    })
  },
}
