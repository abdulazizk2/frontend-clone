import { Menu, X } from "lucide-react";
import { useRef } from "react";
import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import SignUp from "./SignUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("header", {
      y: -160,
      delay: 0.5,
      duration: 2,
      ease: "elastic.out(1,0.75)",
    });
  });
  const [open, setOpen] = useState(false);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.style.transform = "translateX(0px)"; // Example of adding inline CSS
    // Example of adding inline CSS
  };
  const hideNavbar = () => {
    // Example of adding inline CSS
    navRef.current.style.transform = "translateX(100%)"; // Example of adding inline CSS
  };
  const NavLink = [
    { link: "/", menu: "Home" },
    { link: "/", menu: "About" },
    { link: "/", menu: "Contact" },
    { link: "/", menu: "Products" },
  ];

  return (
    <>
      <header className="mt-2 flex px-3 items-center justify-between">
        <div className="logo">Prodmast</div>
        <div onClick={showNavbar} className="flex cursor-pointer md:hidden">
          <Menu />
        </div>
        <nav
          className="transform translate-x-[100%] md:transition-none transition-transform duration-500 ease-in-out z-8 fixed top-0 right-0 flex flex-col gap-6 w-1/2 bg-white h-dvh md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:static md:flex-row md:gap-4"
          ref={navRef}
        >
          <div>
            <div className="md:hidden float-end m-10 cursor-pointer">
              <X onClick={hideNavbar} />
            </div>
          </div>
          {NavLink.map((loop) => (
            <ul key={loop.menu}>
              <a
                className="text-gray-500 px-5 inline-block w-full hover:bg-gray-400 md:hover:bg-transparent md:hover:text-black"
                href={loop.link}
              >
                {loop.menu}
              </a>
            </ul>
          ))}
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="mx-auto bg-green-950 md:hidden text-white mt-1 rounded-3xl p-2 px-4"
          >
            Sign Up
          </button>
        </nav>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-green-950 hidden md:inline-block text-white mt-1 rounded-3xl p-2 px-4"
        >
          Sign Up
        </button>
      </header>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white w-11/12 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full ">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    ></DialogTitle>
                    <div className="mt-2">
                      <SignUp />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
