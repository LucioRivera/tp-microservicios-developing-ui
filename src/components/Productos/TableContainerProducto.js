"use client"
import '../globals.css'
import DefaultTextInput from '../DefaultTextInput'
import CircularButton from '../CircularButton'
import DefaultRowProducto from '../Productos/DefaultRowProducto'
import DefaultRowHeadProducto from '../Productos/DefaultRowHeadProducto'
import { useEffect, useState, useRef} from 'react'
//import DisplayAddCliente from './Add/DisplayAddCliente'
//import DisplayModifyPedido from './Modify/DisplayModifyPedido'

//<DisplayAddCliente ref={addDialog} input_setAction={setAction}/>
//{pedidoTarget !== undefined ?  <DisplayModifyPedido ref={modifyDialog} input_setAction={setAction} pedidoTarget={pedidoTarget}/> : null}

export default function TableContainerProducto(){
    async function getProductos(){ 
		console.log('Fetching all...');
		
		const response = await fetch('http://localhost/productos/api/productos');
		if (!response.ok) {
			throw new Error('Falla Fetch'); 
		}
		const json = await response.json();
		console.log(json);

		setProductos(json);
    }

    const [productos, setProductos] = useState();
	const [productoTarget, setProductoTarget] = useState();
    /*
    action puede ser:
        -initial (no se hace nada, primera vez o se cancela la accion anterior)
        -add (agregar cliente)
        -modify (modificar cliente)
    */
    const [action, setAction] = useState("initial");
	const addDialog = useRef(null);
	const modifyDialog = useRef(null);
	const deleteDialog =useRef(null);
	
	useEffect(() => {
		getProductos();
	}, []);

	useEffect(() => {
		console.log(action);
		console.log('Use Effect');
		if (action === "initial") getProductos();

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
	}, [action, addDialog, modifyDialog, deleteDialog]);

    return(
		<div className="m-auto min-h-full">
			<div className="m-7">
				<p className="w-1/2 m-auto text-center text-3xl font-semibold italic"> Gestion de Productos </p>
			</div>

			<div className="mx-44 mdow-xl p-10 max-h-[70vh]"> 
				<div className="flex justify-between">
					<div className="flex w-2/4 justify-around items-end nowrap space-x-7">
						<DefaultTextInput label="Numero producto" id="numero_pedido"/> 
						<CircularButton text="Buscar"/>
					</div>

					<div className="mt-auto">
						<CircularButton text="Dar de Alta" onClick={() => setAction("add")}/>
					</div>
				</div>

				<div className="mt-4 overflow-y-auto max-h-[56vh]">
					<table className="w-full bg-slate-100">
						<thead className="bg-grey-50 border-b-2 border-grey-200">
							<DefaultRowHeadProducto numeroProducto='Numero' stockActual='Stock Actual' precio='Precio' categoria='Categoría' acciones='Administrar'/> 
						</thead>
						<tbody>
							{productos?.map((producto) => (
								<DefaultRowProducto 
								input_setAction={setAction}
								producto={producto}
								setProductoTarget={setProductoTarget}
								key={producto.id}/>
							))}
						</tbody>
					</table>
				</div>
				//Aca va
			</div>
		</div>
    );
}
