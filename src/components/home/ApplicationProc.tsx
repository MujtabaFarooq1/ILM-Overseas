import Image from "next/image";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: "/images/image 1.png",
      title: "Meet Requirements",
    },
    {
      icon: "/images/image 2.png",
      title: "University Selection",
    },
    {
      icon: "/images/image 3.png",
      title: "Apply to University",
    },
    {
      icon: "/images/image 4.png",
      title: "Visa Granted",
    },
  ];

  return (
    <section className="py-12 px-8  relative overflow-hidden bg-[#034833] bg-cover">
      <div
        className="absolute inset-0 opacity-5 bg-green-900 z-0"
        style={{
          backgroundImage: "url('/images/sahpebg.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="max-w-6xl mx-auto z-10 relative  ">
        <h2 className="md:text-5xl text-2xl font-extrabold text-white text-center mb-12">
          Application Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex  flex-col items-center">
              <div className="bg-[#32B22E] rounded-full p-6 w-42 h-42 flex items-center justify-center mb-4">
                <Image width={300} height={300} src={step.icon} alt="" />
              </div>
              <p className="text-white text-2xl font-extrabold text-center">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
