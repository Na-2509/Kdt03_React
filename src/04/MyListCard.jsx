//1. useState import 하기
import { useState } from "react";

export default function MyListCard({ title, imgUrl, content }) {
  //2. useState 선언하기
  const [scnt , setScnt] = useState(0);
  const [dcnt, setDcnt] = useState(0);

  let cnt = 0;
  //좋아요
  const handleClick = () => {
    cnt = cnt +1
    //setScnt(scnt + 1)
    setScnt(prev => prev +1);
    setScnt(prev => prev +1);
    setScnt(prev => prev +1);
    console.log(`${title} click: ${scnt}`)
  }

  //싫어요
  const handleClick2 = () => {
    //cnt = cnt +1
    setDcnt(dcnt + 1)
    console.log(`${title} click: ${dcnt}`)
  }


  return (
    <div className="w-full flex justify-strat items-start border-1
                    p-5
                    bg-lime-100
                   border-gray-400">
      <div className="w-1/3">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-2/3 h-44 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {title}
          </h1>
          <p className="text-gray-500">
            {content}
          </p>
        </div>
        <div className="w-full flex fond-bold justify-between">
          <div className="cursor-pointer hover:text-pink-600 font-bold"
                onClick={handleClick}>
            좋아요 ❤ {scnt}
            </div>

          <div className="cursor-pointer hover:text-pink-600 font-bold"
                onClick={handleClick2}>
            싫어요 👎 {dcnt}
            </div>

        </div>
      </div>

    </div>

  )
}
