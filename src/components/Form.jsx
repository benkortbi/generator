import { useState } from 'react'
import Container from './../Ui/Container.jsx'
const Form = ({getDataOnSubmit}) => {
  const [formData, setFormData] = useState({
    topTitle: '',
    bottomTitle: '',
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prevShot => ({
        ...prevShot,
        [name]: value
    }
    ))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getDataOnSubmit(formData);
  }
  return(
    <div className='form--section'>
    <Container>
    <form onSubmit={handleSubmit} className='flex flex-col relative px-2 gap-5 w-full'>
    <div className='group--1 flex w-full items-center basis-[45%] gap-2'>
    <input name='topTitle' onChange={handleChange} value={formData.topTitle} type="text" placeholder="Top text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-700 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
   rounded-md tracking-wide dark:focus:border-pink-300 dark:focus:ring-pink-900 dark:bg-slate-900 dark:text-white transition delay-100"/>
    <input name='bottomTitle' value={formData.bottomTitle} onChange={handleChange} type="text" placeholder="Bottom text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-700 tracking-wide shadow-sm
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
   rounded-md dark:focus:border-pink-600 dark:focus:ring-pink-900 dark:bg-slate-900 dark:text-white transition delay-100"/>
    </div>
    <button type='submit' className='border dark:border-pink-900 border-sky-500 bg-gradient-to-r from-sky-500 to-indigo-500 focus:ring-1 focus:ring-sky-500 focus:border-white dark:focus:ring-pink-900 w-full py-2 text-white font-bold tracking-wide rounded-md dark:from-pink-600 dark:to-pink-900 transition delay-100'>Make it a meme
   </button>
    </form>
    </Container>
    </div>
    )
}
export default Form;