import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./listItem.css"
import { ThumbsUpDown } from '@mui/icons-material';

export default function ListItem() {
  return (
    <div>
      <div className="list-item">
        <img className="list-item-image w-64 cursor-pointer" src="./assets/listItem2.jpg" alt="" />
        <div className="big-box text-white hidden w-[340px] bg-[#151515]">
          {/* <img className="w-[340px] cursor-pointer" src="./assets/listItem2.jpg" alt="" /> */}
          <video src="./assets/trailer.mp4" loop muted autoPlay/>
          <div className='big-box-icons flex justify-between'>
            <div>
              <PlayArrowIcon className='big-box-icon'/>
              <AddIcon className='big-box-icon'/>
              <ThumbUpIcon className='big-box-icon'/>
              <ThumbDownIcon className='big-box-icon'/>
            </div>
            <div>
              <ArrowDropDownIcon className='big-box-icon last-icon'/>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <span className='mr-2 pl-3'>2h 4m</span>
              <span className='mr-2 font-bold'>·</span>
              <span className=''>2018</span>
            </div>
            <div>
              <span className='mr-3 font-bold'>18+</span>
            </div>
          </div>
          <div className='p-3'>
            <span>When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. </span>
          </div>
        </div>
    </div>
    </div>
  )
}