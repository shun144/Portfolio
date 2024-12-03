import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// type Props = {
//   images: React.ReactNode[]
// }

const Component = () => {
  const ref = useRef<HTMLDivElement>(null)

  const images = [
    <div className='text-4xl bg-red-200'>1</div>,
    <div className='text-4xl bg-orange-200'>2</div>,
    <div className='text-4xl bg-green-200'>3</div>,
  ]

  // 1つの画像の横の長さ
  const itemWidth = 240
  // 画像間の感覚
  const gap = 24
  // 画像の横幅と、画像間の合計値
  const itemWidthWithGap = itemWidth + gap
  // 画像の数
  const numberOfContents = images.length
  // 横に流れる画像のシーケンス合計
  const [imageBlocks, setImageBlocks] = useState(images)

  useEffect(() => {
    // 「横幅の穴埋め」
    // windowの長さよりコンテンツ数が少ない場合
    // 横幅 < 画像の合計の長さ となるように、画像群(シーケンス)をループさせて配列に加える
    if (
      ref.current?.offsetWidth &&
      imageBlocks.length * itemWidthWithGap < ref.current.offsetWidth
    ) {
      // 全体の長さから何個分　足りていないのか
      const fillableNumberOfContents: number = Math.floor(
        (ref.current.offsetWidth - imageBlocks.length * itemWidthWithGap) /
        numberOfContents
      )

      // シーケンスを追加するのは何個か
      const fillableNumberOfSequence: number = Math.ceil(
        fillableNumberOfContents / numberOfContents
      )

      // シーケンス分　コンテンツを追加
      const newimageBlocks = [...imageBlocks]
      const _ = [...Array(fillableNumberOfSequence)].map((_, index) => {
        newimageBlocks.push(...imageBlocks)
      })

      setImageBlocks(newimageBlocks)
    }
  }, [ref.current]) //DOMがレンダリングされ、横幅が確定した瞬間に実行される

  return (
    <>
      <div
        className="flex items-center w-full relative mx-auto overflow-hidden"
        ref={ref}
      >
        <AnimatePresence onExitComplete={() => console.log('aaa')}>
          <motion.div
            // アニメーションの変化終了時点の最終移動差分
            animate={{
              x: itemWidthWithGap,
            }}
            // 初期状態〜Animationまでをどう変化させるかを記述
            transition={{
              repeat: Infinity, //ループさせる
              duration: 5, //　animationを終えるまでの時間(秒)
              ease: 'linear', // 変化方法。直線的に変化させている。
            }}
            onUpdate={(latest) => {
              if (latest.x as number >= itemWidthWithGap) {
                //１マス分動いたら発動する処理
                const newimageBlocks = [...imageBlocks]
                newimageBlocks.unshift(imageBlocks[imageBlocks.length - 1]) //冒頭に末尾の画像を追加
                newimageBlocks.pop() //末端の画像を消去する
                setImageBlocks(newimageBlocks) //変更した配列を適応
              }
            }}
          >
            <div
              className="flex gap-6"
              style={{
                width: `${itemWidthWithGap * imageBlocks.length}px`,
                marginLeft: `-${itemWidth}px`
              }}
            >
              {imageBlocks.map((block, index) => {
                return (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      width: `${itemWidth}px`,
                      height: `${itemWidth}px`
                    }}
                  >
                    {block}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export { Component as ScrollImages }
