import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  title: string;
  content?: string;
  url?: string;
}

/**
 * svgタグのstrokeプロパティは必ずcurrentColorにする（stroke="currentColor"）\
 * 親要素で指定しているカラーを継承させるため
 * @param children 
 * @returns 
 */
const Card = ({ children, title, content = "", url = "#" }: Props) => {
  return (
    <a className="xl:w-1/3 md:w-1/2 p-4" rel="noopener noreferrer" target="_blank" href={url}>
      <div className="border border-gray-200 p-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
          {children}
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base text-gray-600">{content}</p>
      </div>
    </a>
  )
}
export default Card