import MyListCard from "./MyListCard"
import MyListData from "./MyListData.json"

export default function MyList() {
    //console.log(MyListData)
    const tags = MyListData.map(item=> <MyListCard 
                                            key={item.title}                
                                            title={item.title}
                                            imgUrl={item.imgUrl}
                                            content={item.content}
                                            />);            

                                            //console.log(tags)
    

  return (
    <div className=" w-8/10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tags}
      {/* <MyListCard title = {title} imgUrl={imgUrl} content={content} />
      <MyListCard title = {title} imgUrl={imgUrl} content={content}/>
      <MyListCard title = {title} imgUrl={imgUrl} content={content}/>
      <MyListCard title = {title} imgUrl={imgUrl} content={content}/> */}
    </div>
  )
}
