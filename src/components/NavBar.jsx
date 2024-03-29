import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="">Farouk BEL KHYATE</span>
        
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          <a href="#" className="text-lg font-sm-bold leading-6 text-gray-900 hover:text-sea-blue">
            home
          </a>
          <a href="#" className="text-lg font-sm-bold leading-6 text-gray-900 hover:text-sea-blue">
            about
          </a>
          <a href="#" className="text-lg font-sm-bold leading-6 text-gray-900 hover:text-sea-blue">
            work
          </a>
          <a href="#" className="text-lg font-sm-bold leading-6 text-gray-900 hover:text-sea-blue">
            contacts
          </a>
        </Popover.Group>
       
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Farouk BEL KHYATE</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-6 text-gray-900 hover:text-sea-blue">
            home
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-6 text-gray-900 hover:text-sea-blue">
            about
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-6 text-gray-900 hover:text-sea-blue">
            work
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-6 text-gray-900 hover:text-sea-blue">
            contacts
          </a>
              
              </div>
             
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}