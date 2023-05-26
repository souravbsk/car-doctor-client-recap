import React from "react";
import logoBrand from "../../assets/footer-logo.svg"
import { Link } from "react-router-dom";
import{FaGoogle,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black mt-16 md:mt-32 py-16 px-5 md:py-32 ">
      <div className="footer  container text-white">
        <div className="max-w-full md:w-80">
         <Link>
         <img className="max-w-full md:w-28 h-20" src={logoBrand} alt="" />
         </Link>
          <p>
          Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
          </p>
          <ul className="flex items-center gap-3">
            <Link><li className="px-3 rounded-full py-3 bg-gray-700 "><FaGoogle></FaGoogle></li></Link>
            <Link><li className="px-3 rounded-full py-3 bg-gray-700 "><FaTwitter></FaTwitter></li></Link>
            <Link><li className="px-3 rounded-full py-3 bg-gray-700 "><FaInstagram></FaInstagram></li></Link>
            <Link><li className="px-3 rounded-full py-3 bg-gray-700 "><FaLinkedin></FaLinkedin></li></Link>
          </ul>
        </div>
        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
