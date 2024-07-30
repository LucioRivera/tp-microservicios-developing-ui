import '../../globals.css'
import DefaultTextInput from '../../DefaultTextInput'

export default function FormAddCliente() {
    return (
        <div>
            <form>
                <div className="flex items-center justify-around space-x-12">
                    <DefaultTextInput label="Nombre" id="nombre"/>
                    <DefaultTextInput label="Email" id="nombre"/>
                </div>

                <div className="flex items-center justify-around space-x-12">
                    <DefaultTextInput label="CUIT" id="nombre"/>
                    <DefaultTextInput label="Maximo Descubierto" id="nombre"/>
                </div>
            </form>
        </div>
    );
}; 
