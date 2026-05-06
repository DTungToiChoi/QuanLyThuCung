import { createGlobalStyle } from 'styled-components'

export const token = {
  primary: '#6b7e46',
  primaryContainer: '#6b7e46',
  primaryFixed: '#72f7ed',
  primaryFixedDim: '#50dad1',
  onPrimary: '#ffffff',
  onPrimaryFixed: '#00201e',
  onPrimaryFixedVariant: '#00504b',
  onPrimaryContainer: '#003e3a',

  secondary: '#005daa',
  secondaryContainer: '#0075d5',
  secondaryFixed: '#d4e3ff',
  secondaryFixedDim: '#a5c8ff',
  onSecondary: '#ffffff',
  onSecondaryFixed: '#001c3a',
  onSecondaryFixedVariant: '#004785',
  onSecondaryContainer: '#fefcff',

  tertiary: '#586153',
  tertiaryContainer: '#99a292',
  tertiaryFixed: '#dce5d4',
  tertiaryFixedDim: '#c0c9b9',
  onTertiary: '#ffffff',
  onTertiaryFixed: '#161e13',
  onTertiaryFixedVariant: '#41493c',
  onTertiaryContainer: '#30392d',

  background: '#fcf9f8',
  surface: '#fcf9f8',
  surfaceBright: '#fcf9f8',
  surfaceDim: '#dcd9d9',
  surfaceVariant: '#e4e2e1',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f6f3f2',
  surfaceContainer: '#f0eded',
  surfaceContainerHigh: '#eae7e7',
  surfaceContainerHighest: '#e4e2e1',
  onBackground: '#1b1c1c',
  onSurface: '#1b1c1c',
  onSurfaceVariant: '#3c4948',
  inverseSurface: '#303030',
  inverseOnSurface: '#f3f0ef',
  inversePrimary: '#50dad1',

  outline: '#6c7a78',
  outlineVariant: '#bbc9c7',

  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  surfaceTint: '#006a64',
}

export const HomeGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    background: ${token.background};
    color: ${token.onBackground};
    -webkit-font-smoothing: antialiased;
  }
`
