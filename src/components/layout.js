import Navbar from "../components/navbar";
import Side from "../components/side";

export default function Layout({ children }) {
  let posts = JSON.parse({
    "link": "information",
    "name": "infinf"
  })
  // let posts = [
  //   {
  //     'link': 'information',
  //     'name': 'Информация',
  //   },
  //   {
  //     'link': 'history',
  //     'name': 'История',
  //   },
  // ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-screen-xl gap px">
        <main className="w-full component-block">{children}</main>
        <Side posts={posts}/>
      </div>
    </>
  );
}