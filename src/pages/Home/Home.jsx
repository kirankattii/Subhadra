import { assets } from "../../assets/images/assets"
import Contact from "../../components/HomeComp/Contact/Contact"
import Dolomite from "../../components/HomeComp/Dolomite/Dolomite"
import Dryash from "../../components/HomeComp/Dryash/Dryash"
import FourStones from "../../components/HomeComp/FourStones/FourStones"
import Landing from "../../components/HomeComp/Landing/Landing"
import LimeStone from "../../components/HomeComp/Limestone/LimeStone"
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
				<Contact />
			</div>
		</div>
	)
}

export default Home
