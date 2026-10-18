import type { ReactNode } from 'react';
import { site } from '@/config/site';
import { useSEO } from '@/lib/useSEO';

function Page({ title, children }: { title: string; children: ReactNode }) {
  useSEO();
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <article className="mx-auto max-w-3xl [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-ink/80 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_ul]:text-ink/80">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {children}
      </article>
    </section>
  );
}

export function Privacy() {
  return (
    <Page title="Privacy policy">
      <p>This page explains what {site.name} does with the details you send us.</p>
      <h2>What we collect</h2>
      <p>Only what you type into the quote form or send us by email or phone: your name, email address, optional phone number, the service you are interested in and any message.</p>
      <h2>How we use it</h2>
      <p>To reply to your enquiry, give you a price and arrange a clean. We do not sell your details or use them for anything unrelated.</p>
      <h2>Cookies and tracking</h2>
      <p>This website does not set cookies or use analytics or advertising trackers.</p>
      <h2>Who sees it</h2>
      <ul>
        <li>The {site.name} team.</li>
        <li>The form or email provider that delivers your message to us.</li>
      </ul>
      <h2>Your rights</h2>
      <p>You can ask to see, correct or delete the details we hold about you at any time by emailing <a className="font-semibold text-teal underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </Page>
  );
}

export function Terms() {
  return (
    <Page title="Terms">
      <p>These terms cover use of this website and quote requests made through it.</p>
      <h2>Quotes</h2>
      <p>Prices shown on this website are a guide. We confirm a final price once we know the size and condition of your space and how often you would like us to visit.</p>
      <h2>Our guarantee</h2>
      <p>If something is missed during a clean, tell us and we will put it right at no charge.</p>
      <h2>Website content</h2>
      <p>The content of this website is provided for information. We do our best to keep it accurate and up to date.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Email <a className="font-semibold text-teal underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </Page>
  );
}
