import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Products", path: "/products" },
  ];

  return (
    <nav className="bg-purple-700 py-3 md:py-0">
      <div className="flex justify-end">
        <button onClick={() => setOpen(!Open)} className="md:hidden px-3">
          {Open ? (
            <XMarkIcon className="h-10 w-10 text-white" />
          ) : (
            <Bars3Icon className="h-10 w-10  text-white" />
          )}
        </button>
      </div>
      <ul
        className={`md:flex gap-3 justify-end duration-500 md:static text-white py-4 font-semibold text-xl top-16 h-screen md:h-auto absolute bg-purple-600 ${
          Open ? "left-0" : "-left-64"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
