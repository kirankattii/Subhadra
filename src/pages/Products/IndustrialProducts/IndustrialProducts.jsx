import { assets } from '../../../assets/images/assets'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './IndustrialProducts.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const products = [
  {
    id: 1,
    name: "Low Silica Bhutan Dolomite",
    desc: "Discover the pinnacle of industrial excellence with our Low Silica Bhutan Dolomite. Renowned for its exceptional purity and high performance, this premium dolomite is a cornerstone for a variety of advanced industrial applications.",
    img: assets.dolomite_stone,
    link: "/indestrial/dolomite"
  },
  {
    id: 2,
    name: "Quartzite",
    desc: "Experience the unparalleled quality of our Quartzite, a premium choice for industries demanding superior purity and performance. Our Quartzite is meticulously sourced and refined to meet the highest standards of excellence, making it an essential material for a range of sophisticated applications.",
    img: assets.quartzite_stone,
    link: "/indestrial/quartzite"

  },
  {
    id: 3,
    name: "Limestone",
    desc: "Unlock the potential of your projects with our superior Limestone Products, crafted to deliver excellence across a range of industrial and construction applications. Our limestone is renowned for its quality, consistency, and adaptability, making it a distinguished choice for diverse needs.",
    img: assets.lime_stone,
    link: "/indestrial/limestone"

  },
  {
    id: 4,
    name: "Dry Fly Ash",
    desc: "Harness the power of superior engineering with our Dry Fly Ash, meticulously designed to enhance the strength and durability of your projects. Our premium fly ash is a testament to quality and precision, setting new standards in the industry.",
    img: assets.dryfly_stone,
    link: "/indestrial/dry-fly-ash"

  },
  {
    id: 5,
    name: "Manganese Ore",
    desc: "Top-grade manganese ore with high manganese content and minimal impurities, perfect for steel production and alloy manufacturing. Our ore, available in both lumpy and fine forms, meets stringent industrial standards, ensuring quality and reliability",
    img: assets.manganese_stone,
    link: "/indestrial/manganese-ore"

  },
  {
    id: 6,
    name: "Calcined Dolomite",
    desc: "Uur calcined dolomite offers high calcium and magnesium content, ensuring superior performance for steelmaking, water treatment, and construction applications. Available in both lump and powder form, it meets rigorous industry standards, providing excellent quality and reliability.",
    img: assets.lime_stone,
    link: "/indestrial/calcined-dolomite"

  },
  {
    id: 7,
    name: "Metallurgical Coke",
    desc: "Our metallurgical coke is a high-quality carbon product known for its exceptional strength, low ash content, and consistent performance. Ideal for steelmaking and foundry applications, it meets stringent industry standards, delivering reliable and efficient results. Available in various sizes, we ensure optimal packaging and prompt delivery, making us your dependable partner for premium metallurgical coke solutions.",
    img: assets.coke_stone,
    link: "/indestrial/metallurgical-coke"

  },

]

const IndustrialProducts = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const navigate = useNavigate()

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
                  onClick={() => navigate(product.link)}
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

export default IndustrialProducts
