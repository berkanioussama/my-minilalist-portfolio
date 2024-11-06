'use client'

import { FloatingNav } from "@/components/ui/floating-navbar";

const Navbar = () => {

  return (
    <FloatingNav navItems={navItems}/>
  );
}

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testtimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
 
export default Navbar;