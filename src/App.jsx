import Footer from "./Footer";
import Header from "./Header";
import navItems from "./nav-items";
import Navbar from "./Navbar";
import RecentSnaps from "./RecentSnaps";

function App() {
  return (
    <>
      <Navbar navItems={navItems} />
      <Header/>
      <RecentSnaps/>
      <Footer/>
    </>
  );
}

export default App;
