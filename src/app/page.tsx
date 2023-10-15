import Input from '@/components/input'
import ListaProduto from '@/components/listaProduto'
import TituloSecao from '@/components/tituloSecao'
import Image from 'next/image'

export interface IListaProduto {
  nome: string
  quantidade: number
  valor?: number | undefined
}

export default function Home() {
  const listaDeProdutos: IListaProduto[] = [
    { nome: 'Macarrão', quantidade: 1, valor: 7.99 },
    { nome: 'Feijão', quantidade: 2, valor: undefined },
    { nome: 'Arroz', quantidade: 2, valor: undefined },
    { nome: 'Batata', quantidade: 5, valor: undefined },
  ]

  return (
    <main className='box-border bg-gray-200 h-screen'>
      <header className='flex items-center justify-center gap-8 h-32 bg-gradient-to-t from-gray-200 to-blue-900'>
        <Image
          src='/Shopping-Cart.png'
          width={80}
          height={80}
          alt='Carrinho de compra'
        />
        <h1 className='text-3xl text-blue-950 mr-2'>Lista de Compras</h1>
      </header>

      <section className='flex flex-col items-center'>
        <TituloSecao titulo='Total dos produtos no carrinho' />
        <div className='flex items-center text-4xl bg-gray-300 w-72 h-16 rounded-md p-2 shadow-lg'>
          R$ 7,99
        </div>
      </section>

      <section className='flex flex-col items-center mt-10'>
        <TituloSecao titulo='Adicionar novo produto a lista' />
        <div className='flex gap-4 justify-between'>
          <div className='flex flex-col'>
            <Input
              nomeInput='nome-produto'
              textoInput='Produto'
              tipo='text'
              placeholder='Nome do produto'
            />
          </div>
          <div className='flex flex-col w-14'>
            <Input
              nomeInput='quantidade-produto'
              textoInput='Qtd'
              tipo='number'
              placeholder='Qtd'
            />
          </div>
          <button className='flex items-end'>
            <Image
              src={'/Checked.png'}
              alt='icone check'
              width={43}
              height={43}
            />
          </button>
        </div>
      </section>
      <section className='mt-10 mx-3'>
        <TituloSecao titulo='Lista de produtos' />
        <ListaProduto listaDeProdutos={listaDeProdutos} />
      </section>
      <footer className='fixed bottom-0 w-full bg-gradient-to-b from-gray-200 to-purple-900'>
        <div className='flex justify-center gap-4 mb-2 mt-5'>
          <Image
            src={'/GitHub.png'}
            alt='icone github'
            width={30}
            height={30}
          />
          <Image
            src={'/instagram.png'}
            alt='icone instagram'
            width={30}
            height={30}
          />
          <Image
            src={'/LinkedInCircled.png'}
            alt='icone linkedin'
            width={30}
            height={30}
          />
        </div>
        <p className='flex justify-center mb-3 text-blue-950'>
          Desenvolvido por Rafael Velofuri
        </p>
      </footer>
    </main>
  )
}
