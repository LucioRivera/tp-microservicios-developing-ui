import '../globals.css'

export default function DefaultRowHeadCliente ({nombre, cuit, correo, maximo_descubierto, obras_disponibles, acciones}) {
	return (
		<tr>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{nombre}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{cuit}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{correo}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{maximo_descubierto}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{obras_disponibles}</th>
			<th className="p-3 gray-50 italic font-semibold tracking-wide text-base text-center">{acciones}</th>
		</tr>
	)
}
