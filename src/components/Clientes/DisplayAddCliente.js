import { forwardRef } from 'react';
import '../globals.css'

const DisplayAddCliente = forwardRef(({cliente, input_setClientes, input_setAction}, ref) => {
    return (
        <dialog ref={ref}>
        {/* Dialog content goes here */}
        <p>This is a dialog</p>
        <button onClick={() => {input_setAction('initial');}}>Close</button>
        </dialog>
    );
}); 

export default DisplayAddCliente;