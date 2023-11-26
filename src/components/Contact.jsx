// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
//         <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-violet-600 text-gray-300'>Contact</p>
//                 <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - f.shoaib1580@gmail.com</p>
//             </div>
//             <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
//             <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
//             <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
//         </form>
//     </div>
//   )
// }

// export default Contact

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/ValidateContactForm';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mvojjzjd');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateContactForm}
      >
        <Form className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-violet-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or shoot me an email -
              f.shoaib1580@gmail.com
            </p>
          </div>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#ccd6f6] p-2"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-[#ccd6f6]"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          <Field
            as="textarea"
            name="message"
            rows="10"
            placeholder="Message"
            className="bg-[#ccd6f6] p-2"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500"
          />

          <button
            type="submit"
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          >
            Let's Collaborate
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
