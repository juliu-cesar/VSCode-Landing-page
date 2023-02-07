import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CSSReset } from "../styles/CSSReset";

const theme = {
  primary_color: "#0098FF",
  second_color: "#007ACC",
  third_color: "#004D80",
  primary_color_2: "#00EB57",
  second_color_2: "#00B843",

  background_base: "#333333",
  background_2: "#404040",
  gray: "#606060",
  black: "#202020",
  semi_black: "#282828",
  text_color: "#EFEFEF",

  code_1: "#2085c0",
  bg_code_1: "#1F3951",
  code_2: "#CB4545",
  bg_code_2: "#351E23",
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
