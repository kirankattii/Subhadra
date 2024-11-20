import AgroLanding from "../../components/AgroHomeComp/AgroLanding/AgroLanding"
import Ginger from "../../components/AgroHomeComp/Ginger/Ginger"
import Onions from "../../components/AgroHomeComp/Onions/Onions"
import RedChilli from "../../components/AgroHomeComp/RedChilli/RedChilli"
import Rice from "../../components/AgroHomeComp/Rice/Rice"
import ThreeProducts from "../../components/AgroHomeComp/ThreeProducts/ThreeProducts"
import Contact from "../../components/HomeComp/Contact/Contact"
import styles from "./agroHome.module.css"

const AgroHome = () => {
	return (
		<div className={styles.container}>
			<AgroLanding />
			<ThreeProducts />
			<Onions />
			<Rice />
			<RedChilli />
			<Ginger />
			{/* <Contact
				contColor={"#4BA040"}
				switchColor={"#B78F4A"}
				text={"Switch To Industrial"}
				nav={"/indestrial"}
			/> */}
		</div>
	)
}

export default AgroHome
