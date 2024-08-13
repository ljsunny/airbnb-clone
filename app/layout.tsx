import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal
            actionLabel="submit" 
            title="Hello world" 
            isOpen={true} /> */}
          <ToasterProvider/>
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>

        {children}
        </body>
    </html>
  );
}
