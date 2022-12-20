import { useState,useEffect } from 'react'
import { AiOutlineReload } from "react-icons/ai"
import Container from './../Ui/Container.jsx'
const Figure = (props) => {
  const [data, setData] = useState(null) ;
const [img, setImg] = useState(null);
 
useEffect (() => {
async function fetchData () {
try {
const response = await fetch
('https://api.imgflip.com/get_memes');
const data = await response.json();
setData(data) ;
for(let i = 0; i < data.data.memes.length; i++) {
const randomUrl = Math.floor(Math.random() * i);
setImg(data.data.memes[randomUrl].url);
}
} catch(e){
alert(e);
}
}
fetchData()
}, []);
  return(
    <div className='figure--section w-full h-full'>
    <Container>
    <figure className='w-full h-34 px-2 relative mx-auto mt-12 relative text-center'>
     {data ? <div> <span className='meme--text absolute -translate-x-1/2 text-3xl lg:text-4xl text-white font-bold top-4 w-34 lg:w-64'>
    {props.Toptxt}
    </span>
     <span className='meme--text absolute -translate-x-1/2 text-3xl lg:text-4xl text-white font-bold bottom-4 w-34 lg:w-64'>
    {props.Bottomtxt}
    </span>
    <img className=' w-full h-full object-cover rounded-md max-h-96 lg:max-h-min' src={img} Loading="lazy" alt='meme'/> </div> : <div className="w-full h-64 lg:h-80 rounded-md bg-slate-300 animate-pulse"></div> }
    </figure> 
    <div className="w-full relative flex justify-center mt-5">
     <button onClick={() => {
      for(let j = 0; j < data.data.memes.length;j++){
        setImg(data.data.memes[Math.floor(Math.random() * j)].url)
      }
    }} className="flex gap-1 items-center w-fit lg:py-5 py-3 px-2 lg:px- border dark:border-pink-900 border-sky-500 bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-pink-600 dark:to-pink-900 focus:ring-1 focus:ring-sky-500 focus:border-white w-full lg:text-lg text-white font-bold tracking-wide rounded-md transition delay-100 dark:focus:border-pink-300 dark:focus:ring-pink-900">Generate new one <AiOutlineReload /> </button>
    </div>
    </Container>
    </div>
    )
}
export default Figure;