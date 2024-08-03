import '../globals.css'

export default function DefaultRowProducto({input_setAction, producto, setProductoTarget}) {
	function selectedDeleteProducto() {
		setProductoTarget(producto);
		input_setAction('delete');
	}

	function selectedModifyProducto() {
		setProductoTarget(producto);
		input_setAction('modify');
	}

	return (
		<tr>
			<td className="p-3 font-normal tracking-wide text-left">{producto.nombre}</td>
			<td className="p-3 font-normal tracking-wide text-left">{producto.stockActual}</td>
			<td className="p-3 font-normal tracking-wide text-left">{producto.precio}</td>
			<td className="p-3 font-normal tracking-wide text-left">{producto.categoria.nombre}</td>
			<td>
				<div className="flex p-3 text-gray-500 text-sm items-center justify-around italic underline">
					<p className="hover:text-blue-500 cursor-pointer" onClick={selectedModifyProducto}>Modificar</p>
					<p className="hover:text-blue-500 cursor-pointer" onClick={selectedDeleteProducto}>Eliminar</p>
				</div>
			</td>
		</tr>
	)
}
