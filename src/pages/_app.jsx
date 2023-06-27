import initAuth from "@/firebase/config";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

initAuth();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
