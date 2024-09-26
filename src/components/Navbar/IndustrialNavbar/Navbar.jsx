import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styles from "./navbar.module.css"
import { MediaNav2 } from "./mediaNav2"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [scrollDirection, setScrollDirection] = useState("up")

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
				<nav className={styles.nav}>
					<Link
						to="/indestrial"
					>
						HOME
					</Link>
					<Link
						to="/indestrial/about-us"
					>
						ABOUT
					</Link>
					<Link
						to="/process"
					>
						PROCESS
					</Link>
					<Link
						to="/blogs"
					>
						BLOGS
					</Link>
					<Link
						to="/agro/contact-us"
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
