// import { useEffect, useState } from "react"
// import styles from "./contact.module.css"
// import axios from "axios"
// import Footer from "../../Footer/Footer"
// import { assets } from "../../../assets/images/assets"

// const Contact = ({ contColor, switchColor, text, nav }) => {
// 	const [countries, setCountries] = useState([])
// 	const [selectedCountry, setSelectedCountry] = useState("")

// 	useEffect(() => {
// 		// Fetch the list of countries from the API
// 		axios
// 			.get("https://restcountries.com/v3.1/all")
// 			.then((response) => {
// 				// Sort countries by name
// 				const sortedCountries = response.data.sort((a, b) =>
// 					a.name.common.localeCompare(b.name.common)
// 				)
// 				setCountries(sortedCountries)
// 			})
// 			.catch((error) => {
// 				console.error("There was an error fetching the country data!", error)
// 			})
// 	}, [])

// 	const handleCountryChange = (e) => {
// 		setSelectedCountry(e.target.value)
// 	}
// 	return (
// 		<>
// 			<div className={styles.container}>
// 				<div className={styles.heading}>
// 					<h2>Your Gateway to Excellence Begins Here</h2>
// 					<div className={styles.map}>
// 						<img src={assets.gmap} alt="" />
// 						<div className={styles.gmap}>
// 							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61526.32158201618!2d74.95646584899545!3d15.463165819812867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd62d889aba7%3A0x5a4f2144717bcf70!2sDharwad%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727153389526!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
// 						</div>
// 					</div>
// 				</div>
// 				<div className={styles.content}>
// 					<div className={styles.left}>
// 						<p>
// 							For inquiries, expert advice, or to learn more about how we can
// 							support your needs, contact us today. We're here to provide
// 							exceptional service and premium solutions.
// 						</p>
// 						<h1 style={{ color: contColor }}>CONT.</h1>
// 						<p>
// 							For inquiries, expert advice, or to learn more about how we can
// 							support your needs, contact us today. We're here to provide
// 							exceptional service and premium solutions.
// 						</p>
// 					</div>
// 					<div className={styles.right}>
// 						<form className={styles.form}>
// 							<div className={styles.row}>
// 								<input
// 									type="text"
// 									placeholder="First Name"
// 									className={styles.input}
// 								/>
// 								<input
// 									type="text"
// 									placeholder="First Name"
// 									className={styles.input}
// 								/>
// 							</div>
// 							<input
// 								type="email"
// 								placeholder="Email Address"
// 								className={styles.input}
// 							/>
// 							<div className={styles.row}>
// 								<div className={styles.contactWrapper}>
// 									<select
// 										className={styles.countrySelect}
// 										value={selectedCountry}
// 										onChange={handleCountryChange}
// 									>
// 										<option
// 											value=""
// 											disabled
// 										>
// 											Select Country
// 										</option>
// 										{countries.map((country) => (
// 											<option
// 												key={country.cca3}
// 												value={country.name.common}
// 											>
// 												{country.name.common}
// 											</option>
// 										))}
// 									</select>
// 									<input
// 										type="text"
// 										placeholder="Contact Number"
// 										className={styles.inputContact}
// 									/>
// 								</div>
// 							</div>
// 							<textarea
// 								placeholder="Message"
// 								className={styles.textarea}
// 								rows={4}
// 							></textarea>
// 							<button
// 								type="submit"
// 								className={styles.submitButton}
// 							>
// 								Submit
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 			<div className={styles.footer}>
// 				<Footer
// 					switchColor={switchColor}
// 					text={text}
// 					nav={nav}
// 				/>
// 			</div>
// 		</>
// 	)
// }

// export default Contact





import { useEffect, useState } from "react";
import styles from "./contact.module.css";
import axios from "axios";
import Footer from "../../Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { assets } from "../../../assets/images/assets";

const Contact = ({ contColor, switchColor, text, nav }) => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [isMapVisible, setIsMapVisible] = useState(false);

	useEffect(() => {
		// Fetch the list of countries from the API
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((response) => {
				// Sort countries by name
				const sortedCountries = response.data.sort((a, b) =>
					a.name.common.localeCompare(b.name.common)
				);
				setCountries(sortedCountries);
			})
			.catch((error) => {
				console.error("There was an error fetching the country data!", error);
			});
	}, []);

	const handleCountryChange = (e) => {
		setSelectedCountry(e.target.value);
	};

	const handleMapHover = () => {
		setIsMapVisible(true);
	};

	const handleMapClose = () => {
		setIsMapVisible(false);
	};

	const handleMapLeave = () => {
		setIsMapVisible(false);
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h2>Your Gateway to Excellence Begins Here</h2>
					<div
						className={styles.map}
						onMouseEnter={handleMapHover}
						onMouseLeave={handleMapLeave}
					>
						<img src={assets.hoverMap} alt="" />
						<AnimatePresence>
							{isMapVisible && (
								<motion.div
									initial={{ opacity: 0, scale: 0.2, }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.5 }}
									transition={{ duration: 0.5 }} className={styles.gmap}>
									<button className={styles.closeButton} onClick={handleMapClose}>
										X
									</button>
									<iframe
										loading="false"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61526.32158201618!2d74.95646584899545!3d15.463165819812867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd62d889aba7%3A0x5a4f2144717bcf70!2sDharwad%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727153389526!5m2!1sen!2sin"
										style={{ border: 0, opacity: 1, transition: 'none' }}

										// allowFullScreen=""
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.left}>
						<p>
							For inquiries, expert advice, or to learn more about how we can
							support your needs, contact us today. We're here to provide
							exceptional service and premium solutions.
						</p>
						<h1 style={{ color: contColor }}>CONT.</h1>
						<p>
							For inquiries, expert advice, or to learn more about how we can
							support your needs, contact us today. We're here to provide
							exceptional service and premium solutions.
						</p>
					</div>
					<div className={styles.right}>
						<form className={styles.form}>
							<div className={styles.row}>
								<input
									type="text"
									placeholder="First Name"
									className={styles.input}
								/>
								<input
									type="text"
									placeholder="First Name"
									className={styles.input}
								/>
							</div>
							<input
								type="email"
								placeholder="Email Address"
								className={styles.input}
							/>
							<div className={styles.row}>
								<div className={styles.contactWrapper}>
									<select
										className={styles.countrySelect}
										value={selectedCountry}
										onChange={handleCountryChange}
									>
										<option value="" disabled>
											Select Country
										</option>
										{countries.map((country) => (
											<option key={country.cca3} value={country.name.common}>
												{country.name.common}
											</option>
										))}
									</select>
									<input
										type="text"
										placeholder="Contact Number"
										className={styles.inputContact}
									/>
								</div>
							</div>
							<textarea
								placeholder="Message"
								className={styles.textarea}
								rows={4}
							></textarea>
							<button type="submit" className={styles.submitButton}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer switchColor={switchColor} text={text} nav={nav} />
			</div>
		</>
	);
};

export default Contact;
