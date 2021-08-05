import styles from './Footer.module.scss';
import Link from 'next/link'
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <ul className={styles.ul}><span>Contact Us</span>
                    <li>India</li>
                    <li>Spectrum Tower, 5th, Chincholi Bunder Road, <br /> Mindspace, Malad West, <br /> Mumbai Maharastra 400064 <br /> <br /></li>
                    <li><FaPhone className={styles.icon} /> +91 7304360502</li>
                    <li>United Kingdom</li>
                    <li><FaPhone className={styles.icon}/> +44 7405888449</li>
                    <li><FaEnvelope className={styles.icon}/> hello@digitalaidedschool.com</li>
                </ul>
                <ul className={styles.ul}><span>Policies</span> 
                    <li><Link href="#"><a className={styles.link}>Terms $ Conditions</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Refund Policy</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Privacy Policy</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Customer Feedback</a></Link></li>
                </ul>
                <ul className={styles.ul}><span>Follow Us</span>  
                    <li><FaInstagram className={styles.social} /><FaLinkedinIn className={styles.social} />
                        <FaYoutube className={styles.social} />
                    <FaTwitter className={styles.social}/></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
