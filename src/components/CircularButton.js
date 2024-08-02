'use client'
import './globals.css'

export default function CircularButton({text='TextNotGiven', onClick=null, type='button'}) {
	return (
	<button type={type} className="bg-red-500 hover:bg-red-600 text-white text-lg font-sans font-medium py-2 px-4 rounded-lg transition-colors duration-500 max-w-30 min-w-[6.5em] min-h-12 h-12" onClick={onClick!==null ? onClick : ()=>{}}>{text}</button>
	)
}
