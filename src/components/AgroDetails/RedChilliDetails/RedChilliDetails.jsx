import { assets, text } from '../../../assets/images/assets'
import styles from './RedChilliDetails.module.css'

const RedChilliDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          src={text.chilliBlack}
          alt="onion"
        />
      </div>
      <div className={styles.contant}>
        <div className={styles.left}>
          <img
            src={text.chilliBlack}
            alt="onion"
          />
          <p>
            At Subhadra Commercial Pvt Ltd, our red chilli stands out for its vibrant color, intense heat, and exceptional flavor. Sourced from the finest farms, our red chilli is packed with essential nutrients, including vitamins A and C, and powerful antioxidants. Known for its fiery spice and rich aroma, it elevates a wide variety of dishes, from traditional recipes to modern cuisines. Carefully processed to retain its natural pungency and bold taste, our red chilli adds not only flavor but also health benefits, including boosting metabolism and supporting immune health. With unmatched quality and versatility, it’s the perfect spice for every kitchen.
          </p>
          <div>
            <h2>Benefits:</h2>
            <ul>
              <li>Boosts Metabolism: Capsaicin in red chili increases metabolic rate and helps burn calories faster.</li>
              <li>
                Rich in Nutrients: Packed with vitamins A, C, and E, it supports immune health and skin repair.</li>
              <li>
                Improves Digestion: Stimulates digestive enzymes, aiding in better digestion.</li>
              <li>
                Reduces Pain: Acts as a natural pain reliever by desensitizing pain receptors.</li>
              <li>
                Heart Health: Helps lower bad cholesterol and improves blood circulation.
              </li>
              <li> Weight Management: Suppresses appetite and prevents overeating.</li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.images}>
            <img
              src={assets.chilliField}
              alt=""
              className={styles.onionfield}
            />
            <img
              src={assets.redChilli}
              alt=""
              className={styles.onion}
            />
          </div>
          {/* <p>
            Volume Exported: Significant quantities to West African, Middle
            Eastern, and Southeast Asian countries
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default RedChilliDetails
