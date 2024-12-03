import { memo } from 'react'

const Header = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center bg-transparent fixed ">
      <div className='w-2/3 h-full flex justify-center items-center gap-x-16'>
        <div className='text-white text-lg select-none cursor-pointer'>HOME</div>
        <div className='text-white text-lg select-none cursor-pointer'>ABOUT ME</div>
        <div className='text-white text-lg select-none cursor-pointer'>SKILLS</div>
        <div className='text-white text-lg select-none cursor-pointer'>WORKS</div>
        <div className='text-white text-lg select-none cursor-pointer'>CONTACT</div>
      </div>
    </div>

  )
}

export default memo(Header)

