import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}
