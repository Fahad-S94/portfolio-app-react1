import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateContactForm } from '../utils/ValidateContactForm';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const values = {};
    formData.forEach((value, key) => {
      values[key] = value;
    });

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with sending the email
      emailjs
        .sendForm(
          'service_bmto04n',
          'template_6dw0h4y',
          form.current,
          '3cqm5NGqQyRqy1MMc'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - f.shoaib1580@gmail.com
          </p>
        </div>
        <label className="text-gray-300 text-xl pb-1">Name</label>
        <input className="bg-[#ccd6f6] p-2" type="text" name="user_name" />
        {errors.user_name && <p className="text-red-500">{errors.user_name}</p>}
        <label className="text-gray-300 text-xl pt-2">Email</label>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          name="user_email"
        />
        {errors.user_email && (
          <p className="text-red-500">{errors.user_email}</p>
        )}
        <label className="text-gray-300 text-xl pb-1">Message</label>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
