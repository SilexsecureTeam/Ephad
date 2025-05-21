import Home from "./component/Home/Home"
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";


import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <Home/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                 