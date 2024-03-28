import Image from "next/image";
import Navbar from "./navbar";
import Home from "./home/page";
import OurServices from "./ourServices/page";


export default function FullPage() {
  return (
   <main>
    <Navbar />
    <Home />
    <OurServices />
    
   </main>
  );
}
