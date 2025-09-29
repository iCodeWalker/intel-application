import { Outlet } from "react-router-dom";
import CustomTable from "./customTable";
import Header from "../header/header";
import LeftPanel from "../leftPanel/leftPanel";

const MainPanel = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "79vw",
        position: "absolute",
        top: "9vh",
        left: "19vw",
        padding: "5px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      {/* <CustomTable /> */}
      <Outlet />
    </div>
  );
};

export default MainPanel;
