import { Menu, X } from "lucide-react";
import { useRef } from "react";

const Navbar = () => {
  const navRef =useRef();
  const showNavbar =()=>{
    navRef.current.style.transform = "translateX(0px)";  // Example of adding inline CSS
    // Example of adding inline CSS
  }
  const hideNavbar =()=>{ // Example of adding inline CSS
    navRef.current.style.transform = "translateX(100%)";  // Example of adding inline CSS
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
          <div onClick={showNavbar} className="flex cursor-pointer md:hidden">
          <Menu/>
          </div>
          <nav className="transform translate-x-[100%] transition-transform duration-500 ease-in-out z-30 fixed top-0 right-0 flex flex-col gap-6 w-1/2 bg-white h-dvh md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:static md:flex-row md:gap-4" ref={navRef}>
          <div>
          <div className="md:hidden float-end m-10 cursor-pointer">
          <X onClick={hideNavbar}/> 
          </div>  
          </div>
            {NavLink.map((loop) => (
              <ul key={loop.index}>
                <a className="text-gray-500 px-5 inline-block w-full hover:bg-gray-400 md:hover:bg-transparent md:hover:text-black"  href={loop.link}>
                  {loop.menu}
                </a>
              </ul>
            ))}
          <button className="mx-auto bg-green-950 md:hidden text-white mt-1 rounded-3xl p-2 px-4">
            Sign Up
          </button>
          </nav>
          <button className="bg-green-950 hidden md:inline-block text-white mt-1 rounded-3xl p-2 px-4">
            Sign Up
          </button>
        </header>
    </>
  );
};

export default Navbar;
