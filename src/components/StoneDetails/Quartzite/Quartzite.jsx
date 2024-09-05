import { assets, text } from "../../../assets/images/assets"
import styles from "./quartzite.module.css"

const Quartzite = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textImg}>
				<img
					src={text.quartzite_small}
					alt=""
				/>
			</div>
			<div className={styles.description}>
				<h2>Elevating Standards with Pure Perfection</h2>
				<p>
					Experience the unparalleled quality of our Quartzite, a premium choice
					for industries demanding superior purity and performance. Our
					Quartzite is meticulously sourced and refined to meet the highest
					standards of excellence, making it an essential material for a range
					of sophisticated applications.
				</p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.specification}>
					<h2>Key Specifications :</h2>
					<ul>
						<li>Silica Content: Minimum 97%</li>
					</ul>
				</div>
				<div className={styles.images}>
					<img
						src={assets.quartziteRock}
						alt=""
					/>

					<p>
						Unveil the potential of your projects with our Quartzite where
						purity meets perfection in every grain. Contact us today to discover
						how our premium Quartzite can enhance your operations and meet your
						highest standards.
					</p>
					<div className={styles.stone}>
						<img
							src={assets.quartzite_stone}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Quartzite
