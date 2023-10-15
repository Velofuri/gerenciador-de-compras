import { IListaProduto } from '@/app/page'
import Image from 'next/image'

interface ListaProdutoProps {
  listaDeProdutos: IListaProduto[]
}

export default function ListaProduto({ listaDeProdutos }: ListaProdutoProps) {
  return (
    <ul>
      {listaDeProdutos.map((produto) => (
        <li className='grid grid-cols-9 gap-4 mb-2' key={produto.nome}>
          <h3 className='text-lg text-blue-950 col-span-3'>{produto.nome}</h3>
          <h3 className='p-1 text-sm text-blue-950 col-start-4 bg-gray-300 rounded-md w-auto h-auto text-center'>
            {produto.quantidade}
          </h3>
          <h3 className='p-1 col-span-2 text-sm text-blue-950 bg-gray-300 rounded-md w-auto h-auto text-center'>
            {produto.valor}
          </h3>
          <button>
            <Image
              src={'/addCart.png'}
              alt='item no carrinho'
              width={30}
              height={30}
            />
          </button>
          <button>
            <Image
              src={'/ReturnPurchase.png'}
              alt='tirar item no carrinho'
              width={30}
              height={30}
            />
          </button>
          <button>
            <Image src={'/Close.png'} alt='excluir' width={30} height={30} />
          </button>
        </li>
      ))}
    </ul>
  )
}
