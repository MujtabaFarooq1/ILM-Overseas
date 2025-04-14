import React from "react";

interface IeltsComponentProps {
  title: string;
  description: string;
}

export const IeltsComponent: React.FC<IeltsComponentProps> = ({ title }) => {
  return (
    <div className="bg-white text-black p-8 container m-auto">
      <h2 className="md:text-5xl text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg  tracking-wider text-justify mb-4">
        The{" "}
        <strong> International English Language Testing System (IELTS) </strong>
        is one of the most widely recognized English proficiency tests globally.
        Whether you’re looking to study, work, or migrate abroad, especially to
        countries like the{" "}
        <strong> UK, USA, CANADA, AUSTRALIA, or MALAYSIA,</strong> IELTS is
        often a mandatory requirement. It assesses your ability to communicate
        effectively in English across four key areas:{" "}
        <strong> Listening, Reading, Writing </strong>, and{" "}
        <strong> Speaking</strong>.
      </p>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Why IELTS?</h3>
        <p>
          The International English Language Testing System (IELTS) is one of
          the most widely recognized English proficiency tests globally. Whether
          you’re looking to study, work, or migrate abroad, especially to
          countries like the UK, USA, CANADA, AUSTRALIA, or MALAYSIA, IELTS is
          often a mandatory requirement. It assesses your ability to communicate
          effectively in English across four key areas: Listening, Reading,
          Writing, and Speaking.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Global Recognition</h3>
        <p>
          IELTS is accepted by over 10,000 institutions, universities,
          employers, and governments worldwide. It is considered the gold
          standard for measuring your English language skills, ensuring you can
          thrive in an English-speaking environment.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Test Versions</h3>
        <p>IELTS offers two versions based on your needs:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>IELTS Academic:</strong> For those looking to pursue higher
            education or professional registration.
          </li>
          <li>
            <strong>IELTS General Training:</strong> Suitable for migration and
            employment purposes.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Band Scores</h3>
        <p>
          IELTS scores range from 1 to 9, with each band reflecting a specific
          level of English proficiency. Different institutions and countries may
          have specific band requirements depending on the nature of the program
          or visa.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Test Structure</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Listening:</strong> 30 minutes of audio-based tests to
            evaluate your ability to understand spoken English.
          </li>
          <li>
            <strong>Reading:</strong> 60 minutes to assess your comprehension of
            various texts, including essays, articles, and everyday material.
          </li>
          <li>
            <strong>Writing:</strong> 60 minutes to demonstrate your written
            communication skills, including essay writing and report or letter
            writing.
          </li>
          <li>
            <strong>Speaking:</strong> 11-14 minutes of face-to-face
            conversation with an examiner, testing your fluency, pronunciation,
            and ability to express ideas clearly.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Flexible and Accessible</h3>
        <p>
          IELTS is available at over 1,600 test centers worldwide, with multiple
          test dates each year. Plus, with the option for computer-based tests,
          results can be delivered in as little as 5-7 days.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Preparation for Success</h3>
        <p>
          At LM Overseas, we provide tailored support and resources to help you
          prepare for your IELTS test. From practice tests to one-on-one
          coaching, we ensure you are fully prepared to tackle the exam and
          pursue your desired global opportunities.
        </p>
      </div>
    </div>
  );
};
