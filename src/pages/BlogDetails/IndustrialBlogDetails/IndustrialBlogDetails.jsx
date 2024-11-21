import { assets, blogs } from '../../../assets/images/assets'
import styles from './IndustrialBlogDetails.module.css'

const agroBlogs = [
  {
    id: 1,
    img: assets.industrialBlog,
    desc: "From glass manufacturing to construction, quartzite and fly ash are key players. Subhadra Commercial Pvt. Ltd. provides high-grade quartzite with exceptional silica content and dry fly ash for durable, eco-friendly building materials. This blog highlights the significance of these materials in various industries, the meticulous processes behind their quality, and how Subhadra meets the ever-evolving needs of global clients."
  },
  {
    id: 2,
    img: blogs.industrialBlog4,
    desc: "Industrial progress starts with robust materials, and limestone and dolomite are at the forefront. This blog dives into their importance in industries like steel, construction, and environmental protection. Discover how Subhadra’s rigorous sourcing standards guarantee high-purity minerals that drive performance in demanding applications, contributing to stronger and more sustainable infrastructure."
  },
  {
    id: 3,
    img: blogs.industrialBlog5,
    desc: "Limestone and dolomite are essential raw materials driving industries like steel, construction, and environmental solutions. Limestone strengthens cement and aids in water treatment, while dolomite ensures efficiency in steel manufacturing and refractory applications.Meticulously processed and tested for purity, these minerals meet the highest standards.Their reliability and sustainability make them indispensable for building infrastructure and advancing industrial innovation."
  },
]


const IndustrialBlogDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h2>LATEST BLOGS</h2>
        <h1>Fueling the Steel Industry</h1>
        <p>Subhadra’s Coal and Coke Expertise</p>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <p>The steel industry is the backbone of modern infrastructure, powering the construction of skyscrapers, bridges, and transportation systems that connect our world. At the heart of this industry lies a critical raw material: high-quality coal and coke. Subhadra Commercial Pvt. Ltd., with decades of experience, has established itself as a trusted supplier of these indispensable resources, playing a pivotal role in driving industrial progress.</p>

          <img src={assets.blogImg11} alt="" />
          <div>
            <span>A Commitment to Quality and Timely Delivery</span>
            <p>In industries where downtime can lead to significant losses, reliability is paramount. Subhadra’s rigorous quality control processes ensure that every shipment adheres to international standards. Each batch is tested for properties like calorific value, moisture content, and sulfur levels, guaranteeing consistent performance.</p>
          </div>
          <p>Timely delivery is another hallmark of Subhadra’s operations. With a well-established logistics network and efficient supply chain management, the company ensures that its products reach clients when and where they need them. This reliability has earned Subhadra the trust of leading steel manufacturers across the globe.</p>



          <div>
            <span>Expanding Horizons: Subhadra’s Global Reach</span>
            <p>Subhadra’s reputation as a reliable supplier extends beyond India. The company has established a strong presence in international markets, catering to steel manufacturers in regions like West Bengal, Jharkhand, and Northern Odisha, as well as global clients.</p>
          </div>
          <p>This global reach is supported by Subhadra’s ability to adapt to diverse market demands. Whether it’s supplying high-carbon coke for metallurgical processes or thermal coal for energy generation, the company’s products are trusted for their quality and consistency.</p>

        </div>
        <div className={styles.rightContent}>
          <div>
            <span>Understanding the Importance of Coal and Coke</span>
            <p>Coal, often referred to as “black gold,” serves as the lifeblood of numerous industries, particularly steel manufacturing. There are two primary types of coal: thermal coal, used for energy generation, and coking coal, essential for metallurgical applications.</p>
          </div>
          <p>Coke, a derivative of coking coal, is created by heating coal in the absence of oxygen. This process removes impurities and produces a material with high carbon content, making it ideal for steel production. Subhadra specializes in sourcing and supplying both coking coal and premium-grade coke, ensuring consistent quality that meets the stringent requirements of its industrial clients</p>


          <div>
            <span>The Subhadra Advantage: Unmatched Expertise</span>
            <p>
              What makes Subhadra a preferred partner for steel manufacturers is its deep understanding of the industry’s unique needs. By leveraging its extensive network of suppliers, the company sources coal and coke from the best reserves, including the renowned Dhanbad region in India, known for its high-quality deposits.
            </p>
          </div>
          <p>Subhadra’s products are distinguished by their high fixed carbon content, low ash levels, and excellent reactivity, making them suitable for even the most demanding applications. The company also offers tailored solutions, providing customized grades of coal and coke to meet specific client requirements.</p>



          <div>
            <span>Driving Sustainability in Coal and Coke Supply</span>
            <p>
              While coal remains a vital resource, its environmental impact cannot be ignored. Subhadra is committed to balancing industrial needs with sustainability. The company prioritizes responsible sourcing practices, ensuring that its operations comply with environmental regulations.
            </p>
          </div>
          <p>Additionally, Subhadra is exploring innovative technologies to enhance the efficiency of coal usage, reducing emissions and waste. By adopting cleaner production methods and supporting renewable energy initiatives, the company is contributing to a greener future for the industry.</p>


          <div>
            <span>The Future of Coal and Coke in Industry</span>
            <p>
              As industries evolve, so do their raw material needs. Subhadra is at the forefront of this evolution, continuously improving its products and services to meet changing demands. The company is investing in research and development to enhance the efficiency of coal and coke, ensuring their relevance in a rapidly transforming world.
            </p>
          </div>
          <p>By combining decades of expertise with a forward-looking approach, Subhadra Commercial Pvt. Ltd. is not just fueling the steel industry today but also shaping its future.</p>





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

export default IndustrialBlogDetails
