import React from 'react';
import { BsHouseDoor,BsController,BsCollectionPlay,BsInstagram,BsHeartPulse,BsNewspaper} from "react-icons/bs";
import {TbCricket,TbTrendingUp} from "react-icons/tb"
import {MdFestival,MdLiveTv} from "react-icons/md"
import {SiYoutubemusic} from "react-icons/si"
const SidebarTwo = () => {

    const categoriesArr=[
      {icon:<BsHouseDoor/>,name:'Home'},
      {icon:<BsController/>,name:'Game'},
      {icon:<BsCollectionPlay/>,name:'Movies'},
      {icon:<SiYoutubemusic/>,name:'Music'},
      {icon:<MdLiveTv/>,name:'Live'},
      {icon:<BsHeartPulse/>,name:'Love'},
      {icon:<BsNewspaper/>,name:'News'},
      {icon:<TbCricket/>,name:'Cricket'}, 
      {icon:<MdFestival/>,name:'Festivals'},
      {icon:<TbTrendingUp/>,name:'Trending'},
      {icon:<BsInstagram/>,name:'InstaReels'},
      
   
    ]
  return (
    <div className="sidebar">
    {categoriesArr?.map((eachcatg)=>(
        <p>
          <span style={{marginRight:'25px'}}>{eachcatg?.icon}</span><span >{eachcatg?.name}</span>
        </p>
    ))}
    </div>
  )
}

export default SidebarTwo


