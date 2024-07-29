import './globals.css'

export default function DDCircularButton({text='TextNotGiven'}) {
	return (
	<button className="bg-red-500 hover:bg-red-600 text-white text-lg font-sans font-medium py-2 px-4 rounded-lg transition-colors duration-500 w-32">{text}</button>
	)
}
