import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { HomeIcon, Phone, User } from "lucide-react";
import Image from "next/image";

 const navItems = [
   {
     name: "Home",
     link: "/",
     icon: <HomeIcon />,
   },
   {
     name: "About",
     link: "/about",
     icon: <User />,
   },
   {
     name: "Contact",
     link: "/contact",
     icon: <Phone />,
   },
 ];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
    
  );
}
