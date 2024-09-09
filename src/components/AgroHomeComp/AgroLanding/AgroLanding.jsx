import { assets } from "../../../assets/images/assets"
import styles from "./agroLanding.module.css"
import { motion } from "framer-motion"

const AgroLanding = () => {
	return (
		<div className={styles.container}>
			<div className={styles.agroImg}>
				<motion.video
					initial={{ scale: 0.6 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					autoPlay
					loop
					muted
				>
					<source
						src={assets.agro_Video2}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</motion.video>
			</div>
			<div className={styles.content}>
				<motion.h1
					initial={{ x: 100, opacity: 0.5 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.9,
						x: { type: "spring", stiffness: 60, mass: 1 },
						opacity: { duration: 1 },
						ease: "easeIn",
						duration: 1,
					}}
				>
					PREMIER
				</motion.h1>
				<motion.h1
					initial={{ x: 100, opacity: 0.5 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.9,
						x: { type: "spring", stiffness: 60, mass: 1 },
						opacity: { duration: 1 },
						ease: "easeIn",
						duration: 1,
					}}
				>
					GROWTH
				</motion.h1>
			</div>
		</div>
	)
}

export default AgroLanding
