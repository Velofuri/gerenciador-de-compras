'use client'
import Input from '@/components/input'
import ListaProduto from '@/components/listaProduto'
import TituloSecao from '@/components/tituloSecao'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface IListaProduto {
  nome: string
  quantidade: number
  valor: number
}

export default function Home() {
  const [listaProduto, setListaProduto] = useState<IListaProduto[]>([])

  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem('listaProdutos') || '[]')
    setListaProduto(lista)
  }, [])

  const [nomeProduto, setNomeProduto] = useState<string>('')
  const [quantidadeProduto, setQuantidadeProduto] = useState(1)

  const aoSalvar: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const newListaProduto = [...listaProduto]
    newListaProduto.push({
      nome: nomeProduto,
      quantidade: quantidadeProduto,
      valor: 0,
    })
    setListaProduto(newListaProduto)
    setNomeProduto('')
    setQuantidadeProduto(1)
    localStorage.setItem('listaProdutos', JSON.stringify(newListaProduto))
  }

  const aoDeletar = (index: number) => {
    const newListaProduto = [...listaProduto]
    newListaProduto.splice(index, 1)
    setListaProduto(newListaProduto)
    localStorage.setItem('listaProdutos', JSON.stringify(newListaProduto))
  }

  const aoIncluirNoCarrinho = (index: number, valor: number) => {
    const newListaProduto = [...listaProduto]
    newListaProduto[index].valor = valor
    setListaProduto(newListaProduto)
    localStorage.setItem('listaProdutos', JSON.stringify(newListaProduto))
  }

  const onExcludeCart = (index: number) => {
    const newListaProduto = [...listaProduto]
    newListaProduto[index].valor = 0
    setListaProduto(newListaProduto)
    localStorage.setItem('listaProdutos', JSON.stringify(newListaProduto))
  }

  const TotalProdutos = listaProduto.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade * produto.valor
  }, 0)

  return (
    <main className='box-border bg-gray-200 h-screen'>
      <header className='flex items-center justify-center gap-8 h-32 bg-gradient-to-t from-gray-200 to-blue-900'>
        <Image src='/Shopping-Cart.png' width={80} height={80} alt='Carrinho de compra' />
        <h1 className='text-3xl text-blue-950 mr-2'>Lista de Compras</h1>
      </header>

      <section className='flex flex-col items-center'>
        <TituloSecao titulo='Total dos produtos no carrinho' />
        <div className='flex items-center text-4xl bg-gray-300 w-72 h-16 rounded-md p-2 shadow-lg'>
          {`R$ ${TotalProdutos.toFixed(2).replace('.', ',')}`}
        </div>
      </section>

      <section className='flex flex-col items-center mt-10'>
        <TituloSecao titulo='Adicionar novo produto a lista' />
        <form onSubmit={aoSalvar} className='flex gap-4 justify-between'>
          <div className='flex flex-col'>
            <Input
              nomeInput='nome-produto'
              textoInput='Produto'
              tipo='text'
              placeholder='Nome do produto'
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
              required={true}
            />
          </div>
          <div className='flex flex-col w-14'>
            <Input
              nomeInput='quantidade-produto'
              textoInput='Qtd'
              tipo='number'
              placeholder='Qtd'
              value={quantidadeProduto}
              onChange={(e) => setQuantidadeProduto(Number(e.target.value))}
              required={true}
            />
          </div>
          <button className='flex items-end'>
            <Image src={'/Checked.png'} alt='icone check' width={43} height={43} />
          </button>
        </form>
      </section>
      <section className='mt-10 mx-3'>
        <TituloSecao titulo='Lista de produtos' />
        <ListaProduto
          listaDeProdutos={listaProduto}
          onDelete={aoDeletar}
          onIncludeCart={aoIncluirNoCarrinho}
          onExcludeCart={onExcludeCart}
        />
      </section>
      <footer className='fixed bottom-0 w-full bg-gradient-to-b from-gray-200 to-purple-900'>
        <div className='flex justify-center gap-4 mb-2 mt-5'>
          <Link href='https://github.com/Velofuri' target='_blank'>
            <Image src={'/GitHub.png'} alt='icone github' width={30} height={30} />
          </Link>

          <Link href='https://www.instagram.com/rafaelvelofuri/' target='_blank'>
            <Image src={'/instagram.png'} alt='icone instagram' width={30} height={30} />
          </Link>

          <Link href='https://www.linkedin.com/in/rafaelvelofuri/' target='_blank'>
            <Image
              src={'/LinkedInCircled.png'}
              alt='icone linkedin'
              width={30}
              height={30}
            />
          </Link>
        </div>
        <p className='flex justify-center mb-3 text-blue-950'>
          Desenvolvido por Rafael Velofuri
        </p>
      </footer>
    </main>
  )
}
