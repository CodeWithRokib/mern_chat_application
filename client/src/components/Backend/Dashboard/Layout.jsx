import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <Topbar />
        <div className="flex-grow-1 d-flex">
          <Sidebar />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Layout