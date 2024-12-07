import { memo, useEffect, useRef } from 'react'
// import Input from '../../../features/Input'
import Sample from '../../../features/Input'

const contact = () => {
  const refName = useRef<HTMLInputElement>(null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    console.log(ref.current.offsetTop);
  }, [])

  return (
    <div className="w-full h-screen min-h-[960px] bg-slate-950 ">

      <div className="text-white text-8xl select-none flex justify-center items-center pt-20 pb-10">
        About Me
      </div>

      <div className="w-full h-1/2 flex justify-center items-center">

        <div className="w-1/2 h-full  bg-slate-900 rounded-xl">

          <div className='w-full h-full mx-4 pt-4'>
            <p className='text-slate-400 text-xl '>
              最後までご覧いただきありがとうございました。<br />お仕事や私について、下記フォームからコメントをお願いいたします。
            </p>

            <div className='w-full h-full mt-4'>

              <Sample ref={ref} />

              {/* <Input id="name" label="name" ref={refName} /> */}
              {/* <div className="w-96 relative z-0">
                <input type="text" id="floating_standard"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />

                <label htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">name</label>
              </div> */}

            </div>
          </div>



        </div>

      </div>

    </div >
  )
}

export default memo(contact);