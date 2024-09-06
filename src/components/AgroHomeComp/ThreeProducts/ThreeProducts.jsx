import { assets } from "../../../assets/images/assets"
import styles from "./threeProducts.module.css"

const ThreeProducts = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Growing Excellence</h1>
				<p>
					At Subhadra Commercial Pvt Ltd, we specialize in delivering
					high-quality agro products that nurture growth and sustainability. Our
					commitment to excellence ensures that every product meets rigorous
					standards, providing our clients with reliable and superior solutions
					for their agricultural needs. With a focus on innovation and
					integrity, we cultivate long-lasting relationships rooted in trust and
					mutual success.
				</p>
			</div>
			<div className={styles.products}>
				<div className={styles.images}>
					<img
						src={assets.ginger1}
						alt=""
					/>
					<img
						src={assets.riceImg}
						alt=""
					/>
					<img
						src={assets.onion1}
						alt=""
					/>
				</div>
				<div className={styles.greenContent}></div>
			</div>
		</div>
	)
}

export default ThreeProducts
