import { useNavigate } from "react-router-dom"
import { assets, text } from "../../../assets/images/assets"
import styles from "./dryash.module.css"
import { motion } from "framer-motion"

const Dryash = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.topText}>
					<motion.img
						initial={{ x: -100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.dry}
						alt=""
					/>
					<motion.img
						initial={{ x: 100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.fly}
						alt=""
					/>
				</div>
				<div className={styles.bottomText}>
					<motion.img
						initial={{ x: -100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.ash}
						alt=""
					/>

					<motion.h2
						initial={{ x: 100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60, mass: 1 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						onClick={() => navigate("/indestrial/dry-fly-ash")}
					>
						KNOW MORE
					</motion.h2>
				</div>
			</div>
			<div className={styles.dryash}>
				<motion.img
					animate={{ y: [0, 100, 0] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
						repeatType: "loop",
					}}
					src={assets.dryfly_stone}
					alt=""
				/>
			</div>
		</div>
	)
}

export default Dryash
