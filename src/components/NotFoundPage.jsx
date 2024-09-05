import React from "react"

const NotFoundPage = () => {
	const styles = {
		container: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh",
			backgroundColor: "#f8f9fa",
			textAlign: "center",
			fontFamily: "Arial, sans-serif",
			color: "#333",
		},
		heading: {
			fontSize: "96px",
			margin: "0",
		},
		message: {
			fontSize: "24px",
			margin: "20px 0",
		},
		link: {
			padding: "10px 20px",
			fontSize: "18px",
			color: "#fff",
			backgroundColor: "#007bff",
			textDecoration: "none",
			borderRadius: "5px",
			marginTop: "20px",
		},
	}

	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>404</h1>
			<p style={styles.message}>
				Oops! The page you're looking for doesn't exist.
			</p>
			<a
				href="/"
				style={styles.link}
			>
				Go Home
			</a>
		</div>
	)
}

export default NotFoundPage
