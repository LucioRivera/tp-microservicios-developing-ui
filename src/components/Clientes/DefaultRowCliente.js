import '../globals.css'

export default function DefaultRowCliente({nombre, cuit, correo, maximo_descubierto, obras_disponibles, input_setAction}) {
	return (
		<tr>
			<td className="p-3 font-normal tracking-wide text-left">{nombre}</td>
			<td className="p-3 font-normal tracking-wide text-left">{cuit}</td>
			<td className="p-3 font-normal tracking-wide text-left">{correo}</td>
			<td className="p-3 font-normal tracking-wide text-left">{maximo_descubierto}</td>
			<td className="p-3 font-normal tracking-wide text-left">{obras_disponibles}</td>
			<td>
				<div className="flex p-3 text-gray-500 text-sm items-center justify-between italic underline">
					<p className="hover:text-blue-500 cursor-pointer" onClick={() => input_setAction('modify')}>Modificar</p>
					<p className="hover:text-blue-500 cursor-pointer">Eliminar</p>
					<p className="hover:text-blue-500 cursor-pointer">Asignar Obra</p>
				</div>
			</td>
		</tr>
	)
}
