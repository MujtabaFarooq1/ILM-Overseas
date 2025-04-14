"use client";
import Image from "next/image";
import { StudyCommonTextComponent } from "../StudyCommonTextComponent";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import { studyTabs } from "@/lib/data";

const StudyAustralia = () => {
  const [currentTab, setCurrentTab] = useState(studyTabs[0]);

  useEffect(() => {
    setCurrentTab(studyTabs[0]);
  }, [studyTabs]);

  const handleClick = (item: any) => {
    setCurrentTab(item);
  };

  return (
    <section className="py-16 container mx-auto px-4 bg-white">
      <div className=" ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-2/3">
            <h2 className="text-5xl font-bold mb-4">Study In Australia</h2>
            <p className="text-gray-700 text-justify">
              Studying in Australia is a top choice for international students
              due to its world-class education system, innovative teaching, and
              high quality of life. With a diverse range of courses, excellent
              facilities, and a welcoming atmosphere, Australia attracts over
              400,000 international students annually. The country's strong
              emphasis on research, practical learning, and industry connections
              make it an ideal destination for those seeking a rewarding
              educational experience. Students also benefit from generous work
              rights, internship opportunities, and post-study work options.
              Additionally, further education pathways are readily available for
              career advancement.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center items-start">
            <Image
              src="/images/australiastudy.png"
              alt="Australian Flag"
              width={300}
              height={356}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Green Banner */}
        <StudyCommonTextComponent
          title="Why Study In Australia?"
          text="Australia offers a world-class education system with globally recognized qualifications. Students can obtain a multicultural environment and abundant opportunities for personal and professional growth. Australian universities are known for their innovative research and commitment to excellence in education."
          bgColor="bg-[#32B22E]"
        />

        {/* Benefits Section */}

        <Tabs defaultValue={currentTab.value} className="">
          <TabsList className="md:flex grid justify-center bg-transparent m-auto overflow-x-hidden h-12">
            {studyTabs?.map((item) => (
              <TabsTrigger
                value={item.value}
                className="data-[state=active]:text-green-600 data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-green-400 border-0 rounded-none text-xl data-[state=active]:shadow-none w-full md:w-auto"
                onClick={() => handleClick(item)}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent className="" value={currentTab.value}>
            <div className=" text-justify ">
              <p className="my-5">
                Australia offers a top-quality education, an active lifestyle,
                and a richness of cultures, making it a great place to study.
                Here are the key things to know about studying in Australia:
              </p>

              <div className="space-y-4">
                {currentTab?.description.map((benefit, index) => (
                  <table key={index} className="space-y-8">
                    <tbody className="">  
                    <tr key={index} className="md:flex gap-2 md:my-3 grid items-start tracking-wide">
        <td className=" text-left whitespace-nowrap  font-semibold">{benefit.title}</td>
        <td className=" w-auto">{benefit.description}</td>
      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StudyAustralia;
