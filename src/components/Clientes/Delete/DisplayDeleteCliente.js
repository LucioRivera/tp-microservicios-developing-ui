import { forwardRef } from 'react';
import '../../globals.css'
import CircularButton from '../../CircularButton';
import FormAddCliente from '../Add/FormAddCliente';

const DisplayDeleteCliente = forwardRef(({input_setAction}, ref) => {
    return (
        <dialog ref={ref} className="w-2/5 rounded-xl">
            <div className="m-7"> <p className="text-center text-xl font-semibold italic">Eliminación de Cliente</p> </div>
            <div className="px-4 pb-4">
                <p className="text-center text-lg mt-7">
                    Está seguro que desea eliminar al cliente Pedro Sanchez (20-42752-45)
                </p>
                <p className="text-center mt-3 text-red-600">
                    Esta acción no se puede deshacer
                </p>
            </div>
            <div className="mb-7 mt-7 mx-1/2 flex items-center justify-around space-x-7">
                <CircularButton onClick={() => input_setAction('initial')} text="Aceptar"/>
                <CircularButton onClick={() => input_setAction('initial')} text="Cerrar"/>
            </div>
        </dialog>
    );
}); 

export default DisplayDeleteCliente;
