import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingBar />
        <About />
        <Rooms />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
