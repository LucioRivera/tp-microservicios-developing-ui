'use client'
import TableContainerCliente from '../../components/Clientes/TableContainerCliente'
import DefaultTextInput from '../../components/DefaultTextInput'
import CircularButton from '../../components/CircularButton'
import DefaultRowCliente from '../../components/Clientes/DefaultRowCliente'
import DefaultRowHeadCliente from '../../components/Clientes/DefaultRowHeadCliente'

export default function Page() {
	return(
		<div className="min-h-screen">
			<TableContainerCliente/>
		</div>
	);
}
