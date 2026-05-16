// import { ConfigProvider } from "antd";
// import type { ReactNode } from "react";

// type TThemeProviderProps = {
//   children: ReactNode;
//   currentTheme?: keyof typeof THEMES;
// };

// const ThemeProvider = ({
//   children,
//   currentTheme = THEME_NAMES.GREEN,
// }: TThemeProviderProps) => {
//   const themeObject = THEMES[currentTheme] ?? THEMES[THEME_NAMES.GREEN];

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: themeObject.PRIMARY(),
//         },
//         components: {
//           Table: {
//             headerBg: themeObject.PRIMARY(),
//             headerBorderRadius: 0,
//             headerColor: themeObject.COLOR_TITLE_HEADER,
//             borderColor: themeObject.BORDER_COLOR,
//             cellPaddingBlock: 5,
//             cellPaddingInline: 5,
//           },
//           Form: {
//             itemMarginBottom: 16,
//           },
//           Tabs: {
//             colorText: themeObject.PRIMARY(),
//             itemActiveColor: themeObject.PRIMARY(),
//             inkBarColor: themeObject.PRIMARY(),
//             itemColor: themeObject.PRIMARY(),
//             itemSelectedColor: themeObject.PRIMARY(),
//           },
//         },
//       }}
//     >
//       {children}
//     </ConfigProvider>
//   );
// };

// export default ThemeProvider;
