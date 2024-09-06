import { assets, text } from "../../../assets/images/assets"
import styles from "./onionDetails.module.css"

const OnionDetails = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<img
					src={text.black_onion}
					alt="onion"
				/>
			</div>
			<div className={styles.contant}>
				<div className={styles.left}>
					<img
						src={text.black_onion}
						alt="onion"
					/>
					<p>
						At Subhadra Commercial Pvt Ltd, our onions are a testament to
						quality and excellence. Sourced from premium farms, these onions are
						rich in essential nutrients like vitamins C and B6, and minerals
						such as potassium. Known for their antioxidant and anti-inflammatory
						properties, they not only enhance the flavor of your dishes but also
						contribute to overall health. Our onions support heart health by
						helping to lower blood pressure and cholesterol levels while aiding
						digestion with their high fiber content. Versatile and robust, they
						bring superior taste and nutritional benefits to every meal.
					</p>
					<div>
						<h2>Benefits:</h2>
						<ul>
							<li>Nutrient-Rich: High in vitamins and minerals.</li>
							<li>Antioxidant: Fights oxidative stress.</li>
							<li>Anti-Inflammatory: Reduces inflammation.</li>
							<li> Heart Health: Lowers blood pressure and cholesterol.</li>
							<li>Immunity Boost: Strengthens immune function.</li>
							<li>Digestive Health: Aids digestion and gut health.</li>
							<li>Antimicrobial: Combats bacteria and viruses.</li>
							<li>Skin Health: Improves skin appearance.</li>
							<li>Blood Sugar: Regulates blood sugar levels.</li>
							<li>Culinary Versatility: Enhances flavor in various dishes.</li>
						</ul>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.images}>
						<img
							src={assets.onionField}
							alt=""
							className={styles.onionfield}
						/>
						<img
							src={assets.onion1}
							alt=""
							className={styles.onion}
						/>
					</div>
					<p>Volume Exported: 15,000 MTs every year</p>
				</div>
			</div>
		</div>
	)
}

export default OnionDetails
