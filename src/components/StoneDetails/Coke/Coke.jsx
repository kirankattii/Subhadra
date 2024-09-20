import { assets } from '../../../assets/images/assets'
import styles from './coke.module.css'

const Coke = () => {
  return (
    <div className={styles.container}>
      <h1>METALLURGICAL COKE</h1>
      <div className={styles.description}>
        <h2>Elevating Efficiency with Reliable Performance</h2>
        <p>
          At Subhadra Commercial Pvt Ltd, our metallurgical coke is a high-quality carbon product known for its exceptional strength, low ash content, and consistent performance. Ideal for steelmaking and foundry applications, it meets stringent industry standards, delivering reliable and efficient results. Available in various sizes, we ensure optimal packaging and prompt delivery, making us your dependable partner for premium metallurgical coke solutions.
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.specification}>
          <h2>Key Specifications :</h2>
          <ul>
            <li> Fixed Carbon (85-90%)
            </li>
            <li>  Low Ash (8-12%)
            </li>
            <li>  Sulfur (0.5-1%)
            </li>
            <li>CSR (&gt;60%)</li>
            <li>CRI (&lt;30%)</li>
            <li>Calorific Value (6000-8000 kcal/kg)</li>
          </ul>
        </div>
        <div className={styles.images}>
          <img
            src={assets.coke_rock}
            alt=""
          />

          <p>
            Experience the unmatched quality and performance of our premium metallurgical coal. Contact us to discover how it can enhance your operations and deliver reliable solutions tailored to your industrial needs.
          </p>
          <div className={styles.stone}>
            <img
              src={assets.coke_stone}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coke
