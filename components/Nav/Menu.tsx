import { Menu as TailMenu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const options = [
  {
    to: '/profile',
    name: 'Profile',
  },
  {
    to: '/manage-profiles',
    name: 'Mange Profile',
  },
]

function Menu() {
  const router = useRouter()
  const loc = router.asPath
  return (
    <TailMenu as="div" className="ml-3 relative">
      {({ open }: { open: boolean }) => (
        <>
          <div>
            <TailMenu.Button className="bg-gray-800 flex text-sm rounded-full">
              <span className="sr-only">open user menu</span>
                <img
                  className='h-10 w-10 rounded-md'
                  src="https://occ-0-1390-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"
                  alt="user profile"
                />
            </TailMenu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <TailMenu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {options.map((o) => {
                return (
                  <TailMenu.Item key={o.name}>
                    {({ active }: { active: boolean }) => (
                      <Link href={o.to}>
                        <span
                          className={classNames(
                            active || loc.includes(o.to)
                              ? 'bg-brand-color text-white'
                              : '',
                            'block px-4 py-2 text-md text-black opacity-90',
                          )}
                        >
                          {o.name}
                        </span>
                      </Link>
                    )}
                  </TailMenu.Item>
                )
              })}
            </TailMenu.Items>
          </Transition>
        </>
      )}
    </TailMenu>
  )
}

export default Menu
