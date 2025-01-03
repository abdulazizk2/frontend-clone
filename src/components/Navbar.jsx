const Navbar = () => {
  const NavLink = [
    { link: "/", menu: "Home" },
    { link: "/", menu: "About" },
    { link: "/", menu: "Contact" },
    { link: "/", menu: "Products" },
  ];
  return (
    <>
      
        <header className="flex px-2 items-center sm:p-0 justify-between">
          <div className="logo">Prodmast</div>
          <nav className="hidden sm:flex gap-6">
            {NavLink.map((loop) => (
              <ul key={loop.index}>
                <a className="text-gray-500 hover:text-black"  href={loop.link}>
                  {loop.menu}
                </a>
              </ul>
            ))}
          </nav>
          <button className="bg-green-950 text-white rounded-3xl p-2 px-4">
            Sign Up
          </button>
        </header>
    </>
  );
};

export default Navbar;
