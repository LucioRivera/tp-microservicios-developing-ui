import CircularButton from '../components/CircularButton'
import Link from 'next/link'

export const metadata = {
  title: 'Bienvenido!',
  description: 'TP NUBES',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full font-sans font-medium'>
      <body>
		<div className='bg-white border-gray-200 dark:bg-gray-900o h-6 block h-auto'> 
			<div className='max-w flex flex-wrap items-center justify-around py-4 shadow-md'>
				<Link href='https://www.frsf.utn.edu.ar'>
					<div className='flex items-center justify-around'>
						<img className='h-12' src='https://seeklogo.com/images/U/universidad-nacional-tecnologica-utn-logo-3C9F14023F-seeklogo.com.png'/>
					</div>
				</Link>
				<div className='w-1/4 flex flex-nowrap item-center justify-around space-x-9'>
					<Link href='/pedidos'>
						<CircularButton text='Pedidos'/>
					</Link>
					<Link href='/clientes'>
						<CircularButton text='Clientes'/>
					</Link>
					<Link href='/productos'>
						<CircularButton text='Productos'/>
					</Link> 
				</div>
			</div>
		</div>
		{children}
	  </body>
    </html>
  )
}
