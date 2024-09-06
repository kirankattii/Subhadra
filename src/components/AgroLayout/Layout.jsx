import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const AgroLayout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default AgroLayout
