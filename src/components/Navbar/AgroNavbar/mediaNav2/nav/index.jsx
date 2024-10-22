import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import styles from "./style.module.scss"
import { menuSlide } from "../anim"
import { Link } from "react-router-dom"
import Curve from "./Curve"
import Footer from "./Footer"
// import { navbar } from "../../../../assets/assets"

const navbar = [
	{
		title: "Home",
		href: "/agro",
	},
	{
		title: "About Us",
		href: "/agro/about-us",
	},
	{
		title: "Process",
		href: "/process",
	},
	{
		title: "Blogs",
		href: "/agro/blogs",
	},
	{
		title: "Contact Us",
		href: "/agro/contact-us",
	},
]

const Nav = () => {
	const location = useLocation()
	const [selectedIndicator, setSelectedIndicator] = useState(location.pathname)

	useEffect(() => {
		setSelectedIndicator(location.pathname)
	}, [location.pathname])

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body}>
				<div
					onMouseLeave={() => {
						setSelectedIndicator(location.pathname)
					}}
					className={styles.nav}
				>
					{/* <div className={styles.header}>
						<p>Navigation</p>
					</div> */}
					{navbar.map((data, index) => (
						<Link
							key={index}
							to={data.href}
							className={
								selectedIndicator === data.href ? styles.activeLink : ""
							}
							onClick={() => setSelectedIndicator(data.href)}
							style={{
								color: location.pathname === data.href ? '#4BA040' : '#fff'
							}}
						>
							{data.title}
						</Link>
					))}
				</div>
				<Footer />
			</div>
			<Curve />
		</motion.div>
	)
}

export default Nav
