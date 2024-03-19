import { useState } from "react";
import Card from "./Card";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


let testimonialMessage = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque rem nemo ipsa cum porro ea, provident molestiae est expedita eos. Incidunt exercitationem cupiditate soluta, eum dolores nam quasi numquam consequuntur?`
let msgLen = testimonialMessage.length;
let random = msgLen;
console.log(random);
function Testiomonials({users}){

  if(!users)
  {
    return(
      <div>loading......</div>
    )
  }

  const [currentUserIndex,setCurrentUserIndex] = useState(0)
  let numberOfTestimonials = users.length;
  

  function leftHandler(){
    if(currentUserIndex > 0)
      setCurrentUserIndex(currentUserIndex-1);
    else  setCurrentUserIndex(numberOfTestimonials-1);
    random = Math.floor(Math.random()*(msgLen-150))+150;
  }

  function rightHandler(){
    if(currentUserIndex < numberOfTestimonials-1)
      setCurrentUserIndex(currentUserIndex+1);
    else setCurrentUserIndex(0)
    random = Math.floor(Math.random()*(msgLen-150))+150
  }

  function surpriseMeHandler(){
      let randomIndex = Math.floor(Math.random()*30);
      console.log(randomIndex);
      setCurrentUserIndex(randomIndex);
      random = Math.floor(Math.random()*(msgLen-150))+150
  }




   

  return (
    <div className='w-[30rem] h-auto bg-white my-16 rounded-xl flex flex-col items-center py-10 mt-20 shadow-purple-400'>
      <Card userData={users[currentUserIndex]}></Card>
      <div><FaQuoteLeft className='text-purple-500 text-3xl mt-4'/></div>
      <div className='text-center px-6 py-2 font-semibold text-slate-500'>{testimonialMessage.substring(0,random)}</div>
      <div><FaQuoteRight className='text-purple-500 text-3xl mb-4'/></div>


      {/* buttonsssssss hereeeeeee */}
    
      <div className='flex'>
          <button onClick={leftHandler}><FaChevronLeft className='text-purple-500 text-3xl mx-4 my-2 hover:text-purple-800 transition-all duration-200'/></button>
          <button onClick={rightHandler}><FaChevronRight className='text-purple-500 text-3xl mx-4 my-2 hover:text-purple-800 transition-all duration-200'/></button>
      </div>
      <div>
        <button onClick={surpriseMeHandler} className='bg-purple-500 text-white px-10 py-1 my-4 rounded-lg border-sky-200 hover:bg-purple-800 transition-all duration-200'>Suprise Me</button>
      </div>
</div>
     
  )
}

export default Testiomonials