import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import { assets } from "../../../../../assets/images/assets"

export default function index() {
	return (
		<div className={styles.footer}>
			<Link>
				<img
					src={assets.instagram}
					alt=""
				/>
			</Link>
			<Link>
				<img
					src={assets.x}
					alt=""
				/>
			</Link>
			<Link>
				<img
					src={assets.facebook}
					alt=""
				/>
			</Link>
		</div>
	)
}
