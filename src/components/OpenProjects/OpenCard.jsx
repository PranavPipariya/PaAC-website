import React from 'react';
import {Open} from "./OpenData";
import './openprojects.css';
const OpenProjects = () => {
  return (
    <>
    {Open.map((op) => (
        < div className='all-cards'>
    <div className="project-name">
      <div className="card">{/* Placeholder for the image or content */}</div>
      <div className="content">
        <div className='t1'>
        <h2>{op.title}</h2> </div>
        <div className='t2'>
        <h2>{op.date}</h2></div>
        <p>
          {op.details}
        </p>
        <button className="more-button">More &gt;&gt;</button>
      </div>
    </div>
    </div>
    ))}
    </>
    );
}

export default OpenProjects;
