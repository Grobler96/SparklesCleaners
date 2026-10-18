import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';

export default function ThankYou() {
  useSEO();
  return (
    <section className="px-4 py-24 text-center sm:px-6">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sun text-ink shadow-sun"><Sparkles size={30} /></span>
      <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Thank you!</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink/70">Your request is in. We will reply within one working day with a price and the next available slot.</p>
      <Link to="/" className="btn btn-primary mt-8">Back to the home page</Link>
    </section>
  );
}
