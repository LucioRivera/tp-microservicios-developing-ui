import { forwardRef } from 'react';
import '../../globals.css'
import CircularButton from '../../CircularButton';

const DisplayDeleteCliente = forwardRef(({input_setAction, clienteTarget}, ref) => {
    async function submitAction() {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        };
        console.log(options);
        
        try {
            const path = `http://localhost/clientes/api/clientes/${clienteTarget.id}`;
            console.log(path);
            await fetch(path, options);
            console.log('Eliminación exitosa');
        } catch(error) {
            console.error(error.message);
        } finally {
            input_setAction('intial');
        }
    }

    return (
        <dialog ref={ref} className="w-2/5 rounded-xl">
            <div className="m-7"> <p className="text-center text-xl font-semibold italic">Eliminación de Cliente</p> </div>
            <div className="px-4 pb-4">
                <p className="text-center text-lg mt-7">
                    ¿Está seguro que desea eliminar al cliente {clienteTarget.nombre} (CUIT: {clienteTarget.cuit})?
                </p>
                <p className="text-center mt-3 text-red-600">
                    Esta acción no se puede deshacer
                </p>
            </div>
            <div className="mb-7 mt-7 mx-1/2 flex items-center justify-around space-x-7">
                <CircularButton onClick={submitAction} text="Aceptar"/>
                <CircularButton onClick={() => input_setAction('initial')} text="Cerrar"/>
            </div>
        </dialog>
    );
}); 

export default DisplayDeleteCliente;
