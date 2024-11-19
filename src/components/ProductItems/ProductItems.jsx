import { useState } from 'react';
import styles from './ProductsItems.module.css'
import { motion, AnimatePresence } from 'framer-motion';

const ProductItems = ({ products }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  return (
    <div>
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
  )
}

export default ProductItems
