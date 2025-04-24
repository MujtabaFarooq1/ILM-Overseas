import Image from "next/image";

const ConsultantSection = () => {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="container  mx-auto ">
        <div className="md:flex grid justify-between w-full  items-center">
          {/* Left Content */}
          <div className="space-y-4 w-11/12">
            <h2 className="md:text-5xl text-2xl font-extrabold leading-tight">
              Best Study Abroad <br />
              Consultant in Lahore, <br />
              Pakistan - ILM OVERSEAS
            </h2>

            <p className="md:text-lg text-sm">
              We are here to help Pakistani students become a great part of
              famous schools around the world. We want to create a friendly and
              supporting space for students who are excited to study in a new
              countries. To make this happen, we have partnered with lots of
              well-known schools globally to help our students achieve their
              dreams and be their best!
            </p>
          </div>

          <div className="relative  flex items-center justify-center">
            <div className="md:h-140 md:w-128  ">
              <Image
                src="/images/consul.jpeg"
                alt="World map with location markers"
                width={350}
                height={300}
                objectFit="cover"
                className="h-full md:w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantSection;
