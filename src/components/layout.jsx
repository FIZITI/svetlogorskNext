import Navbar from "./navbar";
import Side from "./side";
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


export default function Layout({ currentPage, children}) {
  const router = useRouter();
  const isSideVisible = router.pathname === '/' || router.pathname === '/history' || router.pathname === '/people' || router.pathname === '/culture' || router.pathname === '/industry' || router.pathname === '/farm' || router.pathname === '/attractions';

  // let jsonData;
  // if (currentPage === '/') {
  //   jsonData = a;
  //   console.log(123)
  // }
  const [jsonData, setJsonData] = useState(null);

  // currentPage = currentPage[1]

  // const jsonFile = `json/${currentPage}.json`;
  useEffect(() => {
    // Этот код будет выполнен при каждом переходе между "страницами"
    const currentPage = router.route.split('/').pop();
    const jsonFile = `json/${currentPage}.json`;

    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, [router.route]);


  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-screen-xl gap px">
        <main className="w-full component-block">{children}</main>
        {isSideVisible && <Side posts={jsonData}/>}
      </div>
    </>
  );
}