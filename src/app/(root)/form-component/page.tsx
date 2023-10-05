import { SWRProvider } from '@/providers/swr-provider'
import { ToastProvider } from '@/providers/toast-provider'

import MainLaout from './components/main-layout'
import { getAllCategories } from './services'

const FormPage = async () => {
  const categories = await getAllCategories()
  return (
    <SWRProvider>
      <ToastProvider />
      <main className='font-accent '>
        <header className='bg-gradient-primary-linear px-6 py-4 text-white shadow-lg '>
          <section className='mx-auto max-w-screen-lg'>
            <h1 className=' text-3xl font-bold'>Form Component</h1>
          </section>
        </header>
        <MainLaout categories={categories} />
      </main>
    </SWRProvider>
  )
}

export default FormPage
