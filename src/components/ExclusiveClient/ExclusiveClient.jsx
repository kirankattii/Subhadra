import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import styles from "./ExclusiceClient.module.css"
import { assets } from "../../assets/images/assets"


const ExclusiceClient = () => {
  const exclusiveRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const targetOpacity = Math.max(1 - (scrollPosition / (0.5 * viewportHeight)), 0)

      if (exclusiveRef.current) {
        exclusiveRef.current.style.opacity = targetOpacity
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={styles.container}>
      {/* Other components */}

      <div ref={exclusiveRef} className={styles.exclusive}>
        <div className={styles.exclusiveContents}>
          <div className={styles.exclusiveContent}>
            <h2>
              Exclusive <br /> Partnerships <br /> with Prestigious{" "}
            </h2>
            <h1>CLIENT</h1>
          </div>
          <motion.img
            initial={{ scale: 0.5, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.4,
            }}
            src={assets.aboutIndustrail2}
            alt=""
          />
        </div>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
        >
          We take pride in our long-standing relationships with some of the most
          prominent names in the industry, including Super Group, Maithon Group,
          Bengal Energy, Shyam Steel, Shakambari Group, Neo Metaliks, Amalgam
          Steel, Narsingh Ispat, Atibir Units, and Shyam Sel.
        </motion.p>
      </div>

      {/* Other components */}
    </div>
  )
}

export default ExclusiceClient
