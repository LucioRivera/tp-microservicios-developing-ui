"use client"
import '../globals.css'
import DefaultTextInput from '../../components/DefaultTextInput'
import CircularButton from '../../components/CircularButton'
import DefaultRowCliente from '../../components/Clientes/DefaultRowCliente'
import DefaultRowHeadCliente from '../../components/Clientes/DefaultRowHeadCliente'
import { useEffect, useState, useRef} from 'react'
import DisplayAddCliente from './Add/DisplayAddCliente'
import DisplayModifyCliente from './DisplayModifyCliente'
import DisplayDeleteCliente from './Delete/DisplayDeleteCliente'

export default function TableContainerCliente(){
    async function getClientes(){ 
		console.log('Fetching...');

		const response = await fetch('http://localhost/clientes/api/clientes');
		if (!response.ok) {
			throw new Error('Falla Fetch'); 
		}
		const json = await response.json();
		console.log(json);

		setClientes(json);
    }

    const [clientes, setClientes] = useState();
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
	const deleteDialog = useRef(null);
	const modifyDialog = useRef(null);
	const assignDialog = useRef(null);
	
	useEffect(() => {
		getClientes();
	}, []);

	useEffect(() => {
		console.log(action);
		console.log('Use Effect');
		if (action === "initial") getClientes();

		if (addDialog.current) {
			if (action === "add") {
				addDialog.current.showModal();
			}
			else {
				addDialog.current.close();
			}
		}

		if (modifyDialog.current) {
			if (action === "modify") {
				modifyDialog.current.showModal();
			}
			else {
				modifyDialog.current.close();
			}
		}
		
		if (deleteDialog.current) {
			if (action === "delete") {
				deleteDialog.current.showModal();
			}
			else {
				deleteDialog.current.close();
			}

		}
	}, [action, addDialog, modifyDialog, deleteDialog, assignDialog]);

    return(
		<div className="m-auto min-h-full">
			<div className="m-7">
				<p className="w-1/2 m-auto text-center text-3xl font-semibold italic"> Gestion de Clientes </p>
			</div>

			<div className="mx-44 mb-20 shadow-xl p-10 max-h-[70vh]"> 
				<div className="flex justify-between">
					<div className="flex w-2/4 justify-around items-end nowrap space-x-7">
						<DefaultTextInput label="Nombre cliente" id="nombre_cliente"/> 
						<CircularButton text="Buscar"/>
					</div>

					<div className="mt-auto">
						<CircularButton text="Dar de Alta" onClick={() => setAction("add")}/>
					</div>
				</div>

				<div className="mt-4 overflow-y-auto max-h-[56vh]">
					<table className="w-full bg-slate-100">
						<thead className="bg-grey-50 border-b-2 border-grey-200">
							<DefaultRowHeadCliente nombre='Nombre' cuit='CUIT/CUIL' correo='Correo electrónico' maximo_descubierto='Máximo descubierto' obras_disponibles='Obras disponibles' acciones='Administrar'/> 
						</thead>
						<tbody>
							{console.log(clientes)}
							{clientes?.map((cliente) => (
								<DefaultRowCliente 
								key={cliente.id}
								nombre={cliente.nombre} 
								cuit={cliente.cuit}
								correo={cliente.correoElectronico}
								maximo_descubierto={cliente.maximoDescubierto}
								obras_disponibles={cliente.cantObrasDisponibles}/>
							))}
						</tbody>
					</table>
				</div>
				<DisplayAddCliente ref={addDialog} input_setAction={setAction}/>
				<DisplayModifyCliente ref={modifyDialog} input_setAction={setAction} input_setClientes={setClientes}/>
				<DisplayDeleteCliente ref={deleteDialog} input_setAction={setAction} input_setClientes={setClientes}/>
			</div>
		</div>
    );
}
