import React from "react"
import { Route, Routes } from "react-router-dom"
import IndustrialLayout from "./components/IndustrialLayout/layout"
import Home from "./pages/Home/Home"
import NotFoundPage from "./components/NotFoundPage"
import Welcome from "./pages/Welcome/Welcome"
import Dolomite from "./components/StoneDetails/Dolomite/Dolomite"
import Quartzite from "./components/StoneDetails/Quartzite/Quartzite"
import Limestone from "./components/StoneDetails/Limestone/Limestone"
import Dryash from "./components/StoneDetails/Dryash/Dryash"
import AgroLayout from "./components/AgroLayout/Layout"
import AgroHome from "./pages/AgroHome/AgroHome"
import OnionDetails from "./components/AgroDetails/OnionDetails/OnionDetails"
import RiceDetails from "./components/AgroDetails/RiceDetails/RiceDetails"

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Welcome />}
				/>
				<Route
					path="/indestrial"
					element={<IndustrialLayout />}
				>
					<Route
						path=""
						element={<Home />}
					/>
					<Route
						path="dolomite"
						element={<Dolomite />}
					/>
					<Route
						path="quartzite"
						element={<Quartzite />}
					/>
					<Route
						path="limestone"
						element={<Limestone />}
					/>
					<Route
						path="dry-fly-ash"
						element={<Dryash />}
					/>
				</Route>
				<Route
					path="/agro"
					element={<AgroLayout />}
				>
					<Route
						path=""
						element={<AgroHome />}
					/>
					<Route
						path="onion"
						element={<OnionDetails />}
					/>
					<Route
						path="rice"
						element={<RiceDetails />}
					/>
				</Route>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
			</Routes>
		</div>
	)
}

export default App
