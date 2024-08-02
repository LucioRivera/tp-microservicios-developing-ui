import { forwardRef} from 'react';
import '../../globals.css'
import FormAddCliente from './FormAddCliente';

const DisplayAddCliente = forwardRef(({input_setAction}, ref) => {
    return (
        <dialog ref={ref} className="w-1/2 rounded-xl">
            <div className="m-7"> <p className="text-center text-xl font-semibold italic">Alta de Cliente</p> </div>
            <FormAddCliente input_setAction={input_setAction}/>
        </dialog>
    );
}); 

export default DisplayAddCliente;
