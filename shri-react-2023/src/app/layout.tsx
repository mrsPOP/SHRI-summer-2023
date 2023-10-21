import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/redux/StoreProvider";
import styles from "./page.module.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <StoreProvider>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
