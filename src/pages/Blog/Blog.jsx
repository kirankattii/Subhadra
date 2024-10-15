import { assets, text } from '../../assets/images/assets'
import Navbar from '../../components/Navbar/IndustrialNavbar/Navbar'
import styles from './blog.module.css'

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.subhadraText}>
          <img src={text.the_subhadra_text} alt="" />
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog1}>
            <img src={assets.blogImg1} alt="" />
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
            <img src={assets.blogImg2} alt="" />
            <p>As the global demand for high-quality agro products grows, our premium onions, ginger, and rice are setting new standards in freshness and excellence. Exported to markets across West Africa, the Middle East, and Southeast Asia, these products are celebrated for their exceptional flavor, nutrition, and reliability. By sourcing the best from the field and delivering it to the world, we ensure that our clients receive only the finest agro products to meet diverse market needs. Experience the difference that premium quality can make in nourishing people and driving success.</p>
            <h3>NEXT</h3>
            <div className={styles.blackTransparent}></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Blog
