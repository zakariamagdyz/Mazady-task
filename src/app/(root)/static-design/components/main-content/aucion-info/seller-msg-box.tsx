import { SendHorizonal } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const SellerMessageBox = () => {
  return (
    <section className='space-y-2 rounded-lg px-5  py-6 shadow-md '>
      <h2 className='text-2xl font-bold text-muted'>ارسال رسالة الى البائع</h2>
      <p className='font-regular text-muted '>يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار</p>
      <form action='' className='flex gap-1 '>
        <fieldset className='grow'>
          <Input
            placeholder='اكتب سؤالك'
            className='rounded-3xl border border-[#E3E3E3] bg-[#F3F3F3] placeholder:text-[#707070]'
          />
        </fieldset>
        <Button size={'icon'} className='rounded-full bg-gradient-primary-linear'>
          <SendHorizonal className='h-6 w-6 rotate-180' />
        </Button>
      </form>
    </section>
  )
}

export default SellerMessageBox
