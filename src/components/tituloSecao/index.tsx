interface TituloSecaoProps {
  titulo: string
}

export default function TituloSecao({ titulo }: TituloSecaoProps) {
  return (
    <p className=' flex justify-center text-base mb-2 text-blue-950'>
      {titulo}
    </p>
  )
}
