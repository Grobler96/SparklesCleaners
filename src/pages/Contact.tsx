import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/config/site';
import { useSEO } from '@/lib/useSEO';

const options = ['Regular home clean', 'Deep clean', 'End of tenancy', 'Office / commercial'];

export default function Contact() {
  useSEO();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle');
  const preset = params.get('service');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (data.website) return; // honeypot: real people never fill this in
    if (!site.formEndpoint) {
      const body = `Name: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\n\n${data.message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Quote request: ${data.service}`)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setState('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Quote request: ${data.service}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      navigate('/thank-you');
    } catch {
      setState('error');
    }
  }

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-teal sm:text-sm">Get a quote</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-5xl">Tell us about your space.</h1>
          <p className="mt-4 max-w-md text-lg text-ink/70">We will reply within one working day with a price and the next available slot.</p>
          <ul className="mt-8 grid gap-4 font-medium">
            <li><a href={site.phoneHref} className="inline-flex items-center gap-3 hover:text-teal"><span className="grid h-10 w-10 place-items-center rounded-full bg-foam text-teal"><Phone size={18} /></span>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all hover:text-teal"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foam text-teal"><Mail size={18} /></span>{site.email}</a></li>
            <li className="inline-flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-foam text-teal"><MapPin size={18} /></span>{site.area}</li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-sky/60 bg-white p-6 shadow-soft sm:p-8">
            <label className="grid gap-1.5 font-display text-sm font-semibold">Name
              <input className="field font-body font-normal" name="name" type="text" autoComplete="name" required />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 font-display text-sm font-semibold">Email
                <input className="field font-body font-normal" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="grid gap-1.5 font-display text-sm font-semibold">Phone <span className="font-body font-normal text-ink/50">(optional)</span>
                <input className="field font-body font-normal" name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label className="grid gap-1.5 font-display text-sm font-semibold">What do you need cleaned?
              <select className="field font-body font-normal" name="service" defaultValue={preset && options.includes(preset) ? preset : options[0]}>
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 font-display text-sm font-semibold">Anything we should know?
              <textarea className="field font-body font-normal" name="message" rows={4} />
            </label>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <button type="submit" disabled={state === 'sending'} className="btn btn-primary mt-1">{state === 'sending' ? 'Sending…' : 'Request my quote'}</button>
            {state === 'error' && <p role="alert" className="text-sm font-medium text-red-600">Sorry, that did not send. Please call {site.phone} or email {site.email}.</p>}
            {!site.formEndpoint && <p className="text-sm text-ink/60">This opens your email app with your details filled in.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
