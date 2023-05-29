import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '@/layouts/main-layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1 className='text-teal-300 py-4'>
        Mohammad SUbhan
      </h1>
    </MainLayout>
  )
}
