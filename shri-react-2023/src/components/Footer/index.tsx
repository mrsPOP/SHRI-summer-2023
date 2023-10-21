import Link from "next/link";
import "./styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <Link href={'/qa'} className="footer__link">Вопросы-ответы</Link>
      <Link href={'/about-us'} className="footer__link">О нас</Link>
    </footer>
  )
};

export default Footer
