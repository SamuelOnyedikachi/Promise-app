import React from 'react';
import FirstImg from '../../assets/firstimg.png';
import SecondImg from '../../assets/image 4.png';
import { useNavigate } from 'react-router-dom';
import Vector from '../../assets/Vector.png';
import Vector01 from '../../assets/Vector 01.png';
import Vector02 from '../../assets/Vector 02.png';
import Vector03 from '../../assets/Vector 03.png';
import Vector04 from '../../assets/Vector 04.png';
import Vector05 from '../../assets/Vector 05.png';
import Vector06 from '../../assets/Vector 06.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const Click = () => navigate('/Login');
  return (
    <>
      <section className="h-[70vh] max-w-6xl mx-auto bg-[url('/src/assets/firstbg.png')] bg-cover bg-center grid items-center justify-center px-15">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl max-h-1 mx-auto pt-60 gap-30">
          <div className="font-medium text-left">
            <h1 className="text-[#DAA71F] text-xl sm:text-2xl md:text-4xl lg:text-[35px]">
              Turn Clicks into Clients <br />
              Let’s Grow Your Brand Together.
            </h1>

            <h2 className="mt-8 font-normal text-xl lg:text-[13px] sm:text-base text-white/50">
              At Get Result Agency, we specialize in transforming online traffic
              into loyal customers through data-driven digital strategies and
              bold creative execution.
            </h2>
          </div>

          {/* Image + Border Section */}
          <div className="">
            <div className="border border-[#DAA71F] rounded-[20px] md:w-[280px] md:h-[300px] items-center justify-center"></div>
            <div className="absolute top-[16.7%] right-[21.8%]">
              <img
                src={FirstImg}
                alt="welcome"
                className="w-[100%] md:w-[60%] lg:w-[90%]  object-contain"
              />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left mt-0 pt-0 rel">
          <button
            className="bg-[#DAA71F] text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#a30b0b]  hover:text-white transition"
            onClick={Click}
          >
            Let's Get Started
          </button>
        </div>
      </section>

      <section className="py-15 text-center max-w-6xl mx-auto bg-[#0e0e0eaf] bg-cover bg-center grid items-center justify-center px-15">
        <h1 className="text-3xl font-bold pb-3">
          Who <span className="text-[#DAA71F]">We</span> Are
        </h1>
        <p className="text-center text-amber-50 flex-1 py-8 text-[13px]">
          We’re not just another digital marketing firm — we’re your growth
          partners. Our mission is simple: to turn your online presence into
          real-world results. With a bold mix of data-driven strategies,
          creative storytelling, and performance marketing, we help brands cut
          through the noise, connect with their audience, and scale with
          confidence.
        </p>
        <p className="text-center pb-7 text-amber-50 flex-1 text-[13px]">
          From social media campaigns and SEO to paid ads and content strategy,
          we bring passion, precision, and purpose to everything we do. Whether
          you’re a startup or an established brand, we’re here to ignite your
          growth and deliver the results your business deserves.
        </p>

        <div className="text-center flex justify-center py-10 pt-10 md:text-left">
          <button
            className="bg-[#DAA71F] text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#a30b0b] hover:text-white transition"
            onClick={Click}
          >
            Let's Get Started
          </button>
        </div>
      </section>

      <section className="py-10 pt-16 text-center max-w-6xl mx-auto bg-[#1603035e] bg-cover bg-center grid items-center justify-center px-15">
        <h1 className="text-3xl font-bold pb-3">
          What <span className="text-[#DAA71F]">We</span> Are
        </h1>

        <div className="my-10 gap-10 grid justify-center items-center">
          <div className="grid-cols-4 gap-10 grid justify-center items-center">
            {/* first card */}
            <div className="text-sm py-7 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector} alt="vector" className="w-5 mx-auto py-3" />
              <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
              <h3 className="w-40 py-2">
                Drive instant traffic and sales with laser-targeted ad
                campaigns.
              </h3>
            </div>

            {/* second card */}
            <div className="text-sm py-5 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector01} alt="vector" className="w-5 mx-auto py-3" />
              <h2 className="text-[14px] text-[#DAA71F]">
                Social Media Management
              </h2>
              <h3 className="w-40 py-1">
                Turn followers into loyal fans with content that connects and
                converts.
              </h3>
            </div>

            {/* third card */}
            <div className="text-sm py-6 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector02} alt="vector" className="w-5 mx-auto py-3" />
              <h2 className="text-[14px] text-[#DAA71F]">SEO Services</h2>
              <h3 className="w-40 py-1">
                Boost your search rankings and get found by the right people,
                faster.
              </h3>
            </div>

            {/* four card */}
            <div className="text-sm py-6 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector03} alt="vector" className="w-5 mx-auto py-3" />
              <h2 className="text-[14px] text-[#DAA71F]">
                Video Production & Content Creation
              </h2>
              <h3 className="w-40 py-1">
                Captivate your audience with powerful visuals and
                scroll-stopping content
              </h3>
            </div>
          </div>
          <div className="flex justify-center item-center mx-auto gap-10">
            {/* fifth card */}
            <div className="text-sm py-5 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector04} alt="vector" className="w-5 mx-auto py-3" />
              <h2 className="text-[14px] text-[#DAA71F]">Digital Marketing</h2>
              <h3 className="w-40 py-2">
                We blend data and creativity to fuel your brand’s digital
                growth.
              </h3>
            </div>

            {/* sixth card */}
            <div className="text-sm py-5 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector05} alt="vector" className="w-5 mx-auto py-3" />
              <h2 className="text-[14px] text-[#DAA71F]">Copywriting</h2>
              <h3 className="w-40 py-2">
                Crafting words that spark interest, build trust, and drive
                action.
              </h3>
            </div>

            {/* seventh card */}
            <div className="text-sm py-3 rounded-[10px] px-7 bg-[#262626] flex-1 justify-center">
              <img
                src={Vector06}
                alt="vector"
                className="w-3 h-12 mx-auto py-3"
              />
              <h2 className="text-[14px] text-[#DAA71F]">Web Design</h2>
              <h3 className="w-40 py-2">
                Build sleek, responsive websites that wow visitors and win
                customers.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[50vh] max-w-6xl mx-auto bg-[url('/src/assets/bgback.png')] bg-cover bg-center ">
        <div className="bg-[rgba(124,17,25,0.81)] h-[50vh] w-full max-w-6xl mx-auto bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight pb-4">
              Launch Your Next Big Win Today!
            </h1>
            <h2 className="font-poppins font-medium text-sm py-3 sm:text-base md:text-lg text-white/70">
              From strategy to success, Get Result Agency is built to move your
              brand forward fast.
            </h2>
            <div className="mt-6">
              <button
                className="bg-[#DAA71F] text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#a30b0b] hover:text-white transition duration-300"
                onClick={Click}
              >
                Let's Get Started
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={SecondImg}
              alt="welcome"
              className="w-[80%] md:w-[100%] h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <section className="h-[70vh] max-w-6xl mx-auto bg-[url('/src/assets/firstbg.png')] bg-cover bg-center grid items-center justify-center px-15">
        <h1 className="text-center text-2xl font-bold">helloworld</h1>
      </section>
      <section className="h-[70vh] max-w-6xl mx-auto bg-[url('/src/assets/firstbg.png')] bg-cover bg-center grid items-center justify-center px-15">
        <h1 className="text-center text-2xl font-bold">helloworld</h1>
      </section>
    </>
  );
};

export default Dashboard;
