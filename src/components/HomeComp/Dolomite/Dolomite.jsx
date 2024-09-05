// import { assets } from "../../../assets/images/assets"
// import { motion } from "framer-motion"
// import styles from "./dolomite.module.css"

// const Dolomite = () => {
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.content}>
// 				<div className={styles.topText}>
// 					<h1>LOW</h1>
// 					<h1>SILICA</h1>
// 				</div>
// 				<div className={styles.middleText}>
// 					<h1>BHUTAN</h1>
// 					<h3>KNOW MORE</h3>
// 				</div>
// 				<h1 className={styles.bottomText}>DOLOMITE</h1>
// 			</div>
// 			<div className={styles.dolomiteStone}>
// 				<motion.img
// 					src={assets.dolomite_stone}
// 					alt=""
// 					animate={{ y: [0, 120, 0] }}
// 					transition={{
// 						duration: 4,
// 						repeat: Infinity,
// 						ease: "easeInOut",
// 						repeatType: "loop",
// 					}}
// 				/>
// 			</div>
// 		</div>
// 	)
// }

// export default Dolomite

import { assets, text } from "../../../assets/images/assets"
import { motion } from "framer-motion"
import styles from "./dolomite.module.css"
import { useNavigate } from "react-router-dom"

const Dolomite = () => {
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
							x: { type: "spring", stiffness: 50 },
							ease: "easeIn",
							opacity: { duration: 1 },
							duration: 1,
						}}
						src={text.low}
						alt=""
					/>
					<motion.img
						initial={{ x: 100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.silica}
						alt=""
					/>
				</div>
				<div className={styles.middleText}>
					<motion.img
						initial={{ x: -100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 50 },
							ease: "easeIn",
							opacity: { duration: 1 },
							duration: 1,
						}}
						src={text.bhutan}
						alt=""
					/>
					<motion.h3
						initial={{ x: 100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						onClick={() => navigate("/indestrial/dolomite")}
					>
						KNOW MORE
					</motion.h3>
				</div>
				<div className={styles.bottomText}>
					<motion.img
						initial={{ x: 100, opacity: 0.5 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.9,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						src={text.dolomite}
						alt=""
					/>
				</div>
			</div>
			<div className={styles.dolomiteStone}>
				<motion.img
					src={assets.dolomite_stone}
					alt=""
					animate={{ y: [0, 100, 0] }}
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

export default Dolomite
