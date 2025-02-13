import Cta from "@/components/root/home/cta"
import Faq from "@/components/root/home/faq"
import Hero from "@/components/root/home/hero"
import Product from "@/components/root/home/product"
import Testimonials from "@/components/root/home/testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  )
}

export default Home