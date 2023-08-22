import Layout from './layout';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-semibold text-lg">
            My asdasd
          </a>
          <div className="space-x-4">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/about" className="text-white">
              About
            </a>
            <a href="/contact" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* ... your existing content here ... */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-white">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
