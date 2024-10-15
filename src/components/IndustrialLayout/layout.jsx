import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/IndustrialNavbar/Navbar"
import Footer from "../Footer/Footer"
import Contact from "../HomeComp/Contact/Contact"


const IndustrialLayout = () => {
	const location = useLocation()
	const shouldShowContact = location.pathname !== '/indestrial/contact-us'
	// || '/indestrial/blogs'
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			{shouldShowContact && <Contact
				switchColor={"#4BA040"}
				contColor={"#B78F4A"}
				text={"Switch To Agro"}
				nav={"/agro"}
			/>}
		</div>
	)
}

export default IndustrialLayout
