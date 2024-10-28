import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, BarChart2, Megaphone, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Campaigns", href: "/campaigns", icon: Megaphone },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
  ]

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Inn-Sight</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  location.pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hotel name (when logged in) */}
          {isLoggedIn && (
            <div className="hidden sm:flex sm:items-center">
              <span className="text-lg font-semibold text-gray-700">Welcome, Luxury Inn !</span>
            </div>
          )}

          <div className="hidden sm:flex sm:items-center">
            <Button onClick={toggleLogin} variant="outline">
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isLoggedIn && (
              <div className="flex items-center px-4 mb-3">
                <div className="text-base font-medium text-gray-800">Luxury Inn</div>
              </div>
            )}
            <div className="px-2">
              <Button onClick={toggleLogin} variant="outline" className="w-full justify-center">
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}