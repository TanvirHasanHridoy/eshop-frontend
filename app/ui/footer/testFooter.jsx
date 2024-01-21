import React from "react";

const Footer = () => {
  return;
  <section>
    <div className="container mx-auto flex flex-col items-center">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            Facebook
          </a>
          <a href="#" className="text-red-400 hover:text-red-300">
            Instagram
          </a>
        </div>
      </div>
      <div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </div>
  </section>;
};

export default Footer;
