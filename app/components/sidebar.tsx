/* eslint-disable @typescript-eslint/no-explicit-any */
// Sidebar.tsx
import React, { useState, type JSX } from 'react'
import { Link } from 'react-router'
import routes from '@/routes'

interface OpenMenus {
  [routeId: string]: boolean
}

function Sidebar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openMenus, setOpenMenus] = useState<OpenMenus>({})

  const toggleSidebar = (): void => {
    setIsOpen((prev) => !prev)
  }

  const toggleMenu = (routeId: string): void => {
    setOpenMenus((prev) => ({
      ...prev,
      [routeId]: !prev[routeId],
    }))
  }

  const renderMenu = (routes: any, level: number = 0): JSX.Element => {
    const marginLeft = `${level * 1}rem`
    return (
      <ul style={{ marginLeft }}>
        {routes.map((route: any) => (
          <li key={route.id} className="mb-2">
            <div className="flex justify-between items-center ">
              {!route.nested ? (
                <Link to={route.path ?? '/'} className="block p-2 text-white  hover:bg-gray-600 font-press text-xs">
                  <span>{route.handle?.label || route.path?.replace('/', '') || 'Home'}</span>
                </Link>
              ) : (
                <span onClick={() => toggleMenu(route.id!)} className="block p-2 text-white font-press text-sm ">
                  {route.handle?.label || route.path?.replace('/', '') || 'Home'}
                </span>
              )}
              {route.children && route.children.length > 0 && (
                <button
                  onClick={() => toggleMenu(route.id!)}
                  className="text-white focus:outline-none "
                  aria-label={openMenus[route.id!] ? 'Collapse submenu' : 'Expand submenu'}
                >
                  {openMenus[route.id!] ? '-' : '+'}
                </button>
              )}
            </div>
            {route.children && openMenus[route.id!] && renderMenu(route.children, level + 1)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed z-10 top-4 left-12 p-2 bg-gray-300 text-gray-800 rounded md:hidden ${
          isOpen ? 'transform translate-x-full' : 'transform translate-x-0'
        }`}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold"></h2>
          <nav>{renderMenu(routes)}</nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
