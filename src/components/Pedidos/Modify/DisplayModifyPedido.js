import { forwardRef } from 'react';
import '../../globals.css'
import CircularButton from '../../CircularButton';

const DisplayModifyPedido = forwardRef(({input_setAction, pedidoTarget}, ref) => {
    async function submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        
        console.log(payload);

        const options = {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
        };
        console.log(options);
        
        try {
            const path = `http://localhost/pedidos/api/pedidos/${pedidoTarget.id}/estado/${payload.estado}`;
            await fetch(path, options);
            console.log('Actialización exitosa');
        } catch(error) {
            console.error(error.message);
        } finally {
            input_setAction('initial');
        }
    }

    return (
        <dialog ref={ref} className="w-2/5 rounded-xl">
            <div className="m-7"> <p className="text-center text-xl font-semibold italic">Actualización de estado</p> </div>
            <div className="px-4 pb-4">
                <p className="text-center text-lg mt-7">
                    Seleccione el estado a actualizar
                </p>
            </div>
            <form onSubmit={submitForm}>
                <div className="flex items-center justify-center">
                <select name="estado"> 
                    <option value="ACEPTADO">ACEPTADO</option>
                    <option value="EN_PREPARACION">EN PREPARACIÓN</option>
                    <option value="RECHAZADO">RECHAZADO</option>
                    <option value="CANCELADO">CANCELADO</option>
                </select>
                </div>

                <div className="mb-7 mt-7 mx-1/2 flex items-center justify-around space-x-7">
                    <CircularButton type="submit" text="Aceptar"/>
                    <CircularButton onClick={() => input_setAction('initial')} text="Cerrar"/>
                </div>
            </form>
        </dialog>
    );
}); 

export default DisplayModifyPedido;
