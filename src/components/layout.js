import Navbar from "./navbar";
import Side from "./side";
import {useRouter} from 'next/router';
import postsIndex from "../json/postsData.json";
import postsHistory from "../json/postsHistory.json";
import postsPeople from "../json/postsPeople.json";
import postsCulture from "../json/postsCulture.json";
import postsIndustry from "../json/postsIndustry.json";
import postsFarm from "../json/postsFarm.json";
import postsAttractions from "../json/postsAttractions.json";

export default function Layout({ content, children}) {
  const router = useRouter();

  const isSideVisible = router.pathname === '/' || router.pathname === '/history' || router.pathname === '/people' || router.pathname === '/culture' || router.pathname === '/industry' || router.pathname === '/farm' || router.pathname === '/attractions';

  let postsAll;
  switch (content) {
    case 'index':
      postsAll = postsIndex;
      break;
    case 'history':
      postsAll = postsHistory;
      break;
    case 'people':
      postsAll = postsPeople;
      break;
    case 'culture':
      postsAll = postsCulture;
      break;
    case 'industry':
      postsAll = postsIndustry;
      break;
    case 'farm':
      postsAll = postsFarm;
      break;
    case 'attractions':
      postsAll = postsAttractions;
      break;
  }
  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-screen-xl gap px">
        <main className="w-full component-block">{children}</main>
        {isSideVisible && <Side posts={postsAll}/>}
      </div>
    </>
  );
}