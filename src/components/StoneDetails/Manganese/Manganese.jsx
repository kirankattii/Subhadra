import { assets, text } from "../../../assets/images/assets"
import styles from "./manganese.module.css"

const Manganese = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textImg}>
				<img
					src={text.manganese_small}
					alt=""
				/>
			</div>
			<div className={styles.description}>
				<h2>Powering Industries with Premium Manganese</h2>
				<p>
					Subhadra Commercial Pvt Ltd offers top-grade manganese ore with high
					manganese content and minimal impurities, perfect for steel production
					and alloy manufacturing. Our ore, available in both lumpy and fine
					forms, meets stringent industrial standards, ensuring quality and
					reliability. With competitive pricing and timely delivery, we are your
					trusted source for premium manganese that fuels industrial growth.
				</p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.specification}>
					<h2>Key Specifications :</h2>
					<ul>
						<li>Manganese Content: 30% to 50%.</li>
						<li>Form: Lumpy or fine particles.</li>
						<li>Size: 10-100mm (for lumpy ore).</li>
						<li>Moisture: Less than 5%.</li>
						<li>Silica (SiO2): Below 10%.</li>
						<li>Phosphorus (P): Less than 0.1%.</li>
						<li> Iron (Fe): Below 15%.</li>
						<li> Packaging: Bulk or customized packaging.</li>
					</ul>
				</div>
				<div className={styles.images}>
					<img
						src={assets.manganese_rock}
						alt=""
					/>

					<p>
						Discover the blend of exceptional quality and industrial strength
						with our premium manganese ore. Contact us today to explore how it
						can optimize your operations and meet your specific needs
					</p>
					<div className={styles.stone}>
						<img
							src={assets.manganese_stone}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Manganese
