import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import "./watch.css"

export default function Watch() {
  return (
    <div>
      <div className='absolute top-6 left-8'>
        <Link to="/">
          <div className='flex items-center text-white z-[2]'>
            <ArrowBackIcon className='arrow'/>
            <span className='font-bold text-2xl ml-4'>Home</span>
          </div>
        </Link>
      </div>
      <video className="w-full h-[100vh] object-cover" src="./assets/trailer.mp4" muted autoPlay controls/>
    </div>
  )
}