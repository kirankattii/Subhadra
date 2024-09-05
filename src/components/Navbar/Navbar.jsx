import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink
					to="/indestrial"
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					HOME
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					ABOUT
				</NavLink>
				<NavLink
					to="/process"
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					PROCESS
				</NavLink>
				<NavLink
					to="/blogs"
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					BLOGS
				</NavLink>
				<NavLink
					to="/contact-us"
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					CONTACT US
				</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
