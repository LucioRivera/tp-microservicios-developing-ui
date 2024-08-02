import '../../globals.css'
import DefaultTextInput from '../../DefaultTextInput'
import CircularButton from '../../CircularButton';

export default function FormAddCliente({input_setAction}) {
    async function submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        
        console.log(payload);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
             mode: 'cors',
             body: JSON.stringify(payload)
            };
        console.log(options);

        try {
            await fetch('http://localhost/clientes/api/clientes', options);
            console.log('POST exitoso');
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
                    <DefaultTextInput label="Nombre" name="nombre"/>
                    <DefaultTextInput label="Email" name="correoElectronico"/>
                </div>

                <div className="mt-7 flex items-center justify-around space-x-28">
                    <DefaultTextInput label="CUIT" name="cuit"/>
                    <DefaultTextInput label="Maximo Descubierto" name="maximoDescubierto" type="number"/>
                </div>

                <div className="mb-7 mt-2 mx-1/2 flex items-center justify-around space-x-7">
                    <CircularButton type="submit" text="Aceptar"/>
                    <CircularButton onClick={() => input_setAction('initial')} text="Cerrar"/>
                </div>
            </form>
        </div>
    );
}; 
