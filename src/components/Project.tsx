/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useEffect, useRef, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import HamburgerButton from "./HamburgerButton";
import NavLink from "./NavLink";
import tailwindConfig from "../../tailwind.config.js";

const Project = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navList = useRef<HTMLUListElement>(null);
	const [screenWidth, setScreenWidth] = useState(innerWidth);

	useEffect(() => {
		if (!navList.current) return;
		if (isOpen) {
			navList.current.style.height = `${navList.current.scrollHeight}px`;
		} else navList.current.style.height = "";
	});

	useEffect(() => {
		const listener = () => setScreenWidth(innerWidth);
		addEventListener("resize", listener);
		return () => removeEventListener("resize", listener);
	});

	useEffect(() => {
		const md = Number(
			resolveConfig(tailwindConfig).theme.screens.md.replace(/px/, "")
		);
		if (md <= screenWidth) setIsOpen(false);
	}, [screenWidth]);

	return (
		<>
			<header className="p-3 shadow-lg">
				<HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
				<nav>
					<ul
						ref={navList}
						className="flex flex-col w-full h-0 overflow-hidden transition-all md:h-auto md:p-0 md:items-center md:flex-row md:justify-center md:gap-4">
						<NavLink text="home" />
						<NavLink text="about" />
						<NavLink text="projects" />
						<NavLink text="contact" />
						<NavLink text="profile" />
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Project;
