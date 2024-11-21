import { assets, blogs } from '../../../assets/images/assets'
import styles from './AgroDetails.module.css'

const agroBlogs = [
  {
    id: 1,
    img: assets.agroBlog1,
    desc: "The flavor of fresh ginger and onions is unmatched, and Subhadra Commercial is dedicated to bringing this freshness to your kitchen. This blog highlights the journey of these staple ingredients—from carefully chosen farms to international markets. Discover how Subhadra maintains quality during transportation, ensuring their agro products meet global culinary standards while supporting sustainable farming practices."
  },
  {
    id: 2,
    img: blogs.agroBlog5,
    desc: "In today’s interconnected world, food is a universal language. Subhadra Commercial Pvt. Ltd. plays a vital role in exporting high-quality agro products like rice, onions, and ginger. This blog explores how the company adapts to diverse culinary preferences, meeting stringent international regulations while ensuring consistent quality. Dive into their strategies for connecting farmers to global markets and fostering sustainable agricultural practices."
  },
  {
    id: 2,
    img: blogs.agroBlog4,
    desc: "Ginger and onions are indispensable in kitchens worldwide, valued for their bold flavors and versatility. Carefully sourced and preserved, they maintain their quality and freshness even after long journeys. With advanced storage solutions and efficient logistics, these staples cater to diverse culinary preferences, meeting the demands of households and industries alike.Sustainable farming and export practices ensure a steady supply of these vital ingredients to global markets."
  },
]


const AgroBlogDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h2>LATEST BLOGS</h2>
        <h1>The Secret to High-Quality Rice</h1>
        <p>From Fields To Global Plates</p>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <p> Rice is more than just a staple—it’s a culinary tradition. At Subhadra Commercial Pvt. Ltd., every grain of rice undergoes a meticulous process to ensure premium quality. This blog delves into their sourcing techniques, focusing on Basmati and Non-Basmati varieties, and how advanced processing and quality checks ensure a superior product. Learn how their commitment to excellence has made them a trusted name in global rice markets.</p>

          <p>  Subhadra specializes in two main types of rice: Basmati, with its long grains and distinctive aroma, and Non-Basmati, valued for its versatility and adaptability to a range of cuisines. But what truly sets Subhadra apart is its commitment to quality at every step of the process, from farm to fork.</p>

          <img src={assets.firstAgroBlog} alt="" />
          <div>
            <span>A Global Reach: Meeting Diverse Culinary Demands</span>
            <p>Subhadra’s expertise lies in understanding the unique preferences of global markets. Middle Eastern countries favor long-grain Basmati for traditional dishes like biryani, while African markets often prefer Non-Basmati varieties for their affordability and versatility. By tailoring its offerings, Subhadra ensures that its rice finds a place in kitchens worldwide.</p>
          </div>
          <p>This adaptability is supported by a robust logistics network. Subhadra’s export capabilities span continents, ensuring that their rice reaches consumers fresh and in optimal condition. Their focus on timely delivery and excellent customer service has earned them a reputation as a reliable partner in the global food industry.</p>

        </div>
        <div className={styles.rightContent}>
          <div>
            <span>Sourcing Excellence: A Partnership with Farmers </span>
            <p>The journey begins in the fertile fields of India, where Subhadra works closely with farmers who share a passion for excellence. The company places a strong emphasis on sustainable practices, ensuring that the land remains fertile for future generations. Farmers are trained in modern agricultural techniques while respecting traditional methods that enhance soil health and crop yield.</p>
          </div>
          <p>This partnership goes beyond mere transactions. By investing in local communities, Subhadra fosters an ecosystem of trust and mutual benefit. Farmers are provided with fair compensation and access to resources that improve their livelihoods, creating a ripple effect of positive change.</p>

          <div>
            <span>Processing with Precision: From Harvest to Polished Grains</span>
            <p>Once the rice is harvested, the process of transformation begins. Subhadra’s advanced milling facilities are equipped with cutting-edge technology that ensures each grain is perfectly polished while retaining its nutritional value. For Basmati rice, this means preserving its signature fragrance and texture, while Non-Basmati varieties are processed to meet specific market preferences, whether for sticky rice dishes or fluffy pilafs.</p>
          </div>
          <p>Quality control is a cornerstone of Subhadra’s operations. Each batch undergoes rigorous testing to ensure that it meets international standards. Parameters like grain length, moisture content, and purity are meticulously monitored. The result? Rice that not only looks good but also tastes exceptional.</p>
          <div>
            <span>Sustainability and the Future of Rice Production</span>
            <p>
              In a world increasingly conscious of environmental impact, Subhadra is leading the way with sustainable practices. From minimizing water usage in paddy fields to reducing waste in processing, the company is committed to leaving a positive legacy.
            </p>
          </div>
          <p>As the global demand for rice continues to grow, Subhadra is poised to scale its operations without compromising on quality or sustainability. With its blend of traditional wisdom and modern innovation, the company is not just meeting current needs but also shaping the future of rice production.</p>
        </div>
      </div>
      <div className={styles.moreUpdates}>
        <h2>MORE UPDATES</h2>
        <div className={styles.blogContainer}>
          {agroBlogs.map((blog) => (
            <div className={styles.blog3}>
              <img src={blog.img} alt="" />
              <p>{blog.desc}</p>
              <h3>VIEW</h3>
              <div className={styles.blackTransparent}>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AgroBlogDetails
