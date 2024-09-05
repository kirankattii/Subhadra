import { useNavigate } from "react-router-dom"
import { assets, text } from "../../../assets/images/assets"
import styles from "./quartzite.module.css"
import { motion } from "framer-motion"

const Quartzite = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{/* <h1 className={styles.topText}>QUARTZITE</h1>
				<h1 className={styles.middleText}>QUARTZITE</h1>
				<h1 className={styles.bottomText}>QUARTZITE</h1> */}
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
						src={text.quartzite_light}
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
						src={text.quartzite}
						alt=""
					/>
				</div>
				<motion.div className={styles.bottomText}>
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
						src={text.quartzite_light}
						alt=""
					/>
				</motion.div>
			</div>
			<h2 onClick={() => navigate("/indestrial/quartzite")}>KNOW MORE</h2>
			<div className={styles.quartzitStone}>
				<motion.img
					src={assets.quartzite_stone}
					alt=""
					animate={{ y: [0, -100, 0] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
						repeatType: "loop",
					}}
				/>
			</div>
		</div>
	)
}

export default Quartzite
