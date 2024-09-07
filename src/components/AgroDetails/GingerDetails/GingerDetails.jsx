import styles from "./gingerDetails.module.css"
import { assets, text } from "../../../assets/images/assets"

const GingerDetails = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<img
					src={text.blackGinger}
					alt="onion"
				/>
			</div>
			<div className={styles.contant}>
				<div className={styles.left}>
					<img
						src={text.blackGinger}
						alt="onion"
					/>
					<p>
						At Subhadra Commercial Pvt Ltd, our ginger is renowned for its
						exceptional quality and potent flavor. Sourced from the best-growing
						regions, our ginger boasts a robust, spicy kick and is rich in
						essential nutrients, including vitamins and minerals. Its natural
						anti-inflammatory and antioxidant properties make it a valuable
						addition to both culinary and medicinal applications. Carefully
						processed to preserve its aromatic oils and fresh taste, our ginger
						enhances a wide range of dishes while offering health benefits. With
						its superior quality and versatility, it brings both flavor and
						wellness to every kitchen.
					</p>
					<div>
						<h2>Benefits:</h2>
						<ul>
							<li>
								Anti-Inflammatory: Reduces inflammation and eases discomfort.
							</li>
							<li>
								Digestive Health: Aids in digestion and alleviates nausea.
							</li>
							<li>
								Antioxidant: Provides protection against oxidative stress.
							</li>
							<li>
								Immune Support: Enhances immune function and helps fight
								infections.
							</li>
							<li>
								Pain Relief: May relieve muscle and joint pain. Metabolism
							</li>
							<li>Boost: Supports a healthy metabolism.</li>
							<li>Heart Health: May help lower cholesterol levels.</li>
							<li>
								Flavor Enhancer: Adds a spicy kick to a variety of dishes.
							</li>
							<li>Detoxifying: Assists in detoxifying the body.</li>
							<li>
								Versatile Use: Useful in both culinary and medicinal
								applications.
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.images}>
						<img
							src={assets.gingerField}
							alt=""
							className={styles.onionfield}
						/>
						<img
							src={assets.ginger4}
							alt=""
							className={styles.onion}
						/>
					</div>
					<p>Volume Exported: 3,000 MTs every year</p>
				</div>
			</div>
		</div>
	)
}

export default GingerDetails
