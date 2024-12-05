import { memo } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contents from "./components/contents/Index"


const App = () => {




  return (
    <main className="w-full">
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

      {/* <ScrollImages images={images} /> */}
      <Header />

      <Contents />
      {/* <ScrollImages /> */}
      {/* <Carousel /> */}

      {/* <Svg/>   */}

      <Footer />

    </main >
  )
}

export default memo(App)


// import Card from "./Card"

// const App = () => {

//   return (
//     <main className="h-screen bg-white">

//       {/* header */}
//       <header className="flex flex-wrap w-full py-12 flex-col items-center text-center">
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">シュンのポートフォリオ</h1>
//         <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">作成したWebアプリケーションを紹介しています</p>
//       </header>

//       {/* container  */}
//       <div className="container px-5 py-12 mx-auto ">

//         {/* ポートフォリオ一覧 */}
//         <div className="flex flex-wrap -m-4">

//           <Card title="トレロ風タスク管理アプリ" content="トレロのようにタスクを列間で移動できます。React + index.dbを使用しています。" url="https://react-ts-todo-app-b9852.web.app/">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
//             </svg>
//           </Card>

//           <Card title="he Catalyzer" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//               <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line>
//               <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
//               <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
//               <line x1="2" y1="12" x2="6" y2="12"></line>
//               <line x1="18" y1="12" x2="22" y2="12"></line>
//               <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
//               <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
//             </svg>
//           </Card>

//           {/* <Card title="he Catalyzer" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//               <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line>
//               <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
//               <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
//               <line x1="2" y1="12" x2="6" y2="12"></line>
//               <line x1="18" y1="12" x2="22" y2="12"></line>
//               <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
//               <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
//             </svg>
//           </Card> */}

//           <Card title="Neptune" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//               <circle cx="12" cy="7" r="4"></circle>
//             </svg>
//           </Card>

//           <Card title="Melanchole" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
//             </svg>
//           </Card>

//           <Card title="Bunker" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//             </svg>
//           </Card>

//           <Card title="Ramona Falls" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//             </svg>
//           </Card>
//         </div>
//         {/* ポートフォリオ一覧 */}

//       </div>


//       {/* footer */}

//       {/* footer */}

//     </main >
//   )
// }

// export default App
