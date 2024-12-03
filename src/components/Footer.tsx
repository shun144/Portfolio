import { memo } from 'react'

const Footer = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center bg-red-200">
      <div className='w-2/3 h-full flex justify-center items-center gap-x-16'>
        <div className='text-white text-4xl select-none'>Thank you for coming!</div>
      </div>
    </div>

  )
}

export default memo(Footer)