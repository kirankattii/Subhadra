import { useState } from 'react';
import { assets, text } from '../../assets/images/assets'
import Navbar from '../../components/Navbar/IndustrialNavbar/Navbar'
import styles from './contact.module.css'
import Footer from '../../components/Footer/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    discussion: '',
    message: '',
    email: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form Data:', formData);
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.landing}>
          <img src={text.step_into_text} alt="" className={styles.text1} />
          <img src={text.a_world_text} alt="" className={styles.text2} />
          <img src={text.ofExcellence_text} alt="" className={styles.text3} />
          <img src={assets.contactImg} alt="" className={styles.landingImg} />
        </div>
        <div className={styles.contact}>
          <img src={assets.contactImg} alt="" className={styles.contactImg2} />
          <div className={styles.lightBgwhite}></div>
          <div className={styles.contactContant}>
            <p>Who may we have the pleasure of contacting, and how can we best reach you?</p>
            <div className={styles.formContainer}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow1}>
                  <label>I Am</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                  />
                  <label>Representing</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={styles.inlineLabel}>
                  <label>I Wish To Engage In A Discussion Regarding</label>
                  <input
                    name="discussion"
                    placeholder="Your Message"
                    value={formData.discussion}
                    onChange={handleChange}
                    className={styles.inlineTextArea}
                    required
                  />
                </div>

                <div className={styles.formRow2}>
                  <label>Kindly Reach Me Via Email At</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={styles.formRow3}>
                  <label>Or Contact Me Directly At</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                  />
                  <button type="submit" className={styles.submitButton}>Send</button>
                </div>

                <div className={styles.submitContainer}>

                </div>
              </form>
            </div>
            <div className={styles.subhadraText}>
              <img src={text.shubhadra_Text} alt="" />
            </div>
          </div>
          <div className={styles.footer}>
            <Footer switchColor={""} text={"Switch"} nav={'/'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact



