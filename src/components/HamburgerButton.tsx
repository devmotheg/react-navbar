/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const HamburgerButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const upperStyling = isOpen ? " rotate-45 translate-y-1" : "";
  const lowerStyling = isOpen ? "-rotate-45 -translate-y-2" : "";

  return (
    <button
      className="block w-8 mx-auto my-2 md:hidden group"
      onClick={() => setIsOpen(!isOpen)}>
      <span className="sr-only">hamburger button</span>
      <span
        className={`block h-1 transition group-hover:bg-sky-500  mb-2 duration-300 rounded bg-neutral-500 ${upperStyling}`}></span>
      <span
        className={`block h-1 transition group-hover:bg-sky-500 duration-300 rounded bg-neutral-500 ${lowerStyling}`}></span>
    </button>
  );
};

export default HamburgerButton;
