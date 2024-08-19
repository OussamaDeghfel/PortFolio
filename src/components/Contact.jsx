import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center py-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/354afdb4-c10f-44d7-9936-66955875a94a"
        className="flex flex-col w-[980px] "
      >
        <div className="py-5 ">
          <p className="text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below Or Send direct email
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-300 rounded-md hover:border-blue-300 hover:text-[#0a192f] hover:font-bold px-8 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
