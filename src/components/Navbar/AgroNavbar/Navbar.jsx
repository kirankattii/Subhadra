import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import styles from "./navbar.module.css"
import { MediaNav2 } from "./mediaNav2"
import { assets } from "../../../assets/images/assets"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [scrollDirection, setScrollDirection] = useState("up")
	const location = useLocation()

	useEffect(() => {
		let lastScrollY = window.scrollY

		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const scrollLimit = window.innerHeight * 0.2 // 20% of the viewport height

			// Show navbar if scrolling up and hide if scrolling down
			if (scrollPosition > lastScrollY) {
				setScrollDirection("down")
			} else {
				setScrollDirection("up")
			}

			// Detect if scrolled beyond 20% of viewport
			if (scrollPosition > scrollLimit) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}

			lastScrollY = scrollPosition
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<>
			<header
				className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${scrollDirection === "down" ? styles.hide : ""
					}`}
			>
				<div className={styles.logo}>
					{location.pathname.includes('/contact-us') ?
						<img src={assets.logowhite} alt="" /> :
						<img src={assets.logoblack} alt="" />
					}
				</div>
				<nav className={styles.nav}>
					<NavLink
						to="/agro"
						style={{ color: location.pathname === "/agro" ? "#4BA040" : "black" }}
					>
						HOME
					</NavLink>
					<NavLink
						to="/agro/about-us"
						style={{ color: location.pathname === "/agro/about-us" ? "#4BA040" : "black" }}
					>
						ABOUT US
					</NavLink>
					<NavLink
						to="/process"
						style={{ color: location.pathname === "/process" ? "#4BA040" : "black" }}
					>
						PRODUCTS
					</NavLink>
					<NavLink
						to="/agro/blogs"
						style={{ color: location.pathname === "/agro/blogs" ? "#4BA040" : "black" }}
					>
						BLOGS
					</NavLink>
					<NavLink
						to="/agro/contact-us"
						style={{ color: location.pathname === "/agro/contact-us" ? "#4BA040" : "black" }}
					>
						CONTACT US
					</NavLink>
				</nav>
			</header>
			<div className={styles.medianav}>
				<MediaNav2 />
			</div>
		</>
	)
}

export default Navbar
