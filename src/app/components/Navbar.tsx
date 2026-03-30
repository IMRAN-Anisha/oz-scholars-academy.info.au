import logo from 'figma:asset/d7576a8e901422a82214d0261d61e2d721fb2903.png';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm px-6 py-3">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border-2 border-[#FFD700]">
            <img src={logo} alt="Oz Scholars Academy" className="h-full w-full object-cover" />
          </div>
          
          {/* Brand Name */}
          <span className="text-lg font-bold text-black">Oz Scholars Academy</span>
        </div>
      </div>
    </nav>
  );
}
