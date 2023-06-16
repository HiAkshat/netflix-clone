import "./featured.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

export default function Featured({type}) {
  return (
    <div className="">
      {type && (
        <div className="category absolute top-24 left-12">
          <span className="text-white text-2xl font-bold">{type === "movie" ? "Movies" : "Series"}</span>
          <select className="text-lg" name="genre" id="genre" >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="w-full h-[90vh] object-cover" src="./assets/cover.jpg" alt="" />
      <div className="absolute bottom-44">
        <div className="flex flex-col w-[40%] ml-10">
          <img className="w-[500px]" src="./assets/featured1.png" alt="" />
          <span className="featured-text text-white text-lg my-3 ml-0 ">Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.</span>
          <div className="flex items-center">
            <div className="flex items-center bg-white px-6 py-3 m-2 ml-0 mr-6 rounded-lg text-[#080808] cursor-pointer">
              <PlayArrowIcon />
              <span className="text-xl font-medium pl-1">Play</span>
            </div>
            <div className="flex items-center bg-[#595959] px-6 py-3 m-4 ml-0 rounded-lg text-white cursor-pointer">
              <InfoIcon />
              <span className="text-xl font-medium pl-1">Info</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}