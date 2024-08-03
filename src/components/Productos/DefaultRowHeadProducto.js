import '../globals.css'

export default function DefaultRowHeadProducto ({numeroProducto, stockActual, precio, categoria, acciones}) {
	return (
		<tr>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{numeroProducto}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{stockActual}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{precio}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{categoria}</th>
			<th className="p-3 gray-50 italic font-semibold tracking-wide text-base text-center">{acciones}</th>
		</tr>
	)
}
