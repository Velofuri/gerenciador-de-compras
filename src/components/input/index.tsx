interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  nomeInput: string
  textoInput?: string
  tipo: string
  placeholder: string
  classes?: string
}

export default function Input({
  nomeInput,
  textoInput,
  tipo,
  placeholder,
  classes,
  ...props
}: InputProps) {
  return (
    <>
      <label htmlFor={nomeInput} className='text-blue-950 ml-2'>
        {textoInput}
      </label>
      <input
        {...props}
        type={tipo}
        name={nomeInput}
        id={nomeInput}
        placeholder={placeholder}
        min={0}
        className={`h-10 rounded-xl shadow-lg pl-2 ${classes}`}
      />
    </>
  )
}
