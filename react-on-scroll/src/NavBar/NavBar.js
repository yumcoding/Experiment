import { useEffect, useRef } from "react";

import "./NavBar.css";

const NavBar = () => {
	const navEl = useRef(null);

	const handleScroll = () => {
		if (window.pageYOffset > 0) {
			navEl.current.classList.add("down");
		} else {
			navEl.current.classList.remove("down");
		}
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener("scroll", handleScroll);
		};
		watchScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<div className="nav-container" ref={navEl}>
			<h1>NavBar</h1>
		</div>
	);
};

export default NavBar;
