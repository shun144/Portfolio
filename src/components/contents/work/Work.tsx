import { memo, useState } from 'react'
import WorkModal from "./WorkModal";

const workList = [
  {
    title: "診断作成アプリ",
    url: "https://qm.shun-studio.com/",
    capture: "",
  }
]

const Work = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openWorkModal = () => {
    setIsOpenModal(prev => !prev);
  }

  return (
    <div className="w-full h-screen bg-indigo-400">

      <div className="text-white text-8xl select-none flex justify-center items-center pt-20 pb-10">
        Work
      </div>

      <div className="w-full  flex justify-center items-center">
        <div className='w-2/3 relative z-10 grid grid-cols-3 gap-7'>


          {workList.map((work, index) => (
            <div key={index} className='w-80'>
              <div className='w-full text-3xl rounded shadow-xl cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300'
                onClick={openWorkModal}>
                <img className='max-w-full h-auto object-cover rounded-md' src="https://picsum.photos/id/237/400/300" alt="" />
              </div>
              <div className='w-full pt-3 text-center text-white text-xl'>{work.title}</div>
            </div>
          ))}

        </div>
      </div>

      <WorkModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />





      {/* <div className="w-full bg-white relative z-10"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "minmax(50px, 100px)" }}>
        <div className=' bg-orange-300 text-3xl border-2 border-gray'>1</div>
        <div className=' bg-orange-300 text-3xl border-2 border-gray'>2</div>
        <div className=' bg-orange-300 text-3xl border-2 border-gray' style={{ gridColumn: "1/3" }}>3</div>
        <div className=' bg-orange-300 text-3xl border-2 border-gray' style={{ gridColumn: "3/4", gridRow: "2/4" }}>4</div>
        <div className=' bg-orange-300 text-3xl border-2 border-gray'>5</div>
      </div> */}



    </div >
  )
}

export default memo(Work);