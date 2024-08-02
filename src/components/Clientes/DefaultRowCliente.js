import '../globals.css'

export default function DefaultRowCliente({input_setAction, cliente, setClienteTarget}) {
	function selectedDeleteCliente() {
		setClienteTarget(cliente);
		input_setAction('delete');
	}
	
	function selectedModifyCliente() {
		setClienteTarget(cliente);
		input_setAction('modify');
	}

	return (
		<tr>
			<td className="p-3 font-normal tracking-wide text-left">{cliente.nombre}</td>
			<td className="p-3 font-normal tracking-wide text-left">{cliente.cuit}</td>
			<td className="p-3 font-normal tracking-wide text-left">{cliente.correoElectronico}</td>
			<td className="p-3 font-normal tracking-wide text-left">{cliente.maximoDescubierto}</td>
			<td className="p-3 font-normal tracking-wide text-left">{cliente.cantObrasDisponibles}</td>
			<td>
				<div className="flex p-3 text-gray-500 text-sm items-center justify-between italic underline">
					<p className="hover:text-blue-500 cursor-pointer" onClick={selectedModifyCliente}>Modificar</p>
					<p className="hover:text-blue-500 cursor-pointer" onClick={selectedDeleteCliente}>Eliminar</p>
					<p className="hover:text-blue-500 cursor-pointer" onClick={() => input_setAction('assign')}>Asignar Obra</p>
				</div>
			</td>
		</tr>
	)
}
