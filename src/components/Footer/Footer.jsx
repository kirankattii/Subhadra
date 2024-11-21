import { Link, useNavigate } from "react-router-dom"
import { assets } from "../../assets/images/assets"
import styles from "./footer.module.css"
import { motion } from "framer-motion"

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
						<motion.p initial={{ scale: 1 }}
							whileTap={{ scale: 0.9 }} >Address</motion.p>
						<div className={styles.infoBox}>
							<span>G.T. Road, Old Court More, Durgapur-713203, Dist. : Burdwan, West Bengal, India.</span>
						</div>
					</div>
					<div className={`${styles.hoverContent} ${styles.phone}`}>
						<motion.p initial={{ scale: 1 }}
							whileTap={{ scale: 0.9 }} >Phone</motion.p>
						<div className={styles.infoBox}>
							<span>
								Phone: <a href="tel:+919800881998">+919800881998</a>
							</span>
						</div>
					</div>
					<div className={`${styles.hoverContent} ${styles.email}`}>
						<motion.p initial={{ scale: 1 }}
							whileTap={{ scale: 0.9 }} >Email</motion.p>
						<div className={styles.infoBox}>
							<span>
								<a href="mailto:info@subhadracommercials.com">info@subhadracommercials.com</a>
							</span>
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
