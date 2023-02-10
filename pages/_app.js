import "@/styles/globals.css";
import { prefix } from "@/config/config";
import { HelloTodayProvider } from "@/context/context";

export default function App({ Component, pageProps }) {
  return (
    <HelloTodayProvider value={{ prefix }}>
      <Component {...pageProps} />;
    </HelloTodayProvider>
  );
}
