import { useNavigate } from "react-router-dom"
import { assets, text } from "../../../assets/images/assets"
import styles from "./limestone.module.css"
import { motion } from "framer-motion"

const LimeStone = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.topText}>
					<motion.img
						initial={{ y: -100, opacity: 0.5 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							y: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.limestone}
						alt=""
					/>
				</div>
				<div className={styles.middleText}>
					<motion.img
						initial={{ x: -300, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.limestone_light}
						alt=""
					/>
				</div>
				<div className={styles.bottomText}>
					<motion.img
						initial={{ y: 100, opacity: 0.5 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							y: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.limestone}
						alt=""
					/>
				</div>
			</div>
			<h2 onClick={() => navigate("/indestrial/limestone")}>KNOW MORE</h2>
			<div className={styles.limestone}>
				<motion.img
					animate={{ y: [0, 100, 0] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
						repeatType: "loop",
					}}
					src={assets.lime_stone}
					alt=""
				/>
			</div>
		</div>
	)
}

export default LimeStone
