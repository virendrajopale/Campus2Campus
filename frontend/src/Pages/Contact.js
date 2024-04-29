import React from "react";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-full text-white font-sand">
      <div className="flex flex-col p-4 justify-center mx-auto h-full">
        <div className=" pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400  cursor-pointer">Contact TPO</p>
          <p className="Capitalize py-6">Have Any Query? Ask TPO</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/fdbd91f2-7997-4043-b1ef-91ce2de42e8c" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              className=" p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="my-3 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />

            <textarea name="message" placeholder="Enter Your Message" rows="10" className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"></textarea>
            <button   
                  type="submit" className=" text-white col-span-2 relative inline-flex bg-gray-500/90 hover:bg-green-600/100 items-center justify-center p-2 
                  w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group">
                  <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <MdMailOutline/>
                  </span>
                  <span className="absolute   flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Send 
                  </span>
                  <span className="relative invisible">Send</span>
                </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;