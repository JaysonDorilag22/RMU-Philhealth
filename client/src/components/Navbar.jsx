import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Members', href: '#members' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Services', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'Contact', href: '#contact' },
    { name: 'Announcement', href: '#announcement'}
  ]

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    setIsMenuOpen(false) // Close mobile menu if open
    
    if (href === '#home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Scroll to specific section
      const targetElement = document.querySelector(href)
      if (targetElement) {
        const navbarHeight = 64 // Height of the navbar (h-16 = 64px)
        const targetPosition = targetElement.offsetTop - navbarHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo/philhealth.svg" 
              alt="PhilHealth Logo" 
              className="h-32 w-auto"
            />
            <img 
              src="/logo/bp.svg" 
              alt="BP Logo" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-[#027b40] hover:text-[#025f33] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#027b40] hover:text-[#025f33] inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#027b40] transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative">
                <Menu 
                  className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
                />
                <X 
                  className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth slide animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-[#027b40] hover:text-[#025f33] block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform cursor-pointer ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar