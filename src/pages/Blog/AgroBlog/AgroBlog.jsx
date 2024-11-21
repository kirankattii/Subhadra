import styles from './AgroBlog.module.css'
import { assets, text } from '../../../assets/images/assets'
import { useNavigate } from 'react-router-dom'

const AgroBlog = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.container}>
        <div className={styles.subhadraText}>
          <img src={text.the_subhadra_text} alt="" />
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog1}>
            <img src={assets.agroBlog2} alt="" />
            <h1>BLOG</h1>
            <h2>Insights & innovations</h2>
          </div>
          <div className={styles.blog2}>
            <h2>The Secret to High-Quality Rice: From Fields to Global Plates</h2>
            <hr />
            <p>Rice is more than just a staple—it’s a culinary tradition. At Subhadra Commercial Pvt. Ltd., every grain of rice undergoes a meticulous process to ensure premium quality. This blog delves into their sourcing techniques, focusing on Basmati and Non-Basmati varieties, and how advanced processing and quality checks ensure a superior product. Learn how their commitment to excellence has made them a trusted name in global rice markets.</p>
            <img style={{ cursor: 'pointer' }} src={assets.agroBlogArrow} alt="" onClick={() => navigate('/agro/blog-content')} />
          </div>
          <div className={styles.blog3}>
            <img src={assets.agroBlog1} alt="" />
            <p>The flavor of fresh ginger and onions is unmatched, and Subhadra Commercial is dedicated to bringing this freshness to your kitchen. This blog highlights the journey of these staple ingredients—from carefully chosen farms to international markets. Discover how Subhadra maintains quality during transportation, ensuring their agro products meet global culinary standards while supporting sustainable farming practices.</p>
            <h3>NEXT</h3>
            <div className={styles.blackTransparent}>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AgroBlog
