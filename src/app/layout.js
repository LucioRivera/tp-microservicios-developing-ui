import CircularButton from '../components/CircularButton'
import Link from 'next/Link'

export const metadata = {
  title: 'Bienvenido!',
  description: 'TP NUBES',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class='h-full font-sans font-medium'>
      <body>
		<div class='bg-white border-gray-200 dark:bg-gray-900o h-6 block h-auto'> 
			<div class='max-w flex flex-wrap items-center justify-around py-4 shadow-md'>
				<Link href='https://www.frsf.utn.edu.ar'>
					<div class='flex items-center justify-around'>
						<img class='h-12' src='https://seeklogo.com/images/U/universidad-nacional-tecnologica-utn-logo-3C9F14023F-seeklogo.com.png'/>
					</div>
				</Link>
				<div class='w-1/4 flex flex-nowrap item-center justify-around space-x-9'>
					<CircularButton text='Pedidos'/>
					<CircularButton text='Clientes'/>
					<CircularButton text='Productos'/>
				</div>
			</div>
		</div>
		{children}
	  </body>
    </html>
  )
}
