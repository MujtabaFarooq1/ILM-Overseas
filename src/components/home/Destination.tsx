import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const DestinationSection = () => {
  return (
    <section className="py-16  px-4 bg-[#F1F5EB]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="md:text-5xl text-2xl font-extrabold leading-tight">
              Choose Your Next Study <br /> Abroad Destination
            </h2>

            <p className="text-sm tracking-wider">
              We warmly invite you to explore our top study abroad destinations, where we proudly send students to
              discover global frontiers and leaders who make a meaningful impact on the world.
            </p>

            <p className="text-sm tracking-wider">
            Benefit from our and expert consultation services as we guide you through every step of the journey, from selecting the perfect destination to recommending accredited institutions and offering in-depth insights into diverse cultural experiences.
            </p>

            <p className="text-sm tracking-wider">
            We help you choose the highest quality education options at affordable tuition rates, ensuring that your study abroad experience is not only academically enriching but also personally transformative.
            </p>

            <p className="text-sm tracking-wider">
            Our personalized approach guarantees that you will find the right academic fit, build a global network, and embark on a journey that will significantly enhance your career prospects and personal growth for years to come.
            </p>

            <Button className="bg-[#32B22E] h-[53px] text-lg  text-white rounded-full md:w-1/2 w-full  mt-2">
              <Phone className="mr-2 h-5 w-5" /> Call Us
            </Button>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative  flex items-center justify-center">
            <div className="relative ">
              {/* Circle background with dotted border */}
              <div className="absolute top-30 left-0 z-20 right-0 transform rotate-160 -translate-y-1/2">
                <Image src="/images/bagcircle.png" alt="Circular background" width={500} height={500} className="w-140" />
              </div>

              {/* Main bag/travel illustration */}
              <div className="relative bg-[#deeed8]  rounded-full z-10">
                <Image src="/images/bagimg.png" alt="Study abroad illustration" width={500} height={500} className="translate-y-10 md:h-130 h-92  md:w-130 w-90 scale-105 object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationSection
