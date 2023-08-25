import Navbar from "./navbar";
import Side from "./side";
import {useRouter} from 'next/router';

export default function Layout({ content, children}) {
  const router = useRouter();

  const isSideVisible = router.pathname === '/' || router.pathname === '/history' || router.pathname === '/people' || router.pathname === '/culture' || router.pathname === '/industry' || router.pathname === '/farm' || router.pathname === '/attractions';
  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-screen-xl gap px">
        <main className="w-full component-block">{children}</main>
        {isSideVisible && <Side posts={content}/>}
      </div>
    </>
  );
}