import { assets } from "../../../assets/images/assets"
import styles from "./AboutIndestrial.module.css"

const AboutIndestrial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <img src={assets.aboutIndustaialLanding} alt="" />
        <h2>A Legacy of Distinction</h2>
      </div>
    </div>
  )
}

export default AboutIndestrial
