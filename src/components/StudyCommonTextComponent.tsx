import React from 'react';


interface StudyCommonTextComponentProps {
  title: string;
  text: string;
  bgColor?: string; 
}

export const StudyCommonTextComponent: React.FC<StudyCommonTextComponentProps> = ({ title, text, bgColor = 'bg-green-500' }) => {
  return (
    <div className={`${bgColor} text-white py-6 px-2 md:px-18   text-center rounded-3xl mb-8`}>
      <h3 className="md:text-5xl text-3xl  font-extrabold mb-2">{title}</h3>
      <p className='tracking-wider md:text-xl text-sm font-semibold'>{text}</p>
    </div>
  );
};
