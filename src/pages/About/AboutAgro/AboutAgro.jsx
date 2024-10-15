import { useEffect, useRef, useState } from 'react';

import { useTransform, useScroll, motion } from 'framer-motion';
import { assets } from "../../../assets/images/assets"
import styles from "./AboutAgro.module.css"
import Footer from '../../../components/Footer/Footer';
import Contact from '../../../components/HomeComp/Contact/Contact';
// import Lenis from '@studio-freight/lenis'


const AgroIndestrial = () => {

  const ref = useRef(null);

  // Scroll value and the bounding box of the element to trigger animations
  const { scrollY } = useScroll();

  // Calculate the start and end points for the animation
  const [start, end] = [0, 60 * window.innerHeight / 100];

  // Transform values based on scroll position
  const y = useTransform(scrollY, [start, end], [0, -100]);
  const scale = useTransform(scrollY, [start, end], [1, 0.8]);


  return (
    <div ref={ref} className={styles.container}>
      {/* <div className={styles.landing}>
        <img src={assets.aboutIndustaialLanding} alt="" />
        <h1>A Legacy of Distinction</h1>
      </div> */}
      <motion.div
        className={styles.landing}
        style={{ y, scale }}
      >
        <motion.img
          src={assets.aboutAgroLanding}
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
          }} src={assets.aboutAgroLanding} alt="" />
        <motion.h2 initial={{ x: 50, y: 50, scaleX: 1.3, opacity: 0.5 }}
          whileInView={{ x: 0, y: 0, scaleX: 1, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}>A Legacy of Distinction</motion.h2>
        <p>For over 45 years, Subhadra Commercial Pvt Ltd has been a hallmark of excellence and prestige in the export of premium-quality agro products. Our name is trusted by esteemed markets across West Africa, the Middle East, and Southeast Asia, symbolizing our unwavering dedication to quality, freshness, and distinction.</p>
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
            }} src={assets.aboutAgro2} alt="" />
        </div>
        <motion.p initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}>Our commitment to providing only the finest has fostered strong partnerships with renowned global markets, including those in West Africa, the Middle East, and Southeast Asia. These lasting relationships are built on mutual trust, exceptional service, and the consistent delivery of superior-quality agro products.</motion.p>
      </div>
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
            }}>Our commitment to providing only the finest has fostered strong partnerships with renowned global markets, including those in West Africa, the Middle East, and Southeast Asia. These lasting relationships are built on mutual trust, exceptional service, and the consistent delivery of superior-quality agro products.</motion.p>
        </div>
      </div>
      <div className={styles.collections}>
        <motion.h2 initial={{ y: 120, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }} className={styles.collectionsTitle}>An Exquisite Collection of Agro Products</motion.h2>
        <div className={styles.stones}>
          <p>At Subhadra Commercial Pvt Ltd, we take pride in offering an exclusive selection of agro products, meticulously curated for the most discerning clients.</p>
          <motion.img initial={{ x: -200, y: 200, opacity: 0.5 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }} src={assets.agroGroup} alt="" />
        </div>
        <div className={styles.stonesCollections}>
          <p><span>Onion:</span> Exported at an exceptional volume of 15,000 metric tons annually, guaranteeing consistent freshness and superior quality.</p>
          <p><span>Ginger:</span> Supplied at over 3,000 metric tons annually, offering premium-grade ginger with rich flavor and unmatched potency.</p>
          <p><span>Rice:</span> Exported in substantial quantities to West Africa, the Middle East, and Southeast Asia, delivering a variety of grades to meet the diverse demands of global markets.</p>
        </div>
      </div>
      <div className={styles.technology}>
        <motion.h2 initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyTitle}>Pioneering Agricultural Excellence</motion.h2>
        <motion.p initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4 },
            duration: 0.4,
          }} className={styles.technologyDescription}>Setting new benchmarks in the agro industry, we are proud to introduce our state-of-the-art processing facilities, a symbol of innovation and excellence. With advanced technology and sustainable practices, we ensure the highest standards of quality and efficiency, delivering premium agro products that meet the evolving needs of global markets—ensuring our clients receive nothing but the best.</motion.p>
        <div className={styles.luxury}>
          <div className={styles.luxuryContent}>
            <motion.h2 initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                opacity: { duration: 0.4 },
                duration: 0.4,
              }}>Excellence in
              Agricultural Service</motion.h2>
            <motion.p initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                opacity: { duration: 0.4 },
                duration: 0.4,
              }}>At Subhadra Commercial Pvt Ltd, excellence is not just in our agro products but in every aspect of our service. We tailor bespoke solutions for our esteemed clientele, offering meticulous attention to detail and ensuring that every interaction embodies our commitment to superior quality and service.</motion.p>
          </div>
          <img src={assets.aboutAgro1} alt="" />
        </div>
      </div>
      <div className={styles.footer}>

        {/* <Contact contColor={"#4BA040"}
          switchColor={"#B78F4A"}
          text={"Switch To Industrial"}
          nav={"/indestrial"} /> */}
      </div>
    </div>
  )
}

export default AgroIndestrial
