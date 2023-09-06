import Nav from '../components/Nav';
import { Hero, About, Price, ContactUs, Footer } from '../sections';

const Home = () => (
  <main className="relative">
    <Nav />
    <section id="home" className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section id="about-us" className="padding">
      <About />
    </section>
    <section id="price" className="padding bg-pale-blue">
      <Price />
    </section>
    <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
      <ContactUs />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default Home;
