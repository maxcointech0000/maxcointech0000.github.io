import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import Portfolio from '@/react-app/components/Portfolio';
import About from '@/react-app/components/About';
import Workflow from '@/react-app/components/Workflow';
import Testimonials from '@/react-app/components/Testimonials';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <Workflow />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
