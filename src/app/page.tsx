import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='mx-auto grid min-h-screen max-w-lg place-items-center '>
      <section className='flex flex-col gap-6 text-center text-2xl'>
        <h1 className='text-4xl font-bold'>Maazady Front-end Task :</h1>
        <Button asChild variant={'link'} className='text-2xl'>
          <Link href='/form-component'>Form component</Link>
        </Button>
        <Button asChild variant={'link'} className='text-2xl'>
          <Link href='/static-design'>Static design</Link>
        </Button>
      </section>
    </main>
  )
}
