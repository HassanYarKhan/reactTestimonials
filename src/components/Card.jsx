import React from 'react'


function Card({userData}) {
    if(!userData)
        return(
    <div>Loading......</div>
    )
  return (
      <div>
          <div className='relative'>
                  <div className='absolute top-[-100px] right-[220px] w-[125px] h-[125px] z-10 bg-purple-200 rounded-full flex justify-center items-center'>
                      <img className='aspect-square rounded-full p-2 shadow-xl shadow-purple-400 border-2' src={userData.image} alt="" />
                  </div>
           </div>
            <div className='flex flex-col justify-center'> 
                    <div className='text-2xl font-bold'>{userData.firstName} {userData.lastName}</div>
                    <div className='text-sm text-purple-500 text-center'>{userData.company.title}</div>
              </div>
      </div>
   
  )
}

export default Card