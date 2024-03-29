import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="p-6 font-semibold">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between text-center ">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-2 md:mb-4 ">Contact Us</h2>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-2 md:mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 "
            >
              Twitter
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-indigo-300 flex items-center gap-2"
            >
              Facebook
              <BsFacebook />
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-300 flex items-center gap-2 "
            >
              Instagram
              <BsInstagram />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 md:mt-4 mb-2 md:mb-4">
            &copy; {new Date().getFullYear()} E-SHOP. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
