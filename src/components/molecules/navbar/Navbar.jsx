import React from 'react';
import Logo from '../../../assets/images/matizLogo.svg';

const Navbar = () => {
  return (
    <>

      <div className="navbar bg-blueLight h-24 fixed top-0 z-10">
        <div className="flex-1">
          <a href="/">
            <img className="w-16 md:w-20 lg:w-24" src={Logo} alt="Matiz" />
          </a>
        </div>
        <div className="mr-4 flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Username" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Configurar</a></li>
              <li><a>Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
