import React from 'react'
import Leftbar from '../Component/Leftbar'
import './style.css'
import PageHead from '../Component/PageHead'
import Page from './page'

const Mainpage = () => {
  return (
    <div className='Mainpage'>
        <Leftbar/>
        <PageHead/>
        <Page/>
        

    </div>
  )
}

export default Mainpage