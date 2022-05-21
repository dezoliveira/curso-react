import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
  return (
    <footer>
      <ul className={styles.flexFooter}>
        <li><a href="https://www.facebook.com" target="_blank"><FaFacebook></FaFacebook></a></li>
        <li><a href="https://www.twitter.com" target="_blank"><FaTwitter></FaTwitter></a></li>
        <li><a href="https://www.youtube.com" target="_blank"><FaYoutube></FaYoutube></a></li>
        <li><a href="https://www.instagram.com" target="_blank"><FaInstagram></FaInstagram></a></li>
      </ul>
    </footer>
  )
}

export default Footer