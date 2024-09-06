// import { assets, text } from "../../../assets/images/assets"
// import styles from "./onions.module.css"
// import { motion } from "framer-motion"

// const Onions = () => {
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.content}>
// 				<div className={styles.topText}>
// 					<img
// 						src={text.onionLight}
// 						alt=""
// 					/>
// 				</div>
// 				<div className={styles.middleText}>
// 					<img
// 						src={text.onionBold}
// 						alt=""
// 					/>
// 				</div>
// 				<div className={styles.bottomText}>
// 					<img
// 						src={text.onionLight}
// 						alt=""
// 					/>
// 				</div>
// 			</div>
// 			<h2>KNOW MORE</h2>

// 			<div className={styles.onions}>
// 				<div className={styles.onion1}>
// 					<motion.img
// 						animate={{ y: [-60, 80, -60] }}
// 						transition={{
// 							duration: 6,
// 							repeat: Infinity,
// 							ease: "easeInOut",
// 							repeatType: "loop",
// 						}}
// 						src={assets.onion2}
// 						alt="onions"
// 					/>
// 				</div>
// 				<div className={styles.onion2}>
// 					<motion.img
// 						animate={{ y: [20, 140, 20] }}
// 						transition={{
// 							duration: 6,
// 							repeat: Infinity,
// 							ease: "easeInOut",
// 							repeatType: "loop",
// 						}}
// 						src={assets.onion3}
// 						alt="onions"
// 					/>
// 				</div>
// 				<div className={styles.onion3}>
// 					<motion.img
// 						animate={{ y: [-30, 90, -30] }}
// 						transition={{
// 							duration: 6,
// 							repeat: Infinity,
// 							ease: "easeInOut",
// 							repeatType: "loop",
// 						}}
// 						src={assets.onion4}
// 						alt="onions"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Onions

import { useState, useEffect } from "react"
import { assets, text } from "../../../assets/images/assets"
import styles from "./onions.module.css"
import { motion } from "framer-motion"

const Onions = () => {
	const [isMobile, setIsMobile] = useState(false)

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
				<div className={styles.topText}>
					<img
						src={text.onionLight}
						alt=""
					/>
				</div>
				<div className={styles.middleText}>
					<img
						src={text.onionBold}
						alt=""
					/>
				</div>
				<div className={styles.bottomText}>
					<img
						src={text.onionLight}
						alt=""
					/>
				</div>
			</div>
			<h2>KNOW MORE</h2>

			<div className={styles.onions}>
				<div className={styles.onion1}>
					<motion.img
						animate={{ y: isMobile ? [-30, 40, -30] : [-60, 80, -60] }} // Adjusted for mobile
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "loop",
						}}
						src={assets.onion2}
						alt="onions"
					/>
				</div>
				<div className={styles.onion2}>
					<motion.img
						animate={{ y: isMobile ? [10, 70, 10] : [20, 140, 20] }} // Adjusted for mobile
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "loop",
						}}
						src={assets.onion3}
						alt="onions"
					/>
				</div>
				<div className={styles.onion3}>
					<motion.img
						animate={{ y: isMobile ? [-15, 45, -15] : [-30, 90, -30] }} // Adjusted for mobile
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "loop",
						}}
						src={assets.onion4}
						alt="onions"
					/>
				</div>
			</div>
		</div>
	)
}

export default Onions
