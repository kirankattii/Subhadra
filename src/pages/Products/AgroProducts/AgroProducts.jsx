import { assets } from '../../../assets/images/assets'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './AgroProducts.module.css'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: "ONIONS",
    desc: "Sourced from premium farms, these onions are rich in essential nutrients like vitamins C and B6, and minerals such as potassium. Known for their antioxidant and anti-inflammatory properties. Our onions support heart health by helping to lower blood pressure and cholesterol levels while aiding digestion with their high fiber content.",
    img: assets.onion1
  },
  {
    id: 2,
    name: "RICE",
    desc: "Sourced from the finest fields, our rice is rich in essential nutrients, including vitamins and minerals, making it a healthy choice for any meal. Its superior texture and flavor enhance a variety of dishes, from everyday meals to gourmet creations. Our rice is meticulously processed to retain its natural goodness and ensure a fluffy, aromatic result every time.",
    img: assets.riceImg
  },
  {
    id: 3,
    name: "GINGER",
    desc: "Sourced from the best-growing regions, our ginger boasts a robust, spicy kick and is rich in essential nutrients, including vitamins and minerals. Its natural anti-inflammatory and antioxidant properties make it a valuable addition to both culinary and medicinal applications. Carefully processed to preserve its aromatic oils and fresh taste, our ginger enhances a wide range of dishes while offering health benefits.",
    img: assets.ginger1
  },

]

const AgroProducts = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className={styles.product}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <AnimatePresence mode="wait">
              {hoveredProductId === product.id ? (
                <motion.div
                  key="details"
                  className={styles.productDetails}
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1, }}
                  exit={{ opacity: 0, }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={product.img}
                    alt={product.name}
                    className={styles.productImage}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h2>{product.name}</motion.h2>
                  <motion.p>{product.desc}</motion.p>
                </motion.div>
              ) : (
                <motion.h1
                  key="title"
                  className={styles.productTitle}
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1, }}
                  exit={{ opacity: 0, }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h1>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AgroProducts
