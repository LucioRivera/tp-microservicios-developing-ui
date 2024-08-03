import '../globals.css'

export default function DefaultRowPedido({input_setAction, pedido, setPedidoTarget}) {
	function selectedModifyPedido() {
		setPedidoTarget(pedido);
		input_setAction('modify');
	}

	return (
		<tr>
			<td className="p-3 font-normal tracking-wide text-left">{pedido.numeroPedido}</td>
			<td className="p-3 font-normal tracking-wide text-left">{pedido.estado}</td>
			<td className="p-3 font-normal tracking-wide text-left">{pedido.cliente.nombre}</td>
			<td className="p-3 font-normal tracking-wide text-left">{pedido.total}</td>
			<td>
				<div className="flex p-3 text-gray-500 text-sm items-center justify-center italic underline">
					<p className="hover:text-blue-500 cursor-pointer" onClick={selectedModifyPedido}>Actualizar estado</p>
				</div>
			</td>
		</tr>
	)
}
