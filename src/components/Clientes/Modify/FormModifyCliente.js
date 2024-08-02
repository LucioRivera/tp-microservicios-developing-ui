import '../../globals.css'
import DefaultTextInput from '../../DefaultTextInput'
import CircularButton from '../../CircularButton';

export default function FormModifyCliente({input_setAction, clienteTarget}) {
    async function submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        
        console.log(payload);

        const options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        };
        console.log(options);

        try {
            const path = `http://localhost/clientes/api/clientes/${clienteTarget.id}`;
            await fetch(path, options);
            console.log('Modificar exitoso');
        } catch(error) {
            console.error(error.message)
        } finally {
            input_setAction('initial');
        }
    }

    return (
        <div className="px-24 pb-12 pt-9">
            <form onSubmit={submitForm}> 
                <div className="flex items-center justify-around space-x-28">
                    <DefaultTextInput label="Nombre" name="nombre" defaultValue={clienteTarget.nombre}/>
                    <DefaultTextInput label="Email" name="correoElectronico" defaultValue={clienteTarget.correoElectronico}/>
                </div>

                <div className="mt-7 flex items-center justify-around space-x-28">
                    <DefaultTextInput label="CUIT" name="cuit" defaultValue={clienteTarget.cuit}/>
                    <DefaultTextInput label="Maximo Descubierto" name="maximoDescubierto" defaultValue={clienteTarget.maximoDescubierto}/>
                </div>

                <div className="mb-7 mt-9 mx-1/2 flex items-center justify-around space-x-7">
                    <CircularButton type="submit" text="Aceptar"/>
                    <CircularButton onClick={() => input_setAction('initial')} text="Cerrar"/>
                </div>
            </form>
        </div>
    );
}; 
