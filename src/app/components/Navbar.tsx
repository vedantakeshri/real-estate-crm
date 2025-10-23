



// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="bg-white border-b shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-blue-600">
//           🏘️ RealEstateCRM
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
//           <Link href="/features" className="hover:text-blue-600">Features</Link>
//           <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
//           <Link href="/contact" className="hover:text-blue-600">Contact</Link>

//           <Link
//             href="/login"
//             className="text-gray-700 hover:text-blue-600"
//           >
//             Log in
//           </Link>

//           <Link
//             href="/signup"
//             className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Sign up
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-600 text-xl"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 text-sm text-gray-700">
//           <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
//           <Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
//           <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
//           <Link href="/login" onClick={() => setIsOpen(false)}>Log in</Link>
//           <Link
//             href="/signup"
//             className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             onClick={() => setIsOpen(false)}
//           >
//             Sign up
//           </Link>
//         </div>
//       )}
//     </header>
//   )
// }















'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('users') // or 'user' depending on your key
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('users') // remove login token or credentials
    setIsLoggedIn(false)
    setIsOpen(false)
  }

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          🏘️ RealEstateCRM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="/features" className="hover:text-blue-600">Features</Link>
          <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Log in
              </Link>
              <Link
                href="/signup"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 text-sm text-gray-700">
          <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-fit px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>Log in</Link>
              <Link
                href="/signup"
                className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}
