import React from 'react'
import './component.css'
import avatar from './david.jpg'
import GridViewIcon from '@mui/icons-material/GridView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Leftbar = () => {
  return (
    <div className='leftbar'>
        <div className='user-info'>
           <img src={avatar}/>
           <h3>SHAHARYAL</h3>
           <h6>admin</h6>
           <DensityMediumIcon sx={{color:'white',margin:'3.5vh 0 0 2vw'}}/>
        </div>
        <div className='leftbar-options'>
            <div className='lb-option'>
                <GridViewIcon/>
               <p>Dashboard</p>
               <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
                <GroupIcon/>
               <p>Students</p>
               <ChevronRightIcon/> 
            </div>
            <div className='lb-option'>
                <Person2Icon/>
                <p>Teachers</p>
                <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
                <ImageIcon/>
                <p>Gallery</p>
                <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <EditCalendarIcon/>
              <p>TimeTable</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <ArticleIcon/>
              <p>Syllabus</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
            <SchoolIcon/>
              <p>Exam</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <FileCopyIcon/>
              <p>Results</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <DateRangeIcon/>
              <p>Calendar Event</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <ChatBubbleOutlineIcon/>
              <p>Communication</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <InfoIcon/>
              <p>Information</p>
              <ChevronRightIcon/>
            </div>
            <div className='lb-option'>
              <AttachMoneyIcon/>
              <p>Fees</p>
              <ChevronRightIcon/>
            </div>
        </div>

    </div>
  )
}

export default Leftbar