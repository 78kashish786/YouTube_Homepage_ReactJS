import Leftbar from "./Component/leftbar/leftbar";
import Rightbar from "./Component/rightbar/rightbar";
import Topbar from "./Component/Topbar/topbar";
// import cardDtails from "./Component/cardDetail/cardDtail"
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="MainBody">
        <div className="left">
          <Leftbar />
        </div>
        <div className="right">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
