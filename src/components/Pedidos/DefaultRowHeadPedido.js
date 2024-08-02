import '../globals.css'

export default function DefaultRowHeadPedido ({numeroPedido, estado, cliente, total, acciones}) {
	return (
		<tr>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{numeroPedido}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{estado}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{cliente}</th>
			<th className="p-3 gray-100 italic font-semibold tracking-wide text-base text-left">{total}</th>
			<th className="p-3 gray-50 italic font-semibold tracking-wide text-base text-center">{acciones}</th>
		</tr>
	)
}
