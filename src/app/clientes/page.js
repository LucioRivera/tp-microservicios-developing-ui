import DefaultTextInput from '../../components/DefaultTextInput'
import CircularButton from '../../components/CircularButton'
import DefaultRowCliente from '../../components/Clientes/DefaultRowCliente'
import DefaultRowHeadCliente from '../../components/Clientes/DefaultRowHeadCliente'

export default function Page() {
	return(
		<div className="min-h-screen">
			<div className="m-auto min-h-screen">
				<div className="m-7">
					<p className="w-1/2 m-auto text-center text-3xl font-semibold italic"> Gestion de Clientes </p>
				</div>

				<div className="mx-44 shadow-xl p-10"> 
					<div className="flex justify-between nowrap">
						<div className="flex w-2/4 justify-around items-end nowrap space-x-7">
							<DefaultTextInput label="Nombre cliente" id="nombre_cliente"/> 
							<CircularButton text="Buscar"/>
						</div>

						<div className="mt-auto">
							<CircularButton text="Dar de Alta"/>
						</div>
					</div>

					<div className="mt-4 overflow-y-auto max-h-56">
						<table className="w-full bg-slate-100">
							<thead class="bg-grey-50 border-b-2 border-grey-200">
								<DefaultRowHeadCliente nombre='Nombre' cuit='CUIT/CUIL' correo='Correo electrónico' maximo_descubierto='Máximo descubierto' obras_disponibles='Obras disponibles' acciones='Administrar'/> 
							</thead>
							<tbody>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
								<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12}/>
							</tbody>
						</table>
					</div>
				</div>
				<dialog>HOLAAAA</dialog>

			</div>
		</div>
	);
}
