import Navbar from "../components/navbar";
import Side from "../components/side";
export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      <div className="flex m-auto max-w-[1280px]">
        <main>{children}</main>
        <Side/>
      </div>

    </>
  )
}