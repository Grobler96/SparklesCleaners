import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ServicePage from '@/pages/ServicePage';
import Contact from '@/pages/Contact';
import { Privacy, Terms } from '@/pages/Legal';
import ThankYou from '@/pages/ThankYou';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/domestic" element={<ServicePage />} />
          <Route path="/commercial" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
