import { useEffect, useRef, useState } from "react"

import { useTransform, useScroll, motion } from "framer-motion"
import { assets } from "../../../assets/images/assets"
import styles from "./AboutIndestrial.module.css"
import Footer from "../../../components/Footer/Footer"
import Contact from "../../../components/HomeComp/Contact/Contact"
import Marquee from "react-fast-marquee"
import { partners } from "../../../assets/images/partners/partners"

const AboutIndestrial = () => {
  const ref = useRef(null)

  const { scrollY } = useScroll()

  const [start, end] = [0, (60 * window.innerHeight) / 100]

  const y = useTransform(scrollY, [start, end], [0, -100])
  const scale = useTransform(scrollY, [start, end], [1, 0.8])

  return (
    <div
      ref={ref}
      className={styles.container}
    >
      <motion.div
        className={styles.landing}
        style={{ y, scale }}
      >
        <motion.img
          src={assets.aboutIndustaialLanding}
          alt="About Industrial Landing"
        />
        <motion.h1>A Legacy of Distinction</motion.h1>
      </motion.div>
      <div className={styles.legacy}>
        <motion.img
          initial={{ x: 50, y: 50, scaleX: 1.3, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, scaleX: 1, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
          src={assets.aboutIndustaialLanding}
          alt=""
        />
        <motion.h2
          initial={{ x: 50, y: 50, scaleX: 1.3, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, scaleX: 1, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
        >
          A Legacy of Distinction
        </motion.h2>
        <p>
          Welcome to Subhadra Commercial Pvt Ltd , a trusted name with over 45
          years of excellence in providing high-quality minerals to the steel
          industry. Since our inception, we have proudly served a diverse range
          of industrial sectors, establishing ourselves as a leader in raw
          material supply across India.
        </p>
      </div>
      <div className={styles.exclusive}>
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
      <Marquee>
        <div className={styles.marquee}>
          {" "}
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt="partners"
            />
          ))}
        </div>
      </Marquee>
      <div className={styles.exclusive2}>
        <motion.h2
          initial={{ x: -80, y: -80, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.3,
          }}
        >
          Exclusive Partnerships with Prestigious{" "}
        </motion.h2>
        <div className={styles.exclusive2Content}>
          <motion.h1
            initial={{ x: 50, y: 50, opacity: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.3,
            }}
          >
            CLIENTS
          </motion.h1>
          <motion.p
            initial={{ x: -80, y: 80, opacity: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.3,
            }}
          >
            We take pride in our long-standing relationships with some of the
            most prominent names in the industry, including Super Group, Maithon
            Group, Bengal Energy, Shyam Steel, Shakambari Group, Neo Metaliks,
            Amalgam Steel, Narsingh Ispat, Atibir Units, and Shyam Sel.
          </motion.p>
        </div>
      </div>
      <div className={styles.collections}>
        <motion.h2
          initial={{ y: 120, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
          className={styles.collectionsTitle}
        >
          An Exquisite Collection of Minerals
        </motion.h2>
        <div className={styles.stones}>
          <p>
            We offer a wide array of products, each designed to meet the
            specific needs of our clients in the steel manufacturing and other
            industrial sectors:
          </p>
          <motion.img
            // initial={{ x: -200, y: 200, opacity: 0.5 }}
            //   whileInView={{ x: 0, y: 0, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
            src={assets.groupOfStones}
            alt=""
          />
        </div>
        <div className={styles.stonesCollections}>
          <p>
            <span>Dolomite:</span> We supply approximately 40,000 metric tons of
            dolomite monthly, a vital component in steel production, primarily
            to the steel belt.
          </p>
          <p>
            <span>Quartzite:</span> With our two operational mines in Bhutan, we
            provide high-grade quartzite, moving around 10,000 to 12,000 metric
            tons each month.
          </p>
          <p>
            <span>Limestone & limestone powder:</span> Our limestone powder
            serves a variety of industrial applications, with a monthly supply
            of 5,500 to 6,000 metric tons.
          </p>
          <p>
            <span>Manganese Ore:</span> We also supply manganese ore, with an average monthly shipment of 4,500 to 5,000 metric tons.
          </p>
          <p>
            <span>Calcined Dolomite:</span> We are in the process of launching a new Calcined Dolomite Plant  with cutting-edge Cimprogetti Kiln (Italian Technology). Our production capacity will soon reach 600 metric tons per day.
          </p>
        </div>
      </div>
      <div className={styles.technology}>
        {/* <motion.h2
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }}
          className={styles.technologyTitle}
        >
          Pioneering Technological Excellence
        </motion.h2>
        <motion.p
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }}
          className={styles.technologyDescription}
        >
          Setting new benchmarks in the industry, we are proud to introduce our
          Calcined Dolomite Plant, a symbol of innovation and elegance. With
          cutting-edge Italian technology, the plant will initially produce 300
          metric tons per day, with a vision to expand to 600 metric tons per
          day within the year—ensuring our clients receive nothing but the best
        </motion.p> */}

        <motion.p initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyDescription}
        >In addition to our core offerings in the minerals sector, Subhadra Commercial Pvt Ltd has expanded its horizons into the agricultural export industry over the past five years. We now specialize in the export of high-quality agricultural products, particularly focusing on a range of grains, spices, and pulses. Our agricultural exports cater to a global market, with a focus on providing premium products that meet international standards.
        </motion.p>

        <motion.p initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyDescription}
        >We have built strong relationships with farmers and suppliers across India, ensuring that we source only the best produce. Our commitment to quality, transparency, and sustainable practices has helped us gain a reputation for reliability in this space. By leveraging our established logistical expertise, we have been able to successfully export these products to various regions, contributing to global food security and fostering trade relationships worldwide.</motion.p>

        <motion.p initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyDescription}
        >This venture complements our existing strengths in supply chain management and customer service, allowing us to further diversify our portfolio and provide clients with a broader range of quality products.</motion.p>
        <div className={styles.luxury}>
          <div className={styles.luxuryContent}>
            <motion.h2
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                opacity: { duration: 0.4 },
                duration: 0.4,
              }}
            >
              Luxury in service
            </motion.h2>
            <motion.p
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                opacity: { duration: 0.4 },
                duration: 0.4,
              }}
            >
              At Subhadra Commercial Pvt Ltd, we are committed to providing top-quality raw materials and services that meet the evolving needs of our clients. We look forward to exploring new opportunities for collaboration and working together to support your business goals with our comprehensive range of products and solutions.
            </motion.p>
          </div>
          <img
            src={assets.aboutIndustrail3}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default AboutIndestrial
