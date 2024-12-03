import React, { memo } from 'react'

const Skill = () => {
  return (
    <div className="w-full h-screen bg-amber-300">

      <div className="text-white text-8xl select-none flex justify-center items-center py-20">
        My Skill
      </div>

      {/* <div className="pb-10">
        <Slider />
      </div> */}

    </div>
  )
}

export default memo(Skill);