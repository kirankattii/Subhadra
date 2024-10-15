import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/AgroNavbar/Navbar"
import Contact from "../HomeComp/Contact/Contact"


const AgroLayout = () => {
	const location = useLocation()
	const shouldShowContact = location.pathname !== '/agro/contact-us'
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			{shouldShowContact && <Contact
				contColor={"#4BA040"}
				switchColor={"#B78F4A"}
				text={"Switch To Industrial"}
				nav={"/indestrial"}
			/>}
		</div>
	)
}

export default AgroLayout
