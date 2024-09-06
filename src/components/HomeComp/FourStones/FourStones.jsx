import { assets, homestones } from "../../../assets/images/assets"
import styles from "./fourStones.module.css"
import { motion } from "framer-motion"

const FourStones = () => {
	return (
		<div className={styles.continue}>
			<h1>Setting the Standard</h1>
			<p>
				At Subhadra Commercial Pvt Ltd, we epitomize industrial luxury through
				an unwavering dedication to unparalleled quality and groundbreaking
				innovation. Our mission transcends traditional standards, delivering
				industrial solutions that exemplify precision and reliability, setting a
				new benchmark for excellence. We aspire to be the global symbol of
				premium industrial products, distinguished by our meticulous
				craftsmanship and avant-garde technology. Our values—exquisite
				precision, steadfast reliability, visionary innovation, and unmatched
				excellence—infuse every facet of our operations, ensuring each product
				meets the pinnacle of industry standards. From our esteemed Low Silica
				Bhutan Dolomite and pristine Quartzite to our versatile Limestone
				Products and high-performance Dry Fly Ash, we offer elite solutions
				designed to enhance and elevate your operations. With a prestigious
				global network, we guarantee timely and impeccable delivery, solidifying
				our role as a revered partner in your success. Experience the height of
				industrial sophistication with Subhadra Commercial Pvt Ltd, where every
				product is a testament to excellence and opulence.
			</p>
			<div className={styles.stoneContainer}>
				<div className={styles.stones}>
					{homestones.map((img, i) => (
						<motion.img
							key={i}
							initial={{ y: 0 }}
							whileHover={{ y: -90 }}
							transition={{
								x: { type: "spring", stiffness: 60 },
								ease: "easeIn",
								duration: 0.5,
							}}
							src={img}
							alt=""
						/>
					))}
				</div>
				<div className={styles.blackBg}></div>
			</div>
		</div>
	)
}

export default FourStones
