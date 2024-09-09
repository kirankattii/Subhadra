import styles from "./calcined.module.css"
import { assets } from "../../../assets/images/assets"

const Calcined = () => {
	return (
		<div className={styles.container}>
			<h1>Calcined Dolomite</h1>
			<div className={styles.description}>
				<h2>Refined strength, delivering unmatched performance</h2>
				<p>
					At Subhadra Commercial Pvt Ltd, our calcined dolomite offers high
					calcium and magnesium content, ensuring superior performance for
					steelmaking, water treatment, and construction applications. Available
					in both lump and powder form, it meets rigorous industry standards,
					providing excellent quality and reliability. With efficient packaging
					and timely delivery, we are your trusted partner for premium calcined
					dolomite solutions.
				</p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.specification}>
					<h2>Key Specifications :</h2>
					<ul>
						<li>Calcium Oxide (CaO) Content: 50% to 58%.</li>
						<li>Magnesium Oxide (MgO) Content: 28% to 35%.</li>
						<li>Physical Form: Lumps or powder.</li>
						<li>Size: 10-50mm (for lumps) or custom particle size.</li>
						<li>Moisture Content: Less than 2%.</li>
						<li>Silica (SiO2) Content: Below 5%.</li>
						<li>Sulfur (S) Content: Less than 0.1%.</li>
						<li>Packaging: Bulk, 50kg bags, or custom packaging.</li>
					</ul>
				</div>
				<div className={styles.images}>
					<img
						src={assets.calcined_rock}
						alt=""
					/>

					<p>
						Experience the superior quality and versatility of our premium
						calcined dolomite. Reach out to us to see how it can elevate your
						projects and provide effective solutions tailored to your
						requirements.
					</p>
					<div className={styles.stone}>
						<img
							src={assets.calcined_Stone}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Calcined
