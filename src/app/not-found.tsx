import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-semibold text-trionfo-primary mb-4">404</h1>
        <p className="text-lg text-trionfo-secondary mb-8">
          Page not found. The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-trionfo-primary text-white px-6 py-3 rounded font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
