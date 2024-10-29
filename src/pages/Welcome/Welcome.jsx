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
					hovered === "agro" ?
						<img src={assets.agroPVT} alt="" /> : hovered === "industrial" ?
							<img src={assets.industrialPVT} alt="" /> :
							<img src={assets.commercialPVT} alt="" />
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

					<span
						className={`${styles.overlayText} ${hovered === "agro" ? styles.scaleText : ""}`}
					>
						AGRO
					</span>
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

					{/* {(hovered === "industrial" || isMobile) && ( */}
					<span className={styles.overlayText}>INDUSTRIAL</span>
					{/* )} */}
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
						? "Nurturing Quality, Harvesting Trust"
						: hovered === "industrial"
							? "Building Foundations, Strengthening Futures"
							: "CHOOSE ONE TO EXPLORE"}
				</h2>
				<p>
					{hovered === "agro"
						? "Subhadra Commercial Pvt. Ltd. offers premium agricultural products, including onions, ginger, and rice. With a commitment to quality and a customer-focused approach, the company serves global markets by delivering reliable and consistently high-grade commodities"
						: hovered === "industrial"
							? "With decades of experience, Subhadra Commercial Pvt. Ltd. stands out for its top-tier supply of essential industrial minerals like dolomite, quartzite, and limestone, along with high-grade coking coal. Their meticulous quality standards and vast knowledge enable them to meet the stringent demands of industries, ensuring efficient and reliable performance in every delivery​"
							: "Where Quality Meets Reliability in Industrial and Agro Excellence, Delivered with a Global Touch"}
				</p>
			</motion.div>
		</div>
	)
}

export default Welcome
