/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const NavLink = ({ text }: { text: string }) => (
  <li>
    <a
      className="block p-2 text-lg capitalize transition-all duration-300 hover:pl-4 hover:bg-sky-50 md:hover:pl-0 md:hover:bg-transparent md:p-0 hover:text-sky-500"
      href="#">
      {text}
    </a>
  </li>
);

export default NavLink;
