import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FaqsProps{
  title: string;

  }
  export const FAQSection:React.FC<FaqsProps> = ({title}) => {
    const faqs = [
      {
        question: "What documents are required for a study visa application?",
        answer:
          "The required documents typically include a passport, university admission letter, financial proof, and health insurance.",
      },
      {
        question: "How can ILM OVERSEAS help with my study visa application?",
        answer:
          "We offer personalized guidance, ensuring your application stands out and meets all necessary requirements.",
      },
      {
        question: "How long does the study visa process take?",
        answer:
          "The process can take anywhere from 4 to 12 weeks depending on the country and your specific case.",
      },
      {
        question: "Can ILM OVERSEAS assist with study visas for multiple countries?",
        answer:
          "Yes, we help with study visas for a variety of countries, ensuring you choose the best fit for your needs.",
      },
      {
        question: "What should I include in my Statement of Purpose (SOP)?",
        answer:
          "Your SOP should highlight your academic goals, why you chose the program, and how it aligns with your future career.",
      },
      {
        question: "Do I need to take a language proficiency test?",
        answer:
          "It depends on the country and program you're applying to. Many universities require tests like IELTS or TOEFL.",
      },
    ];
  
    return (
      <div className="container m-auto mb-10 px-4 py-8 bg-white ">
        <h2 className="md: text-[40px] text-3xl font-extrabold mb-6 text-center">{title}</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-4 text-lg   font-semibold text-left">
                {faq.question}
                
              </AccordionTrigger>
              <AccordionContent className="py-2 text-gray-700  text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };
  