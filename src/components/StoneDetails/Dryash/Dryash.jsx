import { assets } from "../../../assets/images/assets"
import styles from "./dryash.module.css"

const Dryash = () => {
	return (
		<div className={styles.container}>
			<h1>Dry Fly Ash</h1>
			<div className={styles.description}>
				<h2>Exceeding Standards with Precision and Purity</h2>
				<p>
					Harness the power of superior engineering with our Dry Fly Ash,
					meticulously designed to enhance the strength and durability of your
					projects. Our premium fly ash is a testament to quality and precision,
					setting new standards in the industry.
				</p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.specification}>
					<h2>Key Specifications :</h2>
					<ul>
						<li> Blaine Fineness: Above 3200 kg/cm²</li>
						<li>Silica Content: Maximum 50%</li>
						<li>Residue: Maximum 15%</li>
						<li>Fe/Si/AI Ratio: 70%</li>
						<li>Insoluble Residue (IR): Maximum 85%</li>
						<li>Color: Grayish/White</li>
						<li> Moisture Content: Maximum 1%</li>
					</ul>
				</div>
				<div className={styles.images}>
					<img
						src={assets.dryashRock}
						alt=""
					/>

					<p>
						Elevate your industrial processes with our Low Silica Bhutan
						Dolomite where quality meets excellence in every particle. Contact
						us today to learn more about how our premium dolomite can enhance
						your operations.
					</p>
					<div className={styles.stone}>
						<img
							src={assets.dryfly_stone}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dryash
