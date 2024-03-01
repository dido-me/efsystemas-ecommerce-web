import { Carousel } from 'flowbite-react'
import CarouselProducts from '@app/components/CarouselProducts.component'

export default function Home () {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
      <CarouselProducts nameSection='Nuevos Productos' />
      <CarouselProducts nameSection='Los más vendidos' />
    </main>
  )
}
