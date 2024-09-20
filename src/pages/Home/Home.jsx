import { assets } from "../../assets/images/assets"
import Calcined from "../../components/HomeComp/Calcined/Calcined"
import Coke from "../../components/HomeComp/Coke/Coke"
import Contact from "../../components/HomeComp/Contact/Contact"
import Dolomite from "../../components/HomeComp/Dolomite/Dolomite"
import Dryash from "../../components/HomeComp/Dryash/Dryash"
import FourStones from "../../components/HomeComp/FourStones/FourStones"
import Landing from "../../components/HomeComp/Landing/Landing"
import LimeStone from "../../components/HomeComp/Limestone/LimeStone"
import Manganese from "../../components/HomeComp/Manganese/Manganese"
import Quartzite from "../../components/HomeComp/Quartzite/Quartzite"
import styles from "./home.module.css"

const Home = () => {
	return (
		<div className={styles.container}>
			<Landing />
			<FourStones />
			<div className={styles.stones}>
				<Dolomite />
				<Quartzite />
				<LimeStone />
				<Dryash />
				<Manganese />
				<Calcined />
				<Coke />
			</div>
			<Contact
				switchColor={"#4BA040"}
				contColor={"#B78F4A"}
				text={"Switch To Agro"}
				nav={"/agro"}
			/>
		</div>
	)
}

export default Home
