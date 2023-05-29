import Image from "next/image";
import HomeHeader from "@/components/headers/home-header";
import Navibar from "@/components/layout/navbar";
import FAQ from "@/components/faq/faq";
import Contact from "@/components/forms/contact-form";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navibar />
      <div className="mx-24">
        <HomeHeader />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
