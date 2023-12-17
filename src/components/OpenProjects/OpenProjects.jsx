import { useEffect } from "react";
import "./OpenProjects.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import OpenCard from "./OpenCard";
export default function Events(){
    useEffect(() => {
        window.scrollTo(0,0);
    }, []); 
    return(
        <div className="events-container">
            <div className="events-topbar">
                <Topbar />
            </div>
            <div className="titles">
            <h1 className="events-heading-title"> Events</h1>
            <h1 className="events-heading-title-2"> Open Projects</h1>
            </div>
            <div  className="upcoming-card">
            <OpenCard/>
                
            </div>
            {/* <h1 className="events-heading-title">Previous Events</h1> */}
            <div className="events-recent" >
                {/* {Recent.map((data) => (
                    <EventCard  
                    key = {data.id}
                    title = {data.title}
                    date = {data.date}
                    location = {data.location}
                    details = {data.details}
                    />
                ))} */}
            </div>
            <Footer />
        </div>
    )
}
