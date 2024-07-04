import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Humaiod AI",
  description: "Your Own AI Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <AuthProvider>
      {children} 
      </AuthProvider>
      </body>
    </html>
  );
}
