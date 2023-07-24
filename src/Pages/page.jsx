import React from 'react'
import './style.css'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';
import { CChart } from '@coreui/react-chartjs';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import calendar from './calendar.svg'
import calendar1 from './calendar1.gif'

 
const page = () => {
  return (
    <div className='container'>
      <h2>Admin Dashboard</h2>
      <div className='smallbox'>
        <div className='sb-IconSpace student'><p><GroupIcon /></p></div>
        <div className='sb-content'><span>Student</span><br /><h3>12,000</h3></div>
      </div>
      <div className='smallbox'>
        <div className='sb-IconSpace teacher'><Person2Icon /></div>
        <div className='sb-content'><span>Teachers</span><br /><h3>6000</h3></div>
      </div>
      <div className='smallbox'>
        <div className='sb-IconSpace parents'><SupervisorAccountIcon /></div>
        <div className='sb-content'><span>Parents</span><br /><h3>1789</h3></div>
      </div>
      <div className='smallbox'>
        <div className='sb-IconSpace earning'><AttachMoneyIcon /> </div>
        <div className='sb-content'><span>Earning</span><br /><h3>15,000</h3></div>
      </div>
      <div className='earning-graph graph'>
        <h3>Earning</h3>
        <div className='graph-space'><br />
          <CChart
            type="line"
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Earning online",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "blue",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "orange",
                  data: [4000, 2000, 1200, 39000, 1000, , 39000, 8000, 4000]
                },
                {
                  label: "Earning on cash",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "red",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "green",
                  data: [5000, 12000, 28000, 29000, 7000, 2500, 120, 7000, 60000]
                },
              ],
            }}
          />


        </div>

      </div>
      <div className='expense-graph graph'>
        <h3>Expense</h3>
        <div className='graph-space1'>
          <br />

          <CChart
            type="bar"
            data={{
              labels: ['January', 'February', 'March'],
              datasets: [
                {
                  label: 'Expense',
                  backgroundColor: 'blue',
                  data: [40, 20, 12],
                },
              ],
            }}
            labels="months"
          />
          <br />
          <CChart
            type="bar"
            data={{
              labels: ['January', 'February', 'March'],
              datasets: [
                {
                  label: 'Expense',
                  backgroundColor: 'orange',
                  data: [40, 20, 12],
                },
              ],
            }}
            labels="months"
          />

        </div>

      </div>
      <div className='student-chart graph'>
        <h3>Students</h3>
        <div className='graph-space1'>
          <br />
          <CChart
            type="doughnut"
            data={{
              labels: ['Female 6000', 'Male 6000'],
              datasets: [
                {
                  backgroundColor: ['#f0b308', 'green'],
                  data: [80, 80],
                },
              ],
            }}
          />
        </div>
      </div>
      <div className='event-calendar medium-box'>
        <h3>Event Calendar</h3><br/>
        <h4>July 2012</h4><br/>
        <img src={calendar1} className='calendar'/>
      </div>
      <div className='website-traffic medium-box'>
        <h3>Website Tarffic</h3><br/>
        <div className='Uniques-visitor'>
          <p>Unique Visitors</p>
          <h2>1230</h2>
        </div>
        <div className='traffic-gradient'></div>
        <div className='traffic-table'>
          <div className='row'>
            <span className='dot' style={{color:'#0862f0',backgroundColor:'#0862f0'}}>....</span>
            <span>Directs</span>
            <span>12000</span>
            <span>50%</span>
          </div>
          <div className='row'>
          <span className='dot' style={{color:'#c92fc0',backgroundColor:'#c92fc0'}}>....</span>
            <span>Search</span>
            <span>12000</span>
            <span>50%</span>
          </div>
          <div className='row'>
          <span className='dot' style={{color:'#f08008',backgroundColor:'#f08008'}}>....</span>
            <span>Referal</span>
            <span>12000</span>
            <span>50%</span>
          </div>
          <div className='row'>
          <span className='dot' style={{color:'#24f008',backgroundColor:'#24f008'}}>....</span>
            <span>Socials</span>
            <span>12000</span>
            <span>50%</span>
          </div>
        </div>
      </div>
      <div className='notice-board medium-box'>
        <h3>Notice Board</h3>
       
        <div className='date-box' style={{backgroundColor:'#FFEEBB'}}>
          <p>12,June,2021</p>
        </div>
        <div className='notice'>
          <h5>NAME OF NOTICE AND TIME AND DATE </h5>
          <h6>12:00 AM | status</h6>
        </div>
        <div className='date-box'style={{backgroundColor:'#D0F5BE'}}>
          <p>13,June,2021</p>
        </div>
        <div className='notice'>
        <h5>NAME OF NOTICE AND TIME AND DATE </h5>
          <h6>12:00 AM | status</h6>
        </div>
        <div className='date-box' style={{backgroundColor:'#FDCEDF'}}>
          <p>14,June,2021</p>
        </div>
        <div className='notice'>
        <h5>NAME OF NOTICE AND TIME AND DATE </h5>
          <h6>12:00 AM | status</h6>
        </div>
      </div>
      <div className='smallbox facebook social-media'>
        <h6><FacebookIcon sx={{margin:'0 0 -1vh 0'}}/> Facebook<br/>   Like us on Facebook</h6>
        
      </div>
      <div className='smallbox twitter social-media'>
      <h6><TwitterIcon sx={{margin:'0 0 -1vh 0'}}/>Twitter <br/> Like us on Twitter</h6>
        
      </div>
      <div className='smallbox google social-media'>
      <h6><GoogleIcon sx={{margin:'0 0 -1vh 0'}}/> Google<br/>  Like us on Google</h6>
        
      </div>
      <div className='smallbox linkedin social-media'>
      <h6> <LinkedInIcon sx={{margin:'0 0 -1vh 0'}}/>LinkedIn<br/>  Like us onLinkedIn</h6><br/>
        
      </div>

    </div>
  )
}

export default page