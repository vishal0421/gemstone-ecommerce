import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-16 text-center lg:px-8">
      <div className="glass-card max-w-2xl rounded-[3rem] border border-white/10 bg-white/5 p-14 shadow-glass">
        <p className="text-sm uppercase tracking-[0.35em] text-white/50">Page not found</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">404</h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          The gemstone path you tried to follow doesn’t exist. Return to the boutique and continue exploring premium pieces.
        </p>
        <Link to="/" className="mt-10 inline-flex rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-white transition hover:bg-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
