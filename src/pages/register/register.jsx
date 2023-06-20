import "./register.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Register() {
  return (
    <div className="relative back-img w-full h-[100vh] object-cover">
      {/* <img className="" src="./assets/background.jpg" alt="" /> */}
      <div className="absolute top-0 text-white w-full">
        <div className="flex justify-between mt-8 w-[80%] m-auto">
          <img className='w-36 mx-6 mr-10 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" />
          <button className="bg-[#e50914] rounded-md px-4 font-bold text-sm">Sign In</button>
        </div>
        <div className="flex flex-col mt-[30vh] items-center">
          <span className="text-5xl font-extrabold">Unlimited movies, TV shows and more</span>
          <span className="text-2xl my-4">Watch anywhere, cancel anytime.</span>
          <span className="text-xl mb-6">Ready to watch? Enter your email to create or restart your membership.</span>
          <div className="flex items-center w-full justify-center">
            <input className="w-[400px] p-4 pl-6 h-[60px] text-lg rounded-md input-bar border border-[#787878]" type="text" placeholder="Email Address"/>
            <button className="flex items-center ml-4 bg-[#e50914] h-[60px] rounded-md p-4 text-2xl font-bold">
              <span>Get Started</span>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}