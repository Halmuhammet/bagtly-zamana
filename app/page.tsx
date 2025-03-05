import ProductList from "@/components/ProductList"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FullScreenVideo from "@/components/FullScreenVideo"
import PageBreaker from "@/components/PageBreaker"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <FullScreenVideo />      
        <PageBreaker />
        <div className="px-4 pb-16">
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  )
};