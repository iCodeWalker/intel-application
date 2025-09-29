import "./App.css";
import Header from "./components/header/header.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import MainPanel from "./components/mainPanel/mainPanel.jsx";

function Layout() {
  return (
    <div>
      <Header />
      <LeftPanel />
      <MainPanel />
    </div>
  );
}

export default Layout;
