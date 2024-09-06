import { assets } from "../../../assets/images/assets"
import styles from "./agroLanding.module.css"

const AgroLanding = () => {
	return (
		<div className={styles.container}>
			<div className={styles.agroImg}>
				<img
					src={assets.agrohomebg}
					alt=""
				/>
			</div>
			<div className={styles.content}>
				<h1>PREMIER</h1>
				<h1>GROWTH</h1>
			</div>
		</div>
	)
}

export default AgroLanding
