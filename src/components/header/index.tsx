import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-center gap-8 h-32 bg-gradient-to-t from-gray-200 to-blue-900'>
        <Image src='/Shopping-Cart.png' width={80} height={80} alt='Carrinho de compra' />
        <h1 className='text-3xl text-blue-950 mr-2'>Lista de Compras</h1>
      </header>
    </>
  )
}
