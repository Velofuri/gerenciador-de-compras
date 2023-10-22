import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
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
    </>
  )
}
