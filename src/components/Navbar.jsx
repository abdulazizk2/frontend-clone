import { Menu, X } from "lucide-react";

const Navbar = () => {
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
          <nav className="gap-6 hidden md:flex">
            {NavLink.map((loop) => (
              <ul key={loop.index}>
                <a className="text-gray-500 hover:text-black"  href={loop.link}>
                  {loop.menu}
                </a>
              </ul>
            ))}
          <X/> 
          </nav>
          <button className="bg-green-950 text-white mt-1 rounded-3xl p-2 px-4">
            Sign Up
          </button>
        </header>
    </>
  );
};

export default Navbar;
