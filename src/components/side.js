import Link from "next/link";

export  default function Side() {
  return (
    <>
      <aside className="sidebar component-block">
        <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
          На этой странице
        </h3>
        <nav className="sidebar-nav">
          <ul>
            <li data-section="information" className="sidebar-nav__li sidebar-nav__active">
              <Link href="#information">Информация</Link>
            </li>
            <li data-section="history" className="sidebar-nav__li">
              <Link href="#history">История развития</Link>
            </li>
            <li data-section="klimat" className="sidebar-nav__li">
              <Link href="#klimat">Климат</Link>
            </li>
            <li data-section="population" className="sidebar-nav__li">
              <Link href="#population">Население</Link>
            </li>
            <li data-section="education" className="sidebar-nav__li">
              <Link href="#education">Образование</Link>
            </li>
            <li data-section="economy" className="sidebar-nav__li">
              <Link href="#economy">Хозяйственная деятельность</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}