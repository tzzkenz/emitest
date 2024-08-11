import CallToAction from "../components/landing-page/CallToAction";
import Header from "../components/landing-page/Header";
import Hero from "../components/landing-page/Hero";
import TrustedPartners from "../components/landing-page/TrustedPartners";
import UserReviews from "../components/landing-page/UserReviews";
import WhyUs from "../components/landing-page/WhyUs";
import Footer from "../components/landing-page/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <main className="text-emigrate-blue">
        <Hero />
        <TrustedPartners />
        <UserReviews />
        <CallToAction />
        <WhyUs />
        <Footer />
      </main>
    </div>
  );
}

export default LandingPage;
