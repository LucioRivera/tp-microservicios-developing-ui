import { forwardRef } from 'react';
import '../globals.css'

const DisplayModifyCliente = forwardRef(({cliente, input_setClientes, input_setAction}, ref) => {
    return (
        <dialog ref={ref}>
        {/* Dialog content goes here */}
        <p>Estas modificando un cliente</p>
        <button onClick={() => {input_setAction('initial');}}>Close</button>
        </dialog>
    );
}); 

export default DisplayModifyCliente;