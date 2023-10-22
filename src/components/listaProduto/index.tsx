import { IListaProduto } from '@/app/page'
import Item from './item'

interface ListaProdutoProps {
  listaDeProdutos: IListaProduto[]
  onDelete: (index: number) => void
  onExcludeCart: (index: number) => void
  onIncludeCart: (index: number, valor: number) => void
}

export default function ListaProduto({
  listaDeProdutos,
  onDelete,
  onExcludeCart,
  onIncludeCart,
}: ListaProdutoProps) {
  return (
    <ul>
      {listaDeProdutos.map((produto, index) => (
        <Item
          key={index}
          index={index}
          produto={produto}
          onDelete={onDelete}
          onIncludeCart={onIncludeCart}
          onExcludeCart={onExcludeCart}
        />
      ))}
    </ul>
  )
}
