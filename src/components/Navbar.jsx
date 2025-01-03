import { Menu, X } from "lucide-react";
import { useRef } from "react";

const Navbar = () => {
  const navRef =useRef();
  const showNavbar =()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  const NavLink = [
    { link: "/", menu: "Home" },
    { link: "/", menu: "About" },
    { link: "/", menu: "Contact" },
    { link: "/", menu: "Products" },
  ];
  return (
    <>   
        <header className="flex px-3 items-center justify-between">
          <div className="logo">Prodmast</div>
          <div className="flex md:hidden">
          <Menu/>
          </div>
          <nav ref={navRef}>
            {NavLink.map((loop) => (
              <ul className="p-4 hidden md:inline-block" key={loop.index}>
                <a className="text-gray-500 hover:text-black"  href={loop.link}>
                  {loop.menu}
                </a>
              </ul>
            ))}
          <X className="md:hidden"/> 
          </nav>
          <button className="bg-green-950 text-white mt-1 rounded-3xl p-2 px-4">
            Sign Up
          </button>
        </header>
    </>
  );
};

export default Navbar;
