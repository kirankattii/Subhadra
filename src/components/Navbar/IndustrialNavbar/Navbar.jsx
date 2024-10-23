import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
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
					<Link
						to="/indestrial"
						style={{ color: location.pathname === "/indestrial" ? "#B78F4A" : "" }}
					>
						HOME
					</Link>
					<Link
						to="/indestrial/about-us"
						style={{ color: location.pathname === "/indestrial/about-us" ? "#B78F4A" : "" }}
					>
						ABOUT US
					</Link>
					<Link
						to="/process"
						style={{ color: location.pathname === "/process" ? "#B78F4A" : "" }}
					>
						PRODUCTS
					</Link>
					<Link
						to="/indestrial/blogs"
						style={{ color: location.pathname === "/indestrial/blogs" ? "#B78F4A" : "" }}
					>
						BLOGS
					</Link>
					<Link
						to="/indestrial/contact-us"
						style={{ color: location.pathname === "/indestrial/contact-us" ? "#B78F4A" : "" }}
					>
						CONTACT US
					</Link>
				</nav>
			</header>
			<div className={styles.medianav}>
				<MediaNav2 />
			</div>
		</>
	)
}

export default Navbar
