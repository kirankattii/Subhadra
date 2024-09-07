// import { assets, text } from "../../../assets/images/assets"
// import styles from "./rice.module.css"
// import { motion } from "framer-motion"

// const Rice = () => {
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.content}>
// 				<div className={styles.riceText}>
// 					<img
// 						src={text.rice}
// 						alt="Rice"
// 					/>
// 				</div>
// 				<div className={styles.riceImages}>
// 					<div className={styles.rice1}>
// 						<motion.div
// 							animate={{ y: [0, 130, 0] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Basmati</p>
// 							<img
// 								src={assets.rice1}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className={styles.rice2}>
// 						<motion.div
// 							animate={{ y: [-80, 40, -80] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Basmati</p>

// 							<img
// 								src={assets.rice2}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className={styles.rice3}>
// 						<motion.div
// 							animate={{ y: [0, 130, 0] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Basmati</p>

// 							<img
// 								src={assets.rice3}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className={styles.rice4}>
// 						<motion.div
// 							animate={{ y: [0, -130, 0] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Non Basmati</p>

// 							<img
// 								src={assets.rice4}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className={styles.rice5}>
// 						<motion.div
// 							animate={{ y: [0, 130, 0] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Non Basmati</p>

// 							<img
// 								src={assets.rice5}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className={styles.rice6}>
// 						<motion.div
// 							animate={{ y: [-60, 70, -60] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Non Basmati</p>

// 							<img
// 								src={assets.rice6}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className={styles.rice7}>
// 						<motion.div
// 							animate={{ y: [0, 130, 0] }}
// 							transition={{
// 								duration: 6,
// 								repeat: Infinity,
// 								ease: "easeInOut",
// 								repeatType: "loop",
// 							}}
// 							className={styles.basmati}
// 						>
// 							<p>Non Basmati</p>

// 							<img
// 								src={assets.rice7}
// 								alt="rice"
// 							/>
// 						</motion.div>
// 					</div>
// 				</div>
// 			</div>
// 			<h2>KNOW MORE</h2>
// 		</div>
// 	)
// }

// export default Rice

import { useState, useEffect } from "react"
import { assets, text } from "../../../assets/images/assets"
import styles from "./rice.module.css"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Rice = () => {
	const [isMobile, setIsMobile] = useState(false)
	const navigate = useNavigate()
	// Check for screen width below 600px
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 600px)")
		setIsMobile(mediaQuery.matches)

		const handleResize = (event) => {
			setIsMobile(event.matches)
		}

		mediaQuery.addEventListener("change", handleResize)

		return () => {
			mediaQuery.removeEventListener("change", handleResize)
		}
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.riceText}>
					<img
						src={text.rice}
						alt="Rice"
					/>
				</div>
				<div className={styles.riceImages}>
					<div className={styles.rice1}>
						<motion.div
							animate={{ y: isMobile ? [0, 70, 0] : [0, 130, 0] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Basmati</p>
							<img
								src={assets.rice1}
								alt="rice"
							/>
						</motion.div>
					</div>
					<div className={styles.rice2}>
						<motion.div
							animate={{ y: isMobile ? [-40, 20, -40] : [-80, 40, -80] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Basmati</p>
							<img
								src={assets.rice2}
								alt="rice"
							/>
						</motion.div>
					</div>
					<div className={styles.rice3}>
						<motion.div
							animate={{ y: isMobile ? [0, 70, 0] : [0, 130, 0] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Basmati</p>
							<img
								src={assets.rice3}
								alt="rice"
							/>
						</motion.div>
					</div>
					<div className={styles.rice4}>
						<motion.div
							animate={{ y: isMobile ? [0, -70, 0] : [0, -130, 0] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Non Basmati</p>
							<img
								src={assets.rice4}
								alt="rice"
							/>
						</motion.div>
					</div>
					<div className={styles.rice5}>
						<motion.div
							animate={{ y: isMobile ? [0, 70, 0] : [0, 130, 0] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Non Basmati</p>
							<img
								src={assets.rice5}
								alt="rice"
							/>
						</motion.div>
					</div>
					<div className={styles.rice6}>
						<motion.div
							animate={{ y: isMobile ? [-30, 40, -30] : [-60, 70, -60] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Non Basmati</p>
							<img
								src={assets.rice6}
								alt="rice"
							/>
						</motion.div>
					</div>
					<div className={styles.rice7}>
						<motion.div
							animate={{ y: isMobile ? [0, 70, 0] : [0, 130, 0] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "loop",
							}}
							className={styles.basmati}
						>
							<p>Non Basmati</p>
							<img
								src={assets.rice7}
								alt="rice"
							/>
						</motion.div>
					</div>
				</div>
			</div>
			<h2 onClick={() => navigate("/agro/rice")}>KNOW MORE</h2>
		</div>
	)
}

export default Rice
