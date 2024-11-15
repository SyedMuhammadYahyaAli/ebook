import { Clock, Facebook, Instagram, Linkedin, Mail, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-FooterBg bg-cover bg-center text-white py-8 h-auto">

      <div className="absolute inset-0 bg-[#083554] opacity-90 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-12">

   
          <div className="w-full lg:w-1/4 text-left flex flex-col mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4 self-start">
              <Link href="/">
                <Image
                  src='/footerLogo.png'
                  alt='Business proposal writers'
                  width={300}
                  height={100}
                  title='Business proposal writers'
                />
              </Link>
            </h2>
            <p className="text-white text-[16px] md:text-[20px] max-w-full lg:max-w-4xl leading-relaxed mt-9">
              Business Proposal Writer transforms your rough ideas into compelling proposals, empowering you to score deals and win the stakeholders with our expert writing services. 
            </p>
            <div className="flex mt-4 space-x-4">
              <a rel='nofollow' target='_blank' href="https://www.instagram.com/businessproposal_writers" className="text-white">
                <Instagram size={30} />
              </a>
              <a rel='nofollow' target='_blank' href="https://www.facebook.com/businesspr0posalwriters" className="text-white">
                <Facebook size={30} />
              </a>
              <a target='_blank' href="https://x.com/BusProWriters" className="text-white">
                <X size={30} />
              </a>
              <a rel='nofollow' target='_blank' href="https://www.linkedin.com/company/businessproposalwriters" className="text-white">
                <Linkedin size={30} />
              </a>
            </div>
          </div>

    
          <div className="w-full lg:w-1/4 text-left mb-8 lg:mt-32 lg:pl-20">
            <span className="text-lg font-semibold mb-4">Company</span>
            <ul className="space-y-2 mt-3">
              <li><a href="/about" className="text-white hover:underline">About us</a></li>
              <li><a href="/contact" className="text-white hover:underline">Contact us</a></li>
              <li><a href="#" className="text-white hover:underline">Pricing</a></li>
              <li><a href="#" className="text-white hover:underline">Book Consultant</a></li>
              <li><a href="#" className="text-white hover:underline">Sitemap</a></li>
            </ul>
          </div>

         
          <div className="w-full lg:w-1/4 text-left mb-8 lg:mt-32">
            <span className="text-lg font-semibold mb-4">Services</span>
            <ul className="space-y-2 mt-3">
              <li><a href="#" className="text-white hover:underline">Business Content Writing</a></li>
              <li><a href="#" className="text-white hover:underline">Business Proposal</a></li>
            </ul>
          </div>

    
          <div className="w-full lg:w-1/4 text-left mb-8 lg:mt-32">
            <span className="text-lg font-semibold mb-4">Information</span>
            <div className="space-y-6 mt-3">
              <p className="flex items-center">
                <Clock className="mr-2" /> Saturday - Thursday 9am to 7pm
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> <a href="mailto:info@businessproposalwriter.com">info@businessproposalwriter.com</a>
              </p>
              <p className='flex items-center'><Phone className='mr-2'/><a rel='nofollow' href="https://wa.me/12067467149" target='_blank'>+1 206-746-7149</a></p>
              
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
