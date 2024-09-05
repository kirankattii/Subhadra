import { assets } from "../../../assets/images/assets"
import styles from "./landing.module.css"

const Landing = () => {
	return (
		<div className={styles.landing}>
			<div className={styles.homeBg}>
				<img
					src={assets.home_bg}
					alt=""
				/>
			</div>
			<div className={styles.homeContent}>
				<h1 className={styles.difining}>DIFINING</h1>
				<h1 className={styles.luxury}>LUXURY</h1>
			</div>
		</div>
	)
}

export default Landing
