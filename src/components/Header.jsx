

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 shadow-lg bg-gray-900 ">
      <h1 className="text-2xl font-bold text-white">GMUN</h1>
      <nav className="space-x-4 text-gray-400 ">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#events" className="hover:text-white">Events</a>
        <a href="#testimonials" className="hover:text-white">Testimonials</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
    </header>
  )
}
