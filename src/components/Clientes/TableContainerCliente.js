"use client"
import '../globals.css'
import DefaultTextInput from '../../components/DefaultTextInput'
import CircularButton from '../../components/CircularButton'
import DefaultRowCliente from '../../components/Clientes/DefaultRowCliente'
import DefaultRowHeadCliente from '../../components/Clientes/DefaultRowHeadCliente'
import { useEffect, useState, useRef} from 'react'
import DisplayAddCliente from './Add/DisplayAddCliente'
import DisplayModifyCliente from './DisplayModifyCliente'

export default function TableContainerCliente(){
    async function getClientes(){ 
		/*const options = {
			mode: 'no-cors',
			method: 'GET',
			headers: {
			'Content-Type': 'application/json'
			}
		};*/

		const response = await fetch('http://localhost:6080/api/clientes/');
		
		const json = await response.json();
		console.log(JSON.stringify(json));
    }

    const [clientes, setClientes] = useState(getClientes());
    /*
    action puede ser:
        -initial (no se hace nada, primera vez o se cancela la accion anterior)
        -add (agregar cliente)
        -delete (eliminar cliente)
        -modify (modificar cliente)
		-assign (asignar cliente)
    */
    const [action, setAction] = useState("initial");
	const addDialog = useRef(null);
	const deleteDialog = (null);
	const modifyDialog = useRef(null);
	const assignDialog = (null);

	useEffect(() => {
		console.log('Use Effect');
		if (action === "initial") setClientes(getClientes());

		if (addDialog.current) {
			if (action === "add") {
				addDialog.current.showModal();
			}
			else {
				addDialog.current.close();
			}

			if (action === "modify") {
				modifyDialog.current.showModal();
			}
			else {
				modifyDialog.current.close();
			}
		}

	}, [action]);

    return(
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
						<CircularButton text="Dar de Alta" onClick={() => setAction("add")}/>
					</div>
				</div>

				<div className="mt-4 overflow-y-auto max-h-56">
					<table className="w-full bg-slate-100">
						<thead class="bg-grey-50 border-b-2 border-grey-200">
							<DefaultRowHeadCliente nombre='Nombre' cuit='CUIT/CUIL' correo='Correo electrónico' maximo_descubierto='Máximo descubierto' obras_disponibles='Obras disponibles' acciones='Administrar'/> 
						</thead>
						<tbody>
							<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12} input_setAction={setAction}/>
							<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12} input_setAction={setAction}/>
							<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12} input_setAction={setAction}/>
							<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12} input_setAction={setAction}/>
							<DefaultRowCliente nombre='Gervasio Pita' cuit='20-121212-32' correo='luciorivera2000@gmail.com' maximo_descubierto={1212} obras_disponibles={12} input_setAction={setAction}/>
						</tbody>
					</table>
				</div>
				<DisplayAddCliente ref={addDialog} input_setAction={setAction}/>
				<DisplayModifyCliente ref={modifyDialog} input_setAction={setAction} input_setClientes={setClientes}/>
			</div>
		</div>
    );
}