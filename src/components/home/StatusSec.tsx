import Image from "next/image";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface StatsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  showButton?: boolean;
  buttonText?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  subtitle,
  description,
  stats,
  showButton = false,
  buttonText = "Contact Us",
}) => {
  return (
    <section className="py-8   ">
      <div className="container bg-[#32B22E] relative  p-4 rounded-4xl m-auto">
        <div
          className="absolute bg-cover inset-0 z-0"
          style={{
            backgroundImage: "url('/images/image 5.png')",
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="md:flex grid z-10 gap-18 relative justify-between items-center md:p-10 p-2 text-white">
          <div className="md:w-1/2 w-full space-y-4">
            <p>{subtitle}</p>
            <h2 className="md:text-5xl text-3xl font-extrabold">{title}</h2>
            <p className="text-lg">{description}</p>

            {showButton && (
              <Button className="my-3 w-full bg-black text-white  rounded-full text-lg font-semibold">
                <Phone /> {buttonText}
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border rounded-2xl p-4 flex items-center"
              >
                <div className="bg-white rounded-full p-3 mr-3">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3 className="text-6xl font-extrabold">{stat.value}</h3>
                  <p className="text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
