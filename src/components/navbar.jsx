import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.webp"

export default function Navbar() {
  return (
    <>
      <header>
        <div className="header">
          <Link href="/" className="logo">
            <Image priority className="w-auto" src={logo} alt="Логотип"/>
            <h1 className="link">Светлогорск</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/history" className="link">История</Link>
              </li>
              <li>
                <Link href="/people" className="link">Люди</Link>
              </li>
              <li>
                <Link href="/culture" className="link">Культура</Link>
              </li>
              <li>
                <Link href="/industry" className="link">Предприятия</Link>
              </li>
              <li>
                <Link href="/farm" className="link">Сельское хозяйство</Link>
              </li>
              <li>
                <Link href="/attractions" className="link">Достопримечательности</Link>
              </li>
              <li>
                <Link href="/test" className="link">Викторина</Link>
              </li>
              <li>
                <Link href="/game" className="link">Игра</Link>
              </li>
            </ul>
          </nav>
          <button id="menu-burger-icon" type="button" className="btn-nobg rounded-lg inline-flex lg:hidden">
            <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
            </svg>
          </button>
          <button id="theme-toggle" type="button" className="btn-nobg">
            <svg
                aria-hidden="true"
                id="theme-toggle-dark-icon"
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
                aria-hidden="true"
                id="theme-toggle-light-icon"
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464
            4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0
            010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1
            1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465
            5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1
            1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}