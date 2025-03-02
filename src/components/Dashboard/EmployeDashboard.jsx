import React from 'react'
import Header from '../../others/Header'
import TaskNamelist from '../../others/TaskNamelist'
import Tasklist from '../Tasklist/Tasklist'

const EmployeDashboard = () => {
  return (
    <div className='h-screen  bg-[#1C1C1C]'>
        <Header />
        <TaskNamelist />
        <Tasklist />
    </div>
  )
}

export default EmployeDashboard