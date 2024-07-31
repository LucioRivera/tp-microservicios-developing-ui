import './globals.css'

export default function DefaultTextInput({label, id, placeholder="", enabled=true}) {

  return(
    <div className="w-full box-border rounded-lg">
      <label htmlFor={id} className="mb-2 text-large font-medium text-gray-900">{label}</label>
      <input type="text" id={id} placeholder={placeholder} className={`${!enabled ? 'bg-gray-200' : 'bg-gray-50'} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:boder-red-500 block w-full p-2.5`} disabled={!enabled}/>
    </div>
  );
}
