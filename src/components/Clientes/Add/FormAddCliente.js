import '../../globals.css'
import DefaultTextInput from '../../DefaultTextInput'

export default function FormAddCliente() {
    return (
        <div className="px-24 pb-12 pt-9">
            <form>
                <div className="flex items-center justify-around space-x-28">
                    <DefaultTextInput label="Nombre" id="nombre"/>
                    <DefaultTextInput label="Email" id="nombre"/>
                </div>

                <div className="mt-7 flex items-center justify-around space-x-28">
                    <DefaultTextInput label="CUIT" id="nombre"/>
                    <DefaultTextInput label="Maximo Descubierto" id="nombre"/>
                </div>
            </form>
        </div>
    );
}; 
