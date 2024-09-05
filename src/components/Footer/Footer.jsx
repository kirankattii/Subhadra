import { Link } from "react-router-dom"
import { assets } from "../../assets/images/assets"
import styles from "./footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.contact}>
					<p>Address</p>
					<p>Phone</p>
					<p>Email</p>
				</div>
				<button>Switch To Agro</button>
				<div className={styles.social}>
					<img
						src={assets.instagram}
						alt=""
					/>
					<img
						src={assets.x}
						alt=""
					/>
					<img
						src={assets.facebook}
						alt=""
					/>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>COPYRIGHT © 2024 Subhadracommercial, All Rights Reserved.</p>
				<p>
					{" "}
					Designed & Developed By :
					<Link to={"https://www.pitamaas.com"}>Pitamaas</Link>
				</p>
			</div>
		</footer>
	)
}

export default Footer
