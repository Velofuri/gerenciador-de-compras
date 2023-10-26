'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Input from '@/components/input'
import ListaProduto from '@/components/listaProduto'
import TituloSecao from '@/components/tituloSecao'
import TotalProdutos from '@/components/totalProdutos'
import Image from 'next/image'
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

  const totalProdutos = listaProduto.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade * produto.valor
  }, 0)

  return (
    <main className='box-border'>
      <Header />

      <TotalProdutos totalProdutos={totalProdutos} />

      <section className='flex flex-col items-center mt-10'>
        <TituloSecao titulo='Adicionar novo produto a lista' />
        <form onSubmit={aoSalvar} className='flex gap-3 justify-between'>
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
          <div className='flex flex-col w-10'>
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
      <Footer />
    </main>
  )
}
