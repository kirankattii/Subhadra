import { Link, useNavigate } from "react-router-dom"
import { assets } from "../../assets/images/assets"
import styles from "./footer.module.css"

const Footer = ({ switchColor, text, nav }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
		})
		navigate(nav)
	}
	return (
		<footer className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.contact}>
					<div className={`${styles.hoverContent} ${styles.address}`}>
						<p>Address</p>
						<div className={styles.infoBox}>
							<span>G.T. Road, Old Court More, Durgapur-713203, Dist. : Burdwan, West Bengal, India.</span>
						</div>
					</div>
					<div className={`${styles.hoverContent} ${styles.phone}`}>
						<p>Phone</p>
						<div className={styles.infoBox}>
							<span>Phone : 7797821111 <br /> Telefax : 0343 2585058</span>
						</div>
					</div>
					<div className={`${styles.hoverContent} ${styles.email}`}>
						<p>Email</p>
						<div className={styles.infoBox}>
							<span>scpl.dgp@gmail.com</span>
						</div>
					</div>
				</div>
				<button
					style={{ backgroundColor: switchColor }}
					onClick={handleClick}
				>
					{text}
				</button>
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
