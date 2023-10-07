import Link from "next/link";

export default function Side({ posts }) {

  if (!posts) {
    return null;
  }
  return (
    <>
      <aside className="sidebar component-block">
        <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
          На этой странице
        </h3>
        {/*<nav className="sidebar-nav">*/}
        {/*  <ul>*/}
        {/*    {posts.map((item, index) => (*/}
        {/*      <li key={index} className="sidebar-nav__li">*/}
        {/*        <Link href={`#${item.link}`}>{item.name}</Link>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</nav>*/}
      </aside>
    </>
  );
}