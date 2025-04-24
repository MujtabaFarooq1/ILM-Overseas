import ApplicationProcess from "@/components/home/ApplicationProc";
import ConsultantSection from "@/components/home/Consultant";
import ContactAboutSection from "@/components/home/ContactForm";
import DestinationSection from "@/components/home/Destination";
import HomeBanner from "@/components/home/HomeBanner";
import { HomeContectText } from "@/components/home/HomeContectText";
import { ReviewsSection } from "@/components/home/Reviews";
import ServicesSection from "@/components/home/Servicecomp";
import StatsSection from "@/components/home/StatusSec";
import { services } from "@/lib/data";

export default function Home() {
  const statsData = [
    {
      icon: "/images/Frame1.png",
      value: "50K+",
      label: "Visa Queries",
    },
    {
      icon: "/images/Frame1.png",
      value: "10+",
      label: "Team Members",
    },
    {
      icon: "/images/Frame1.png",
      value: "95%",
      label: "Admissions",
    },
    {
      icon: "/images/Frame1.png",
      value: "99%",
      label: "Success Score",
    },
  ];

  return (
    <>
      <div className="overflow-hidden">
        <HomeBanner />
        <ServicesSection
          title="Services We Offer"
          subtitle="Our Services"
          services={services}
        />
        <DestinationSection />
        <ApplicationProcess />
        <ConsultantSection />
        <StatsSection
          title="Experiencing Traditions and Customs"
          subtitle="Success Story"
          description="Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standardever"
          stats={statsData}
          showButton={false}
        />
        <ReviewsSection />
        <section className="py-12 md:px-4 p-3 bg-[#F1F5EB]">
            <div className="md:flex-row flex-col-reverse md:container w-full mx-auto md:px-3 flex  justify-between gap-8">
              <ContactAboutSection />
              <HomeContectText />
          </div>
        </section>
      </div>
    </>
  );
}
