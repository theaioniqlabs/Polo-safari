"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  cssVariables: true,
});

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={muiTheme}>
        <AntdRegistry>{children}</AntdRegistry>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
