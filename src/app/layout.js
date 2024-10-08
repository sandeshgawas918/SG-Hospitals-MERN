
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import FooterSection from "./_components/FooterSection";
import { CookiesProvider } from "react-cookie";
import { MyContextProvider } from "./MyContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SG Hospitals",
  description: "Developed by Sandesh Gawas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider>
          <Navbar />
          <div className=" px-[25px]">
            {children}
          </div>
          <FooterSection />
        </MyContextProvider>
      </body>
    </html>
  );
}
