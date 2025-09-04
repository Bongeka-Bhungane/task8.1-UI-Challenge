import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{gap: '20px', padding: '2%'}}>
      <a href="#">
        <FaFacebook size={20} />
      </a>
      <a href="#">
        <FaTwitter size={20} />
      </a>
      <a href="#">
        <FaInstagram size={20} />
      </a>
    </footer>
  );
}
