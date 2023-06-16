import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ListItem from "../listItem/listItem"
import "./listRow.css"
import { useRef, useState } from 'react';

export default function ListRow() {
  const [isMoved, setIsMoved] = useState(false);

  const [slideNum, setSlideNum] = useState(0);
  const listContainerRef = useRef();
  
  const handleClick = (direction) => {
    setIsMoved(true)
    let dist = listContainerRef.current.getBoundingClientRect().x
    if (direction==="left" && slideNum>0){
      setSlideNum(slideNum-1)
      listContainerRef.current.style.transform = `translateX(${dist+266}px)`
    }

    if (direction==="right" && slideNum<3){
      setSlideNum(slideNum+1)
      listContainerRef.current.style.transform = `translateX(${dist-266}px)`
    }

  }
  
  return (

    <div className='bg-[#080808] text-white'>
      <span className="text-2xl pt-4 px-10 block">Continue to watch</span>
      <div className="relative">
        {isMoved&&<ArrowBackIosNewIcon className='absolute top-0 bottom-0 m-auto arrow left-3 text-white bg-[rgb(0,0,0,0.5)] cursor-pointer' onClick={() => handleClick("left")}/>}
        
        <div className="flex listItemContainer pl-10 py-6 text-black" ref={listContainerRef}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
        <ArrowForwardIosIcon className='absolute top-0 bottom-0 right-3 m-auto arrow left text-white bg-[rgb(0,0,0,0.5)] cursor-pointer' onClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}