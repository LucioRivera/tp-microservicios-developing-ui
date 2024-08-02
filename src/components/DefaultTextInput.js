import './globals.css'

export default function DefaultTextInput({label, name, placeholder="", enabled=true, type="text"}) {

  return(
    <div className="w-full box-border rounded-lg min-w-[10em]">
      <label htmlFor={name} className="mb-2 text-large font-medium text-gray-900">{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} className={`${!enabled ? 'bg-gray-200' : 'bg-gray-50'} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:boder-red-500 block w-full p-2.5`} disabled={!enabled}/>
    </div>
  );
}
