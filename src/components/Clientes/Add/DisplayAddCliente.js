import { forwardRef } from 'react';
import '../../globals.css'
import CircularButton from '../../CircularButton';
import FormAddCliente from './FormAddCliente';

const DisplayAddCliente = forwardRef(({input_setAction}, ref) => {
    return (
        <dialog ref={ref} className="w-2/3">
            <div className="m-7"> <p className="text-center text-xl font-semibold italic">Alta de Cliente</p> </div>
            <div className="m-12">
                <FormAddCliente/>
            </div>
            <div className="my-7 mx-1/2 flex items-center justify-around space-x-7">
                <CircularButton onClick={() => input_setAction('initial')} text="Aceptar"/>
                <CircularButton onClick={() => input_setAction('initial')} text="Cerrar"/>
            </div>
        </dialog>
    );
}); 

export default DisplayAddCliente;