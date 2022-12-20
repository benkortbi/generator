import Container from './../Ui/Container.jsx'
import { useState,useEffect,useRef } from 'react'
import Logo from './../Media/meme.png'
const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false)
  const check = useRef()
  const HTML = document.documentElement
  const changeHandler = (e) => {
    if(e.target.checked){
      HTML.classList.add("dark")
      localStorage.setItem('theme', 'dark')
    }else{
      HTML.classList.remove("dark")
      localStorage.setItem('theme', 'light')
  }
  }
  useEffect(() => {
    HTML.classList.add(localStorage.getItem('theme'))
    const autoCheckTheme = () => { 
     setInterval(() => {
       if(localStorage.getItem("theme") === "dark"){
         setIsChecked(true)
       }else{
         setIsChecked(false)
       }
     }, 10);
    }
    autoCheckTheme()
  },[HTML.classList])
  return (
  <header className='w-full h-16 relative bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-pink-600 dark:to-pink-900 transition delay-100'>
  <Container>
  <nav className='h-full flex justify-between px-2 items-center'>
  <a href="#home" className='flex items-center gap-1'>
  <img className='w-12 sm:w-14 md:w-16' src={Logo} alt='logo'/> 
  <span className='text-xl lg:text-2xl font-bold text-white'>MemeGenerator</span>
  </a>
  <div class="toggle">
    <input ref={check} onChange={changeHandler} type="checkbox" checked={isChecked}/>
    <label></label>
</div>
  </nav>
  </Container>
  </header>
  )
}
export default Navbar;