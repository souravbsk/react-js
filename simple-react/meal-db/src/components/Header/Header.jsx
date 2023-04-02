import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-30">
      <nav className="bg-gray-200 px-24 py-6 flex justify-between items-center text-black">
        <div>
          <h1 className="text-2xl font-bold">MEAL DB</h1>
        </div>
        <ul className="flex gap-4 items-center">
            <li className="font-semibold"><a href="/">Home</a></li>
            <li className="font-semibold"><a href="/">Home</a></li>
            <li className="font-semibold"><a href="/">Home</a></li>
            <li className="font-semibold"><a href="/">Home</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
