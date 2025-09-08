import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{gap: '10px', padding: '2%', display: 'flex'}}>
      <a href="#">
        <FaFacebook size={20} />
      </a>
      <a href="#">
        <FaTwitter size={20} />
      </a>
      <a href="#">
        <FaInstagram size={20} />
      </a>
      <a href="#">
        <FaPinterest size={20} />
      </a>
    </footer>
  );
}
