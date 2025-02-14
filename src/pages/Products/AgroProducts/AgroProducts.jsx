// import { assets } from '../../../assets/images/assets'
// import { AnimatePresence, motion } from 'framer-motion'
// import styles from './AgroProducts.module.css'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const products = [
//   {
//     id: 1,
//     name: "ONIONS",
//     desc: "Sourced from premium farms, these onions are rich in essential nutrients like vitamins C and B6, and minerals such as potassium. Known for their antioxidant and anti-inflammatory properties. Our onions support heart health by helping to lower blood pressure and cholesterol levels while aiding digestion with their high fiber content.",
//     img: assets.onion1,
//     link: "/agro/onion"
//   },
//   {
//     id: 2,
//     name: "RICE",
//     desc: "Sourced from the finest fields, our rice is rich in essential nutrients, including vitamins and minerals, making it a healthy choice for any meal. Its superior texture and flavor enhance a variety of dishes, from everyday meals to gourmet creations. Our rice is meticulously processed to retain its natural goodness and ensure a fluffy, aromatic result every time.",
//     img: assets.riceImg,
//     link: "/agro/rice"

//   },
//   {
//     id: 3,
//     name: "RED CHILLI",
//     desc: "Our red chilli stands out for its vibrant color, intense heat, and exceptional flavor. Sourced from the finest farms, our red chilli is packed with essential nutrients, including vitamins A and C, and powerful antioxidants. Known for its fiery spice and rich aroma, it elevates a wide variety of dishes, from traditional recipes to modern cuisines.",
//     img: assets.redChilli,
//     link: "/agro/red-chilli"
//   },
//   {
//     id: 4,
//     name: "GINGER",
//     desc: "Sourced from the best-growing regions, our ginger boasts a robust, spicy kick and is rich in essential nutrients, including vitamins and minerals. Its natural anti-inflammatory and antioxidant properties make it a valuable addition to both culinary and medicinal applications. Carefully processed to preserve its aromatic oils and fresh taste, our ginger enhances a wide range of dishes while offering health benefits.",
//     img: assets.ginger1,
//     link: "/agro/ginger"
//   },

// ]

// const AgroProducts = () => {
//   const [hoveredProductId, setHoveredProductId] = useState(null);

//   const navigate = useNavigate()
//   return (
//     <div className={styles.container}>
//       <div className={styles.productsContainer}>
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             className={styles.product}
//             onMouseEnter={() => setHoveredProductId(product.id)}
//             onMouseLeave={() => setHoveredProductId(null)}
//           >
//             <AnimatePresence mode="wait">
//               {hoveredProductId === product.id ? (
//                 <motion.div
//                   onClick={() => navigate(product.link)}
//                   key="details"
//                   className={styles.productDetails}
//                   initial={{ opacity: 0, }}
//                   animate={{ opacity: 1, }}
//                   exit={{ opacity: 0, }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.img
//                     src={product.img}
//                     alt={product.name}
//                     className={styles.productImage}
//                     initial={{ scale: 0.9 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <motion.h2>{product.name}</motion.h2>
//                   <motion.p>{product.desc}</motion.p>
//                 </motion.div>
//               ) : (
//                 <motion.h1
//                   key="title"
//                   className={styles.productTitle}
//                   initial={{ opacity: 0, }}
//                   animate={{ opacity: 1, }}
//                   exit={{ opacity: 0, }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {product.name}
//                 </motion.h1>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AgroProducts





import { assets } from '../../../assets/images/assets'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './AgroProducts.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "ONIONS",
    desc: "Sourced from premium farms, these onions are rich in essential nutrients like vitamins C and B6, and minerals such as potassium. Known for their antioxidant and anti-inflammatory properties. Our onions support heart health by helping to lower blood pressure and cholesterol levels while aiding digestion with their high fiber content.",
    img: assets.onion1,
    link: "/agro/onion"
  },
  {
    id: 2,
    name: "RICE",
    desc: "Sourced from the finest fields, our rice is rich in essential nutrients, including vitamins and minerals, making it a healthy choice for any meal. Its superior texture and flavor enhance a variety of dishes, from everyday meals to gourmet creations. Our rice is meticulously processed to retain its natural goodness and ensure a fluffy, aromatic result every time.",
    img: assets.riceImg,
    link: "/agro/rice"

  },
  {
    id: 3,
    name: "RED CHILLI",
    desc: "Our red chilli stands out for its vibrant color, intense heat, and exceptional flavor. Sourced from the finest farms, our red chilli is packed with essential nutrients, including vitamins A and C, and powerful antioxidants. Known for its fiery spice and rich aroma, it elevates a wide variety of dishes, from traditional recipes to modern cuisines.",
    img: assets.redChilli,
    link: "/agro/red-chilli"
  },
  {
    id: 4,
    name: "GINGER",
    desc: "Sourced from the best-growing regions, our ginger boasts a robust, spicy kick and is rich in essential nutrients, including vitamins and minerals. Its natural anti-inflammatory and antioxidant properties make it a valuable addition to both culinary and medicinal applications. Carefully processed to preserve its aromatic oils and fresh taste, our ginger enhances a wide range of dishes while offering health benefits.",
    img: assets.ginger1,
    link: "/agro/ginger"
  },

]

const AgroProducts = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDetailsMouseEnter = () => {
    setShowCustomCursor(true);
  };

  const handleDetailsMouseLeave = () => {
    setShowCustomCursor(false);
  };

  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      {showCustomCursor && (
        <motion.div
          className={styles.customCursor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        >
          Click
        </motion.div>
      )}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleDetailsMouseEnter}
                  onMouseLeave={handleDetailsMouseLeave}
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
