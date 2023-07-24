import React from 'react'
import './component.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pagehead  = {
  width: "83vw",
  height: "12vh",
  backgroundColor: "#F5F5F5",
  display: "flex",
  float: "none",
  margin:'0 0 0 16.9vw'
}
const search = {
  margin: '1.7vh 0 0 1vw',
  color: 'grey'
}

const PageHead = () => {
  return (
    <div style={pagehead}>
      <div className='search'>
        <SearchIcon style={search} />
        <input type='text' placeholder='   Find Something....'/>

      </div>
      <div className='icon-space'>
        <NotificationsIcon sx={{fontSize:"30px",marginrRigth:'1vw'}} />
        <span>2</span>
        <MailOutlineIcon sx={{fontSize:"30px"}}/>
        <span>4</span>
        <p>EN <KeyboardArrowDownIcon/> </p>
      </div>

    </div>
  )
}

export default PageHead