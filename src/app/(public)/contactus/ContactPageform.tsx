import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactFormFields } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const ContactPageform = () => {
  return (
    <div className=" md:container w-full  mx-auto py-8 md:px-3 grid px-2 md:grid-cols-2 grid-cols-1 gap-8">

    <div className="">
        <Image width={600} height={300}  src="/images/contact.svg" alt="" className="" />
    </div>
  
    <div className="w-full">
    <h2 className="text-5xl md:block hidden font-extrabold mb-6 leading-14">
    We’re Just a Message Away
        </h2>
    <form  className="space-y-4 space-x-4 bg-[#F1F5EB] md:p-6 p-2  rounded-4xl">
    <h2 className="text-2xl md:hidden block font-extrabold py-3 md:leading-14 text-center">
    We’re Just a Message Away
        </h2>
                 <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                   {contactFormFields.slice(0, 2).map((field) => (
                     <div key={field.id}>
                       <label
                         htmlFor={field.id}
                         className="block text-base font-medium mb-2 pl-3"
                       >
                         {field.label}
                       </label>
                       <Input
                         className="rounded-full h-15 bg-white"
                         id={field.id}
                         name={field.id}
                         placeholder={field.placeholder}
                      
                         required={field.required}
                       />
                     </div>
                   ))}
                 </div>
   
                 <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                   {contactFormFields.slice(2, 4).map((field) => (
                     <div key={field.id}>
                       <label
                         htmlFor={field.id}
                         className="block text-base font-medium mb-2 pl-3"
                       >
                         {field.label}
                       </label>
                       <Input
                         className="rounded-full h-15 bg-white"
                         id={field.id}
                         name={field.id}
                         type={field.type || "text"}
                         placeholder={field.placeholder}
                      
                         required={field.required}
                       />
                     </div>
                   ))}
                 </div>
   
                 {contactFormFields.slice(4).map((field) => (
                   <div key={field.id}>
                     <label
                       htmlFor={field.id}
                       className="block text-base font-medium mb-2 pl-3"
                     >
                       {field.label}
                     </label>
                     {field.type === "textarea" ? (
                       <Textarea
                         className="rounded-[43px] bg-white h-36 p-6"
                         id={field.id}
                         name={field.id}
                         rows={field.rows}
                         placeholder={field.placeholder}
                      
                         required={field.required}
                       />
                     ) : (
                       <Input
                         className="rounded-full h-15 bg-white"
                         id={field.id}
                         name={field.id}
                         placeholder={field.placeholder}
                      
                         required={field.required}
                       />
                     )}
                   </div>
                 ))}
   
                 <Button
                   type="submit"
                   className="bg-[#32B22E]  rounded-full text-lg font-bold h-15 w-full"
                 >
                   Submit
                 </Button>
               </form>
      </div>

  </div>
  )
}

export default ContactPageform