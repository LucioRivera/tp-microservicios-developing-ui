import './globals.css'

export default function DefaultTextInput({label, id}) {
  return(
    <div className="w-full box-border rounded-lg">
      <label for={id} className="mb-2 text-large font-medium text-gray-900">{label}</label>
      <input type="text" id={id} className="bg-grey-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-red-500 focus:boder-red-500 block w-full p-2.5"/>
    </div>
  );
}
