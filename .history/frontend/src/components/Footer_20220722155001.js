import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <footer className="z-50 relative w-full bottom-0 text-white bg-blue-400 py-5 sm:py-12">
      <div className="sm:flex mx-5 justify-between ">
        <div className="sm:w-full px-4 md:w-1/6">
          <strong>Products</strong>
          <ul>
            <li>Recliners</li>
            <li> Sofa set</li>
            <li>Leather Couch</li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Contact Us</h6>
          <address className="not-italic mb-4 text-sm">
            123 6th Nyeri
            <br />
            083232323
          </address>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Socials</h6>
          <ul className="flex space-x-6">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
        {!loggedIn && (<div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
          <button className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded text-white">
            Buy with Us
          </button>
        </div>)}
      </div>
    </footer>
  );
}

export default Footer;
