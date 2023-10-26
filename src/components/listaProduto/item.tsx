import Image from 'next/image'
import Input from '../input'
import { IListaProduto } from '@/app/page'
import { useState } from 'react'

interface ListaProdutoProps {
  produto: IListaProduto
  onDelete: (index: number) => void
  onExcludeCart: (index: number) => void
  onIncludeCart: (index: number, valor: number) => void
  index: number
}

export default function Item({
  produto,
  index,
  onIncludeCart,
  onExcludeCart,
  onDelete,
}: ListaProdutoProps) {
  const [valor, setValor] = useState<number>(produto.valor)
  return (
    <li className='grid grid-cols-10 gap-2 mb-2 items-center'>
      <h3 className='text-lg text-blue-950 col-span-3'>{produto.nome}</h3>
      <h3 className='p-1 text-sm text-blue-950 bg-gray-300 rounded-md w-auto h-auto text-center'>
        {produto.quantidade}
      </h3>

      <Input
        classes='col-span-2 h-8'
        disabled={produto.valor !== 0}
        nomeInput='preco-produto'
        placeholder='preço'
        tipo='number'
        value={valor === 0 ? undefined : valor}
        onChange={(e) => setValor(+e.target.value)}
      />

      <button onClick={() => onIncludeCart(index, valor)}>
        <Image
          src={'/AddCart.png'}
          alt='incluir item no carrinho'
          width={30}
          height={30}
        />
      </button>

      <button onClick={() => onExcludeCart(index)}>
        <Image
          src={'/ReturnPurchase.png'}
          alt='tirar item no carrinho'
          width={30}
          height={30}
        />
      </button>

      <button onClick={() => onDelete(index)}>
        <Image src={'/Close.png'} alt='excluir' width={30} height={30} />
      </button>
    </li>
  )
}
