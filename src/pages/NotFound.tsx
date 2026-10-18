import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';

export default function NotFound() {
  useSEO(true);
  return (
    <section className="px-4 py-24 text-center sm:px-6">
      <p className="font-display text-7xl font-extrabold shine-text-dark sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">That page has been swept away.</h1>
      <p className="mx-auto mt-3 max-w-md text-ink/70">It does not exist, but a spotless home or office is one click away.</p>
      <Link to="/" className="btn btn-primary mt-8">Back to the home page</Link>
    </section>
  );
}
