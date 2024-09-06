import { useEffect, useState } from "react"
import styles from "./contact.module.css"
import axios from "axios"
import Footer from "../../Footer/Footer"

const Contact = ({ contColor, switchColor, text, nav }) => {
	const [countries, setCountries] = useState([])
	const [selectedCountry, setSelectedCountry] = useState("")

	useEffect(() => {
		// Fetch the list of countries from the API
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((response) => {
				// Sort countries by name
				const sortedCountries = response.data.sort((a, b) =>
					a.name.common.localeCompare(b.name.common)
				)
				setCountries(sortedCountries)
			})
			.catch((error) => {
				console.error("There was an error fetching the country data!", error)
			})
	}, [])

	const handleCountryChange = (e) => {
		setSelectedCountry(e.target.value)
	}
	return (
		<>
			<div className={styles.container}>
				<h2>Your Gateway to Excellence Begins Here</h2>
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
										<option
											value=""
											disabled
										>
											Select Country
										</option>
										{countries.map((country) => (
											<option
												key={country.cca3}
												value={country.name.common}
											>
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
							<button
								type="submit"
								className={styles.submitButton}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer
					switchColor={switchColor}
					text={text}
					nav={nav}
				/>
			</div>
		</>
	)
}

export default Contact
