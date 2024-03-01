import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import { HiSearch, HiUser, HiCube, HiShoppingCart, HiMenu, HiOutlineTicket, HiOutlineBadgeCheck, HiOutlinePhone } from 'react-icons/hi'

export default function NavbarPublic () {
  return (
    <>
        <Navbar fluid rounded className='py-8 w-11/12 m-auto'>
            <NavbarBrand as={Link} href="/">
                {/* <img src="/vercel.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">EF SYSTEMAS</span>
            </NavbarBrand>
            <TextInput type="text" rightIcon={HiSearch} placeholder="Buscar productos en EF SYSTEMAS" className='hidden xl:w-6/12 xl:block' />
            <NavbarToggle />
            <NavbarCollapse >
                <NavbarLink as={Link} href="#" className='flex items-center gap-2'>
                    <HiUser/> INICIO SESIÓN
                </NavbarLink>
                <NavbarLink as={Link} href="#" className='flex items-center gap-2'>
                    <HiCube/> MIS PEDIDOS
                </NavbarLink>
                <NavbarLink href="#" className='flex items-center gap-2'>
                    <HiShoppingCart/> CARRITO
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
        <Navbar fluid rounded className='w-11/12 m-auto flex'>
        <NavbarCollapse >
                <NavbarLink as={Link} href="#" className='flex items-center gap-2'>
                    <HiMenu/> Catalogo
                </NavbarLink>
                <NavbarLink as={Link} href="#" className='flex items-center gap-2'>
                    <HiOutlineTicket/> Ofertas
                </NavbarLink>
                <NavbarLink href="#" className='flex items-center gap-2'>
                    <HiOutlineBadgeCheck/> Marcas
                </NavbarLink>
                <NavbarLink href="#" className='flex items-center gap-2'>
                    <HiOutlinePhone/> Contáctenos
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    </>
  )
}
