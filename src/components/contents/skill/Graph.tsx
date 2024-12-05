import { memo } from 'react'

type Props = {
  title: string
  skillMap: { [key: string]: number }
}

const Graph = ({ title, skillMap }: Props) => {
  return (
    <div className='w-5/12 h-full rounded-md pt-5'>
      <div className='w-full flex justify-center items-center text-white uppercase text-4xl'>
        {title}
      </div>

      <div className='w-11/12 mx-auto mt-10'>

        {Object.keys(skillMap).map(key => (
          <div key={key} className='flex justify-start items-center pb-8'>
            <div className='w-4/12 flex justify-between items-center'>
              <div className='text-white text-3xl font-extrabold'>{key}</div>
              <div className='pr-5 text-white text-3xl font-extrabold'>{skillMap[key]}</div>
            </div>
            <div className='w-8/12 flex gap-x-4'>
              {
                [...Array(6)].map((_, i) => (<div key={i} className={`h-10 w-1/6 rounded-lg shadow ${i + 1 <= skillMap[key] ? "bg-white" : "border-2 border-dashed border-white"}`} />))
              }
            </div>
          </div>
        ))}




      </div>

    </div>
  )
}

export default memo(Graph);