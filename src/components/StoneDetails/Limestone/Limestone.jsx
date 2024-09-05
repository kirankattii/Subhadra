import { assets, text } from "../../../assets/images/assets"
import styles from "./limestone.module.css"

const Limestone = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textImg}>
				<img
					src={text.limestone_small}
					alt=""
				/>
			</div>
			<div className={styles.description}>
				<h2>Timeless Elegance, Exceptional Versatility</h2>
				<p>
					Unlock the potential of your projects with our superior Limestone
					Products, crafted to deliver excellence across a range of industrial
					and construction applications. Our limestone is renowned for its
					quality, consistency, and adaptability, making it a distinguished
					choice for diverse needs.
				</p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.specification}>
					<h2>Product Varieties :</h2>
					<ul>
						<li>Available Forms : Lumps and Powder</li>
						<li>
							Quality: Every quality available to cater to specific industrial
							requirements
						</li>
					</ul>
				</div>
				<div className={styles.images}>
					<img
						src={assets.limestoneRock}
						alt=""
					/>

					<p>
						Experience the fusion of classic quality and contemporary
						versatility. Reach out to us today to explore how our premium
						limestone can elevate your projects and offer the ideal solutions
						for your needs.
					</p>
					<div className={styles.stone}>
						<img
							src={assets.lime_stone}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Limestone
