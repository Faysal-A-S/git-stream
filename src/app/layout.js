import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Homepage",
  description: "Homepage description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-4  min-h-screen">
        <Sidebar />
        <main className="col-span-3 p-6 px-12 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
