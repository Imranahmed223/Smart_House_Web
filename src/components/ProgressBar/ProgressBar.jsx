import React from "react";
import "./ProgressBar.scss";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ProgressBar = (props) => {
  let color=""
  if(props.value>0 && props.value<=220){
    color="green"
  }
  if(props.value>220 && props.value<=660){
    color="amber"
  }
  if(props.value>660 && props.value<=1430){
    color="orange"
  }
  if(props.value>1430 && props.value<=2200){
    color="red"
  }
  if(props.value>2200 && props.value<=3300){
    color="#7455b9"
  }
  if(props.value>3300 && props.value<=5500){
    color="#a655b9"
  }
  return (
    <>
      <div className="progress">
        <div className="progress-container">
          <div className="progress-container-heading">
            <h5>TVOC(pbb)</h5>
          </div>
          <div className="progress-container-bar">
          <CircularProgressbar value={props.value} text={props.value?`${props.value}pbb`:`${props.value}pbb`} 
           styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: color,
            textColor: color,
          })}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
