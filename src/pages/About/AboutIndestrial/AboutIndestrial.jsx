import { useEffect, useRef, useState } from 'react';

import { useTransform, useScroll, motion } from 'framer-motion';
import { assets } from "../../../assets/images/assets"
import styles from "./AboutIndestrial.module.css"
import Footer from '../../../components/Footer/Footer';
import Contact from '../../../components/HomeComp/Contact/Contact';
import Marquee from 'react-fast-marquee';
import { partners } from '../../../assets/images/partners/partners';


const AboutIndestrial = () => {

  const ref = useRef(null);

  const { scrollY } = useScroll();

  const [start, end] = [0, 60 * window.innerHeight / 100];

  const y = useTransform(scrollY, [start, end], [0, -100]);
  const scale = useTransform(scrollY, [start, end], [1, 0.8]);


  return (
    <div ref={ref} className={styles.container}>
      <motion.div
        className={styles.landing}
        style={{ y, scale }}
      >
        <motion.img
          src={assets.aboutIndustaialLanding}
          alt="About Industrial Landing"

        />
        <motion.h1 >A Legacy of Distinction</motion.h1>
      </motion.div>
      <div className={styles.legacy}>
        <motion.img initial={{ x: 50, y: 50, scaleX: 1.3, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, scaleX: 1, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }} src={assets.aboutIndustaialLanding} alt="" />
        <motion.h2 initial={{ x: 50, y: 50, scaleX: 1.3, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, scaleX: 1, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}>A Legacy of Distinction</motion.h2>
        <p>For over 45 years, Subhadra Commercial Pvt Ltd has been synonymous with excellence and prestige in the supply of premium-grade industrial minerals. Our name is trusted by elite steel industries across West Bengal, Jharkhand, and Northern Odisha, reflecting our unwavering commitment to quality and distinction.</p>
      </div>
      <div className={styles.exclusive}>
        <div className={styles.exclusiveContents}>
          <div className={styles.exclusiveContent}>
            <h2>Exclusive <br /> Partnerships <br /> with Prestigious </h2>
            <h1>CLIENT</h1>
          </div>
          <motion.img initial={{ scale: 0.5, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.4,
            }} src={assets.aboutIndustrail2} alt="" />
        </div>
        <motion.p initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}>Our dedication to delivering nothing but the finest has earned us partnerships with industry leaders such as Shyam Steel, Bengal Energy, Neo Metaliks, and other esteemed names. These enduring relationships are built on mutual trust, unparalleled service, and the assurance of superior quality.</motion.p>
      </div>
      <Marquee >
        <div className={styles.marquee}> {partners.map((partner, index) => (
          <img key={index} src={partner} alt="partners" />
        ))}</div>
      </Marquee>
      <div className={styles.exclusive2}>
        <motion.h2 initial={{ x: -80, y: -80, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.3,
          }}>Exclusive Partnerships with Prestigious </motion.h2>
        <div className={styles.exclusive2Content}>
          <motion.h1 initial={{ x: 50, y: 50, opacity: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.3,
            }}>CLIENTS</motion.h1>
          <motion.p initial={{ x: -80, y: 80, opacity: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.3,
            }}>Our dedication to delivering nothing but the finest has earned us partnerships with industry leaders such as Shyam Steel, Bengal Energy, Neo Metaliks, and other esteemed names. These enduring relationships are built on mutual trust, unparalleled service, and the assurance of superior quality.</motion.p>
        </div>
      </div>
      <div className={styles.collections}>
        <motion.h2 initial={{ y: 120, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }} className={styles.collectionsTitle}>An Exquisite Collection of Minerals</motion.h2>
        <div className={styles.stones}>
          <p>At Subhadra Commercial Pvt Ltd, we take pride in offering an exclusive selection of minerals tailored for the most discerning clients:</p>
          <motion.img
            // initial={{ x: -200, y: 200, opacity: 0.5 }}
            //   whileInView={{ x: 0, y: 0, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }} src={assets.groupOfStones} alt="" />
        </div>
        <div className={styles.stonesCollections}>
          <p><span>Dolomite:</span> Supplied at an impressive volume of over 40,000 metric tons per month, ensuring consistent, unmatched quality.</p>
          <p><span>Quartzite:</span> Extracted from our exclusive mines in Bhutan, supplying between 10,000-12,000 metric tons of high-purity material monthly.</p>
          <p><span>Limestone:</span> Available in both lump and powdered forms, our limestone meets the most exacting industrial standards.</p>
          <p><span>Manganese Ore:</span> An essential component for the steel industry, delivered at a premium quality with a supply of up to 5,000 metric tons monthly.</p>
          <p><span>Metallurgical Coal:</span> Known for its superior carbon content and essential role in steelmaking, our high-grade metallurgical coal guarantees optimal performance in demanding industrial applications.</p>
        </div>
      </div>
      <div className={styles.technology}>
        <motion.h2 initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyTitle}>Pioneering Technological Excellence</motion.h2>
        <motion.p initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyDescription}>Setting new benchmarks in the industry, we are proud to introduce our Calcined Dolomite Plant, a symbol of innovation and elegance. With cutting-edge Italian technology, the plant will initially produce 300 metric tons per day, with a vision to expand to 600 metric tons per day within the year—ensuring our clients receive nothing but the best</motion.p>
        <div className={styles.luxury}>
          <div className={styles.luxuryContent}>
            <motion.h2 initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                opacity: { duration: 0.4 },
                duration: 0.4,
              }}>Luxury in service</motion.h2>
            <motion.p initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                opacity: { duration: 0.4 },
                duration: 0.4,
              }}>At Subhadra Commercial Pvt Ltd, luxury is not just in our products but in every aspect of our service. We craft bespoke solutions for our esteemed clientele, providing unparalleled attention to detail and ensuring that every interaction reflects our dedication to excellence.</motion.p>
          </div>
          <img src={assets.aboutIndustrail3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutIndestrial
