import React from "react";

const Header = () => {
  return (
    <nav className="bg-yellow-300 py-4">
      <div className="text-center">
        <img className="h-32 w-32 rounded-full text-center inline-block"
          src="https://w0.peakpx.com/wallpaper/734/724/HD-wallpaper-brasil-logo-argentina-barcelona-brazil-cbf-cbf-logo-real-madrid-shadow.jpg"
          alt=""
        />
      </div>
      <h2 className="font-medium text-center text-xl text-blue-500">Confederação Brasileira de Futebol</h2>
      <h2 className="font-extrabold text-center text-3xl text-blue-600">Brazil</h2>
    </nav>
  );
};

export default Header;
