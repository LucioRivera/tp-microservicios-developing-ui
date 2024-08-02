import {forwardRef} from 'react';
import '../../globals.css'
import FormModifyCliente from './FormModifyCliente';

const DisplayModifyCliente = forwardRef(({input_setAction, clienteTarget}, ref) => {
    return (
        <dialog ref={ref} className="w-1/2 rounded-xl">
            <div className="m-7"> <p className="text-center text-xl font-semibold italic">Modificación de Cliente</p> </div>
            <FormModifyCliente input_setAction={input_setAction} clienteTarget={clienteTarget}/>
        </dialog>
    );
}); 

export default DisplayModifyCliente;
