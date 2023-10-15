interface InputProps {
  nomeInput: string
  textoInput: string
  tipo: string
  placeholder: string
}

export default function Input({
  nomeInput,
  textoInput,
  tipo,
  placeholder,
}: InputProps) {
  return (
    <>
      <label className='text-blue-950 ml-2' htmlFor={nomeInput}>
        {textoInput}
      </label>
      <input
        className='h-10 rounded-xl shadow-lg pl-2'
        type={tipo}
        name={nomeInput}
        id={nomeInput}
        placeholder={placeholder}
      />
    </>
  )
}
