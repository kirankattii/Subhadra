import { assets, text } from '../../../assets/images/assets'
import styles from './IndustrialBlog.module.css'

const IndustrialBlog = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.container}>
        <div className={styles.subhadraText}>
          <img src={text.the_subhadra_text} alt="" />
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog1}>
            <img src={assets.blogImg11} alt="" />
            <h1>BLOG</h1>
            <h2>Insights & innovations</h2>
          </div>
          <div className={styles.blog2}>
            <h2>The Role of Premium Materials in Modern Manufacturing</h2>
            <hr />
            <p>In today’s fast-paced industrial landscape, the demand for high-performance materials is crucial. Our Low Silica Bhutan Dolomite and Quartzite stand out as premium solutions, offering superior durability and precision for a wide range of applications. By investing in quality materials, industries can optimize efficiency, reduce downtime, and enhance product performance, ensuring long-term success and reliability. Discover how choosing the right materials can elevate your operations and deliver excellence at every step.</p>
            <img src={assets.arrowBlogs} alt="" />
          </div>
          <div className={styles.blog3}>
            <img src={assets.industrialBlog} alt="" />
            <p>From glass manufacturing to construction, quartzite and fly ash are key players. Subhadra Commercial Pvt. Ltd. provides high-grade quartzite with exceptional silica content and dry fly ash for durable, eco-friendly building materials. This blog highlights the significance of these materials in various industries, the meticulous processes behind their quality, and how Subhadra meets the ever-evolving needs of global clients.</p>
            <h3>NEXT</h3>
            <div className={styles.blackTransparent}></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default IndustrialBlog
