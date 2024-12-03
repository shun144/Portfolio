import { memo } from 'react'
import Card from './Card';

const List = () => {
  return (
    <div className="flex flex-wrap -m-4">

      <Card title="トレロ風タスク管理アプリ" content="トレロのようにタスクを列間で移動できます。React + index.dbを使用しています。" url="https://react-ts-todo-app-b9852.web.app/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </Card>

      <Card title="診断作成アプリ" content="トレロのようにタスクを列間で移動できます。React + index.dbを使用しています。" url="https://react-ts-todo-app-b9852.web.app/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </Card>


      <Card title="Neptune" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </Card>

      <Card title="Melanchole" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
        </svg>
      </Card>

      <Card title="Bunker" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </Card>

      <Card title="Ramona Falls" content="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </Card>
    </div>
  )
}

export default memo(List);