import { useNavigate } from 'react-router-dom'
import { assets, text } from '../../../assets/images/assets'
import styles from './IndustrialBlog.module.css'

const IndustrialBlog = () => {
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
            <img src={assets.blogImg11} alt="" />
            <h1>BLOG</h1>
            <h2>Insights & innovations</h2>
          </div>
          <div className={styles.blog2}>
            <h2>Fueling the steel industry
              subhadra’s coal and coal expertise</h2>
            <hr />
            <p>The steel industry is the backbone of modern infrastructure, powering the construction of skyscrapers, bridges, and transportation systems that connect our world. At the heart of this industry lies a critical raw material: high-quality coal and coke. Subhadra Commercial Pvt. Ltd., with decades of experience, has established itself as a trusted supplier of these indispensable resources, playing a pivotal role in driving industrial progress.</p>
            <img style={{ cursor: 'pointer' }} src={assets.arrowBlogs} alt="" onClick={() => navigate('/indestrial/industrial-content')} />
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
