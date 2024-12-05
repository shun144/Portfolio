import { memo } from 'react'
import Graph from './Graph';


const FrontEndSkills: { [key: string]: number } = {
  "JavaScript": 4,
  "TypeScript": 5,
  "HTML": 4,
  "CSS/SCSS": 4,
  "React": 4,
  "Next.js": 3,
  "Python": 2,
  "Django": 2,
}

const BackEndSkills: { [key: string]: number } = {
  "PHP": 3,
  "Laravel": 3,
  "Node.js": 3,
  "C#": 3,
}

const Skill = () => {
  return (
    <div className="w-full h-screen bg-amber-300">

      <div className="text-white text-8xl select-none flex justify-center items-center pt-20 pb-10">
        My Skill
      </div>


      <div className="w-full h-3/4 flex justify-center items-center gap-x-10">
        <Graph title="frontend skills" skillMap={FrontEndSkills} />
        <Graph title="backend skills" skillMap={BackEndSkills} />
      </div>

    </div>
  )
}

export default memo(Skill);