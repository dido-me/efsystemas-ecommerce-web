import { Carousel, CustomFlowbiteTheme } from 'flowbite-react'
import { HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'
import ProductCard from '@app/components/ProductCard.component'

const customTheme: CustomFlowbiteTheme['carousel'] = {
  control: {
    icon: 'text-black text-2xl font-bold',
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-black dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10'
  }
}

export default function CarouselProducts ({ nameSection }: { nameSection: string }) {
  return (
        <section className='my-8'>
            <section className='flex justify-between'>
                <h1 className='text-xl font-bold'>{nameSection}</h1>
                <Link href={'/productos'} className='flex items-center gap-2'>ver todo <HiArrowRight /></Link>
            </section>
            <hr className='my-4' />
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[28rem] ">
                <Carousel theme={customTheme} indicators={false}>
                    <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white gap-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white gap-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white gap-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </Carousel>
            </div>
        </section>

  )
}
