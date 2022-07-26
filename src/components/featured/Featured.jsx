import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={5}/>
        </div>
        <p className="title">Total revenue today</p>
        <p className="amount">$540</p>
        <p className="desc">Previous transection processing. Last paymentsmay not be included</p>
        <div className="summery">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negetive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">20.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">14.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">12.7.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured