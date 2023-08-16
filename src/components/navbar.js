import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.webp"

export default function Navbar() {
  return (
    <>
      <header>
        <div className="header">
          <Link href="/" className="logo">
            <Image priority width={23.8} src={logo} alt="Логотип"/>
            <h1 className="link">Светлогорск</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/history" className="link">История</Link>
              </li>
              <li>
                <Link href="#" className="link">Люди</Link>
              </li>
              <li>
                <Link href="#" className="link">Культура</Link>
              </li>
              <li>
                <Link href="#" className="link">Предприятия</Link>
              </li>
              <li>
                <Link href="#" className="link">Сельское хозяйство</Link>
              </li>
              <li>
                <Link href="#" className="link">Достопримечательности</Link>
              </li>
              <li>
                <Link href="#" className="link">Викторина</Link>
              </li>
              <li>
                <Link href="#" className="link">Игра</Link>
              </li>
            </ul>
          </nav>
          <button id="menu-burger-icon" type="button" className="btn-nobg rounded-lg inline-flex lg:hidden">
            <Image
              className="w-5 h-5"
              src={logo}
              alt={"mebu-burger"}
            />
          </button>
          <button id="theme-toggle" type="button" className="btn-nobg">
            <Image
              id="theme-toggle-dark-icon"
              className="w-5 h-5"
              src={logo}
              alt={"dark-icon"}
            />
            <Image
              id="theme-toggle-light-icon"
              className="w-5 h-5 hidden"
              src={logo}
              alt={"light-icon"}
            />
          </button>
        </div>
      </header>
    </>
  )
}