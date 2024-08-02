"use client"
import '../globals.css'
import DefaultTextInput from '../DefaultTextInput'
import CircularButton from '../CircularButton'
import DefaultRowCliente from '../Clientes/DefaultRowCliente'
import DefaultRowHeadPedido from '../Pedidos/DefaultRowHeadPedido'
import { useEffect, useState, useRef} from 'react'
//import DisplayAddCliente from './Add/DisplayAddCliente'
//import DisplayModifyCliente from './Modify/DisplayModifyCliente'

//<DisplayAddCliente ref={addDialog} input_setAction={setAction}/>
//{clienteTarget !== undefined ?  <DisplayModifyCliente ref={modifyDialog} input_setAction={setAction} clienteTarget={clienteTarget}/> : null}

export default function TableContainerPedido(){
    async function getPedidos(){ 
		console.log('Fetching all...');
		
		const response = await fetch('http://localhost/pedidos/api/pedidos');
		if (!response.ok) {
			throw new Error('Falla Fetch'); 
		}
		const json = await response.json();
		console.log(json);

		setPedidos(json);
    }

    const [pedidos, setPedidos] = useState();
	const [pedidoTarget, setPedidoTarget] = useState();
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
	const modifyDialog = useRef(null);
	
	useEffect(() => {
		getPedidos();
	}, []);

	useEffect(() => {
		console.log(action);
		console.log('Use Effect');
		if (action === "initial") getPedidos();

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
	}, [action, addDialog, modifyDialog]);

    return(
		<div className="m-auto min-h-full">
			<div className="m-7">
				<p className="w-1/2 m-auto text-center text-3xl font-semibold italic"> Gestion de Pedidos </p>
			</div>

			<div className="mx-44 mdow-xl p-10 max-h-[70vh]"> 
				<div className="flex justify-between">
					<div className="flex w-2/4 justify-around items-end nowrap space-x-7">
						<DefaultTextInput label="Numero pedido" id="numero_pedido"/> 
						<CircularButton text="Buscar"/>
					</div>

					<div className="mt-auto">
						<CircularButton text="Dar de Alta" onClick={() => setAction("add")}/>
					</div>
				</div>

				<div className="mt-4 overflow-y-auto max-h-[56vh]">
					<table className="w-full bg-slate-100">
						<thead className="bg-grey-50 border-b-2 border-grey-200">
							<DefaultRowHeadPedido numeroPedido='Numero' estado='Estado' cliente='Cliente' total='Total' acciones='Administrar'/> 
						</thead>
						<tbody>
							{/*clientes?.map((cliente) => (
								<DefaultRowCliente 
								input_setAction={setAction}
								cliente={cliente}
								setClienteTarget={setClienteTarget}
								key={cliente.id}/>
							))*/}
						</tbody>
					</table>
				</div>
			</div>
		</div>
    );
}
