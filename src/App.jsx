import React, { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
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
import GingerDetails from "./components/AgroDetails/GingerDetails/GingerDetails"
import Manganese from "./components/StoneDetails/Manganese/Manganese"
import Calcined from "./components/StoneDetails/Calcined/Calcined"
import Coke from "./components/StoneDetails/Coke/Coke"
import AboutIndestrial from "./pages/About/AboutIndestrial/AboutIndestrial"
import AboutAgro from "./pages/About/AboutAgro/AboutAgro"
import Contact from "./pages/Contact/Contact"
import Blog from "./pages/Blog/Blog"
import IndustrialProducts from "./pages/Products/IndustrialProducts/IndustrialProducts"
import AgroProducts from "./pages/Products/AgroProducts/AgroProducts"
import RedChilliDetails from "./components/AgroDetails/RedChilliDetails/RedChilliDetails"
import AgroBlog from "./pages/Blog/AgroBlog/AgroBlog"
import IndustrialBlog from "./pages/Blog/IndustrialBlog/IndustrialBlog"

const App = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])
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
						path="about-us"
						element={<AboutIndestrial />}
					/>
					<Route
						path="products"
						element={<IndustrialProducts />}
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
					<Route
						path="manganese-ore"
						element={<Manganese />}
					/>
					<Route
						path="calcined-dolomite"
						element={<Calcined />}
					/>
					<Route
						path="metallurgical-coke"
						element={<Coke />}
					/>
					<Route path="contact-us"
						element={<Contact switchColor={"#4BA040"}
							contColor={"#B78F4A"}
							text={"Switch To Agro"}
							nav={"/agro"} />}
					/>
					<Route path="blogs" element={<IndustrialBlog switchColor={"#4BA040"}
						contColor={"#B78F4A"}
						text={"Switch To Agro"}
						nav={"/agro"}

					/>} />

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
						path="about-us"
						element={<AboutAgro />}
					/>
					<Route path="/agro/products" element={<AgroProducts />} />
					<Route
						path="onion"
						element={<OnionDetails />}
					/>
					<Route
						path="rice"
						element={<RiceDetails />}
					/>
					<Route
						path="ginger"
						element={<GingerDetails />}
					/>
					<Route
						path="red-chilli"
						element={<RedChilliDetails />}
					/>
					<Route path="contact-us"
						element={<Contact contColor={"#4BA040"}
							switchColor={"#B78F4A"}
							text={"Switch To Industrial"}
							nav={"/indestrial"} />}
					/>
					<Route path="blogs"
						element={<AgroBlog
							contColor={"#4BA040"}
							switchColor={"#B78F4A"}
							text={"Switch To Industrial"}
							nav={"/indestrial"}
						/>
						}

					/>
				</Route>
				<Route path="/contact-us" element={<Contact />} />
				{/* <Route path="/blogs" element={<Blog />} /> */}
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
			</Routes>
		</div>
	)
}

export default App
