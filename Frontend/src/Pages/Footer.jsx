import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-purple-900 py-10">
      <div className="container mx-auto flex flex-wrap justify-between text-white font-serif">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h5 className="text-lg text-green-400 mb-4">The PetNext</h5>
          <div>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Career
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Support
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              About us
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Pet Stores
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Online Pet Shop
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Buy Membership
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Customer reviews
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Report Animal Abuse
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h5 className="text-lg text-green-400 mb-4">Home Services</h5>
          <div>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Pet Grooming
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Dog Training
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Dog Walking
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Home Vet Visit
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Pet Relocation
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Pet Insurance
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Dog Training Course
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Pet Boarding & Siting
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h5 className="text-lg text-green-400 mb-4">Partner</h5>
          <div>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Become a Groomer
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Become a Trainer
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Become a Dog Walker
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Become a Pet Boarder
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Pet Gromming Course
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h5 className="text-lg text-green-400 mb-4">Policy</h5>
          <div>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Refund Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Cancellation Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-300 hover:underline block mb-2"
            >
              Terms & Conditions
            </a>
          </div>
          <div className="flex mt-4">
            <a
              href="#"
              className="w-8 h-8 border-black border-2 rounded-full flex items-center justify-center mr-4"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 border-black border-2 rounded-full flex items-center justify-center mr-4"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 border-black border-2 rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
