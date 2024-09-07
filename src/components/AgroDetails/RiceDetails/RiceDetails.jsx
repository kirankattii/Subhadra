import { assets, text } from "../../../assets/images/assets"
import styles from "./riceDetails.module.css"

const RiceDetails = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<img
					src={text.blackRice}
					alt="onion"
				/>
			</div>
			<div className={styles.contant}>
				<div className={styles.left}>
					<img
						src={text.blackRice}
						alt="onion"
					/>
					<p>
						At Subhadra Commercial Pvt Ltd, our rice stands out for its
						exceptional quality and taste. Sourced from the finest fields, our
						rice is rich in essential nutrients, including vitamins and
						minerals, making it a healthy choice for any meal. Its superior
						texture and flavor enhance a variety of dishes, from everyday meals
						to gourmet creations. Our rice is meticulously processed to retain
						its natural goodness and ensure a fluffy, aromatic result every
						time. Trusted for its consistency and premium quality, it delivers
						both nourishment and culinary delight in every grain.
					</p>
					<div>
						<h2>Benefits:</h2>
						<ul>
							<li>Energy Boost: High in carbohydrates for sustained energy.</li>
							<li>Nutrient-Rich: Contains essential vitamins and minerals.</li>
							<li> Digestive Health: Easily digestible and gut-friendly.</li>
							<li>
								Gluten-Free: Safe for those with gluten sensitivities. Heart
							</li>
							<li>Health: Low in sodium and cholesterol.</li>
							<li>Versatile: Fits a variety of dishes.</li>
							<li>Low Fat: Naturally low in fat.</li>
							<li>
								Metabolism Support: Provides key nutrients for metabolism.
							</li>
							<li>Hydration: Helps maintain fluid balance.</li>
							<li>Comforting: A satisfying and comforting meal choice.</li>
						</ul>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.images}>
						<img
							src={assets.riceField}
							alt=""
							className={styles.onionfield}
						/>
						<img
							src={assets.riceImg}
							alt=""
							className={styles.onion}
						/>
					</div>
					<p>
						Volume Exported: Significant quantities to West African, Middle
						Eastern, and Southeast Asian countries
					</p>
				</div>
			</div>
		</div>
	)
}

export default RiceDetails
