import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, {useState, useEffect} from "react";
import "./Achievement.css";
import Data from "./Data.js";

export default function Achievement() {
    const [state, setState] = useState(0);
    const len = Data.length;
    useEffect(() => {
        const carousel = setInterval(() => {setState((prev) => (prev+1)%len); }, 5000);
        return () => {
            clearInterval(carousel);
        };
    },[len]);
    return(
        <div className="achi-container">
            <button className="achi-btn" onClick={() => setState((state-1+len)%len)}><ArrowBackIos className="btn-arw"></ArrowBackIos></button>
            <p className="achi-desc">
                {Data[state].desc}
            </p>
            <button className="achi-btn" onClick={() => setState((state+1)%len)}><ArrowForwardIos className="btn-arw"></ArrowForwardIos></button>
        </div>
    )
}
