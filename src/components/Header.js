import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { BsCameraVideo,BsBell } from "react-icons/bs";
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  
    const[searchinput,setsearchinput]=useState('');
    const navigate=useNavigate();

    const handleSearch=(e)=>{
        e.preventDefault();
        if(searchinput){
            navigate(`/search/${searchinput}`)
            setsearchinput('');
        }
    }
    

    const [isHovered, setIsHovered] = useState(false);

  const dynamicStyles = {
   
    padding: '10px',
    transition: 'background-color 0.3s ease',
    position: 'relative', 
  };

  const textStyles = {
    position: 'absolute',
    top: '90%',
    left: '67%', 
    transform: 'translate(-50%, -50%)',
    color: 'black',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="header">
      <div><Link to="/"><img className="youtube-icon" alt='' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" /></Link></div>
      <div style={{display:'flex',paddingTop:'12px'}} className="head-mid">
        <input  placeholder="Search" onChange={(e)=>{setsearchinput(e?.target?.value)}}/>
        <button onClick={(e)=>{handleSearch(e)}}> <BiSearch size={20}/></button>
      </div>
      <div className="head-right">
            <span className="head-right-span" ><BsCameraVideo className='header-icon1' fontSize='30px'/></span>
            <span className="head-right-span" ><BsBell className='header-icon2' fontSize='27px'/></span>
            <div >
            <div style={dynamicStyles}>
      <img style={{width:'40px',height:'40px',borderRadius:'20px'}}
        src="/images/profile.jpg"
        alt=''
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && (
        <div style={textStyles}>Subith</div>
      )}
    </div>

            </div>
        </div>
    </div>
  )
}

export default Header