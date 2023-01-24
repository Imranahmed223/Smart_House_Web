import React,{useState,useEffect} from "react";
import "./Dashboard.scss";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import {useDispatch,useSelector} from 'react-redux'
import {VocMean,TemperatureMean,TemperatureGraph,clearErrors} from "../../store/actions"
import toast, { Toaster } from "react-hot-toast";
import chappi from '../../assets/chappi.PNG'
import search from "../../assets/dashboard/search.svg";
import heating from "../../assets/dashboard/heating.svg";
import iaq from "../../assets/dashboard/iaq.svg";
import light from "../../assets/dashboard/light.svg";
import ventilation from "../../assets/dashboard/ventilation.svg";
import building from "../../assets/dashboard/bulding.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Puff } from "react-loader-spinner";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    xAxes: [{
        gridLines: {
            display:false
        }
    }],
    yAxes: [{
        gridLines: {
          display:false
        }   
    }]
}
};


const Dashboard = () => {
  const dispatch = useDispatch()
  const { vocMean,tempMean,errors,tempGraph,loading } = useSelector(
    (state) => state.authReducer
  );


  useEffect(()=>{
    dispatch(VocMean())
    dispatch(TemperatureMean())
    dispatch(TemperatureGraph())
  },[])

  let graphArr=[]
  if(tempGraph.length>0){
    tempGraph[0].temperature.forEach((data)=>{
      graphArr.push(data.x)
    })
  }

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let name = month[d.getMonth()];
  //const labels = [`${name}1-5`,`${name}6-10`,`${name}10-15`,`${name}15-20`,`${name}20-25`,`${name}25-30`]
  const labels = ["","","","","",""]

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
  }, [errors]);



  var colorValue
  if(tempMean.length>0){
    if(tempMean[0].averageValue.toFixed(0)<27){
      colorValue="green"
    }else if(tempMean[0].averageValue.toFixed(0)>27 && tempMean[0].averageValue.toFixed(0)<30){
      colorValue="amber"
    }else if(tempMean[0].averageValue.toFixed(0)>30){
      colorValue="red"
    } 
  }

  const currentYear = new Date().getFullYear();

const currentMonth = new Date().getMonth() + 1;

const currentDay = new Date().getDate();
const nameOfMonthUS = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
  new Date(),
);

var date = new Date();
var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;


  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
    <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
            backgroundColor:"#3c5097",
            color:"white",
          },
        }}
      />
      <div className="dashbaord">
        <div className="dashboard-topbar">
          <Topbar />
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-sidebar">
            <Sidebar />
          </div>
          <div className="dashboard-container-content">
            <div className="dashboard-container-content-container">
              <div className="dashboard-container-content-container-heading">
                <h1>
                  Welcome, <span>{user?user.name:""}</span>
                </h1>
              </div>
              <div className="dashboard-container-content-container-flex">
                <div className="dashboard-container-content-container-flex-search">
                  <img src={search} alt="search" />
                  <input type="search" placeholder="Search" />
                </div>
                <div className="dashboard-container-content-container-flex-date">
                  <div className="dashboard-container-content-container-flex-date-container">
                    <h4>Date: {currentDay}th {nameOfMonthUS}, {currentYear}</h4>
                    <h4>Time: {strTime}</h4>
                  </div>
                </div>
              </div>
              <div className="dashboard-container-content-container-cards">
                <Card
                  icon={ventilation}
                  heading="Temprature"
                  value={tempMean.length>0?`${tempMean[0].averageValue.toFixed(0)}°c`:<Puff
                    height="60"
                    width="60"
                    radius="6"
                    color="blue"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />}
                  healthy="Healthy"
                  color={colorValue}
                />
                <Card icon={iaq} heading="IAQ" value="143" healthy="Fault" color="red"/>
                <Card
                  icon={light}
                  heading="Lights"
                  value="143"
                  healthy="Alarm"
                  color="amber"
                />
                <Card
                  icon={heating}
                  heading="Heating"
                  value="143"
                  healthy="Fault"
                  color="red"
                />
                <Card
                  icon={ventilation}
                  heading="Ventilation"
                  value="143"
                  healthy="Alarm"
                  color="amber"
                />
                <Card icon={iaq} heading="IAQ" value="143" healthy="Healthy" color="green"/>
                <Card
                  icon={light}
                  heading="Lights"
                  value="143"
                  healthy="Fault"
                  color="red"
                />
              </div>

              <div className="dashboard-container-content-container-bottom">
                <div className="dashboard-container-content-container-bottom-left">
                  <h2>Temperature and Humidity</h2>
                  <img src={building} alt="Building" />
                </div>
                <div className="dashboard-container-content-container-bottom-right">
                  {/* <h2>Power Consumption</h2> */}
                  {/* <div className="chappi">
                    <img src={chappi} alt="" />
                  </div> */}
                  <Line
                          options={options}
                          data={{
                            labels,
                            datasets: [
                              {
                                label: "Temperature and Humidity",
                                data: graphArr.length>0?graphArr:[],
                                type: "line",
                                order: 2,
                                borderColor: "#3c5097",
                                backgroundColor: "#3c5097",
                                tension:0.4,
                                fill:true,
                                pointStyle:'start',
                                pointBorderColor:'#3c5097',
                                showLine:false
                              },
                            ],
                          }}
                        />
                  <h2>Air quality TVOC</h2>
                  <div className="dashboard-progress-bar">
                    <div className="dashboard-progress-bar-container">
                      <ProgressBar value={vocMean.length>0?vocMean[0].averageValue.toFixed(0):0}/>
                      {/* <Card/> */}
                      <ProgressBar value={0}/>
                      <ProgressBar value={0}/>
                      <ProgressBar value={0}/>
                      <ProgressBar value={0}/>
                      <ProgressBar value={0}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
