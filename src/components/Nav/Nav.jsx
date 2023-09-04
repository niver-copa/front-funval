'use client';

import { Dropdown, Navbar } from 'flowbite-react';

export default function Nav() {
  return (
    <nav className="z-10 top-0 fixed w-screen bg-blue-950 max-w-screen flex flex-wrap items-center justify-between text-white h-20 py-0 px-6" >
      <div className="flex gap-2 items-center h-full font-medium ">
      <Navbar.Brand href="/" className="flex items-center ">
      <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>

      <div className="flex h-20 p-4 items-center text-white   hover:bg-blue-900">
        <Dropdown inline  label={"Mantenimientos "} className="flex h-20 p-4 items-center">
            Dashboard
            Settings
            Earnings
          <Dropdown.Divider />
            Sign out
        </Dropdown>
        </div>
       <ul className='flex h-full items-center'>
        <Navbar.Link  href="/cardealer" className="flex h-20 p-4 items-center text-white   hover:bg-blue-900">
          Listado
        </Navbar.Link>
        <Navbar.Link  href="/clientes" className="flex h-20 p-4 items-center  text-white   hover:bg-blue-900">
          Clientes
        </Navbar.Link>
        <Navbar.Link  href="/registro" className="flex h-20 p-4 items-center text-white  hover:bg-blue-900">
          Vehiculos
        </Navbar.Link>
    </ul>
</div>
 <div className="me-4">

     
        <img
          className="h-14 rounded-full border border-black"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          alt="user"
        />
         </div>
     
   
     
 
    </nav>
  )
}


