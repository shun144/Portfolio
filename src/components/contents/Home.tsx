import { memo } from "react"
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <div className="w-full h-screen bg-emerald-300">
      <div className="w-full h-full flex flex-col justify-center items-center">

        <div className="text-white text-8xl">
          Shun Lab!
        </div>
        <div className="text-white text-4xl mt-6">
          Shun Engineering Laboratory
        </div>
        
        <div className="mt-8">
          <IoIosArrowDown className="text-white text-8xl border-4 border-white rounded-full cursor-pointer  animate-bounce" />
        </div>
      </div>
    </div>
  )
}

export default memo(Home);