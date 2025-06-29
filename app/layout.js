// import Home from "./component/Home/Home"
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";
import "./globals.css";
import { Poppins, Roboto } from 'next/font/google';

// Configure Poppins
const poppins = Poppins({
 subsets: ['latin'],
  weight: ['400', '700'], // Add required weights
  display: 'optional',
});

// Configure Roboto
const roboto = Roboto({
  weight: ['300', '400', '500', '700'], // Choose weights
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    className={poppins.className}
    >
      <body >
        <Navbar />
        {/* <Home/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                 