import React from 'react'

const AcceptTask = ({data}) => {

  console.log(data)
  return (
    <div className="h-full flex-shrink-0 w-[24vw] bg-yellow-500 rounded-2xl">
    <div className="flex items-center justify-between p-4">
      <h3 className="bg-red-500  p-1 rounded-sm ">{data.category}</h3>
      <h4 className=" font-medium">{data.date}</h4>
    </div>
    <h2 className=" p-4 text-2xl font-semibold">{data.title}</h2>
    <p className="p-4">
     {data.description}
    </p>
    <div className='flex justify-between mt-2 p-4'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as failed</button>
    </div>
  </div>
  )
}

export default AcceptTask