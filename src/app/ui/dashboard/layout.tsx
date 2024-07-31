//import { Inter } from "next/font/google";
import {Inter1} from "@/app/ui/font"
import SideNav from '@/app/ui/dashboard/sidenav';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
      <body className={`${Inter1.className} Lusitana `}>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
    
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
        
  
      </body>
      </html>

      
    </>
  
  );
}
