import TituloSecao from '../tituloSecao'

interface TotalProdutosProp {
  totalProdutos: number
}

export default function TotalProdutos({ totalProdutos }: TotalProdutosProp) {
  return (
    <section className='flex flex-col items-center'>
      <TituloSecao titulo='Total dos produtos no carrinho' />
      <div className='flex items-center text-4xl bg-gray-300 w-72 h-16 rounded-md p-2 shadow-lg'>
        {`R$ ${totalProdutos.toFixed(2).replace('.', ',')}`}
      </div>
    </section>
  )
}
