import { assets } from "../../../assets/images/assets"
import styles from "./dolomite.module.css"

const Dolomite = () => {
	return (
		<div className={styles.container}>
			<h1>Low Silica Bhutan Dolomite</h1>
			<div className={styles.description}>
				<h2>Unrivaled Purity, Superior Performance</h2>
				<p>
					Discover the pinnacle of industrial excellence with our Low Silica
					Bhutan Dolomite. Renowned for its exceptional purity and high
					performance, this premium dolomite is a cornerstone for a variety of
					advanced industrial applications.
				</p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.specification}>
					<h2>Key Specifications :</h2>
					<ul>
						<li>LOI (Loss on Ignition): 45.39%</li>
						<li>SiO₂ (Silica): 1.58%</li>
						<li>Al₂O₃ (Alumina): 1.28%</li>
						<li>Fe₂O₃ (Iron Oxide): 0.80%</li>
						<li>CaO (Calcium Oxide): Above 30%</li>
						<li>MgO (Magnesium Oxide): Minimum 20%</li>
						<li> AI (Alkaline): 1.16%</li>
					</ul>
				</div>
				<div className={styles.images}>
					<img
						src={assets.dolomiteRock}
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
							src={assets.dolomite_stone}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dolomite
