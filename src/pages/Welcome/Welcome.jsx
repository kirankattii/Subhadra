import { assets } from "../../assets/images/assets"
import styles from "./welcome.module.css"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
	const [hovered, setHovered] = useState(null)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500)
	const [backgroundClass, setBackgroundClass] = useState("")
	const navigate = useNavigate()

	useEffect(() => {
		// Update the state based on window size changes
		const handleResize = () => {
			setIsMobile(window.innerWidth < 600)
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	useEffect(() => {
		if (hovered) {
			const timer = setTimeout(() => {
				setBackgroundClass(styles[hovered])
			}, 50) // 50ms delay
			return () => clearTimeout(timer)
		} else {
			setBackgroundClass("")
		}
	}, [hovered])

	const handleMouseEnter = (type) => {
		setHovered(type)
	}

	const handleMouseLeave = () => {
		setHovered(null)
	}

	return (
		<div className={`${styles.container} ${hovered ? styles[hovered] : ""}`}>
			<div className={styles.welcomeHeader}>
				<h1>WELCOME TO</h1>
				{
					hovered ?
						<img src={assets.whiteLimited} alt="" /> :
						<img src={assets.blackLimited} alt="" />
				}
			</div>
			<div className={styles.content}>
				<div
					className={styles.agroImg}
					onMouseEnter={() => handleMouseEnter("agro")}
					onMouseLeave={handleMouseLeave}
					onClick={() => navigate("/agro")}
				>
					<img
						src={assets.agro_bg}
						alt="Agro"
					/>

					{(hovered === "agro" || isMobile) && (
						<span className={styles.overlayText}>AGRO</span>
					)}
				</div>
				<div
					className={styles.industrialImg}
					onMouseEnter={() => handleMouseEnter("industrial")}
					onMouseLeave={handleMouseLeave}
					onClick={() => navigate("/indestrial")}
				>
					<img
						src={assets.industrial_bg}
						alt="Industrial"
					/>

					{(hovered === "industrial" || isMobile) && (
						<span className={styles.overlayText}>INDUSTRIAL</span>
					)}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{
					opacity: 1,
					scale: hovered ? 1 : 0.8,
				}}
				transition={{ duration: 0.3 }}
				className={`${styles.contentInfo} ${hovered === "agro"
					? styles.agroContent
					: hovered === "industrial"
						? styles.industrialContent
						: ""
					}`}
			>
				<h2>
					{hovered === "agro"
						? "Growing Excellence, Harvesting Trust"
						: hovered === "industrial"
							? "Engineering Excellence, Empowering Industries"
							: "CHOOSE ONE TO EXPLORE"}
				</h2>
				<p>
					{hovered === "agro"
						? "At Subhadra Commercial Pvt Ltd, we specialize in delivering high-quality agro products that nurture growth and sustainability. Our commitment to excellence ensures that every product meets rigorous standards, providing our clients with reliable and superior solutions for their agricultural needs. With a focus on innovation and integrity, we cultivate long-lasting relationships rooted in trust and mutual success."
						: hovered === "industrial"
							? "At Subhadra Commercial Pvt Ltd, we specialize in supplying high-quality industrial products that are engineered to meet the most stringent standards. Our commitment to excellence ensures that our solutions enhance efficiency, reliability, and performance across a wide range of industries. We are dedicated to empowering businesses with the tools they need to thrive, delivering products that stand the test of time and exceed expectations."
							: "Where Quality Meets Reliability in Industrial and Agro Excellence, Delivered with a Global Touch"}
				</p>
			</motion.div>
		</div>
	)
}

export default Welcome
