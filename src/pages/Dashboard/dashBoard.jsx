import React from 'react';
import FirstImg from '../../assets/firstimg.png';
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

        <div className="my-10 flex gap-10 grid grid-cols-4 justify-center items-center">
          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img src={Vector} alt="vector" className="w-5 mx-auto py-3" />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>

          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img src={Vector01} alt="vector" className="w-5 mx-auto py-3" />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>

          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img src={Vector02} alt="vector" className="w-5 mx-auto py-3" />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>

          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img src={Vector03} alt="vector" className="w-5 mx-auto py-3" />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>

          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img src={Vector04} alt="vector" className="w-5 mx-auto py-3" />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>

          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img src={Vector05} alt="vector" className="w-5 mx-auto py-3" />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>

          <div className="text-sm py-7 rounded-[20px] px-7 bg-[#262626] flex-1 justify-center">
            <img
              src={Vector06}
              alt="vector"
              className="w-3 h-12 mx-auto py-3"
            />
            <h2 className="text-[14px] text-[#DAA71F]">Paid Ads (PPC)</h2>
            <h3 className="w-40 py-2">
              Drive instant traffic and sales with laser-targeted ad campaigns.
            </h3>
          </div>
        </div>
      </section>
      <section className="h-[70vh] max-w-6xl mx-auto bg-[url('/src/assets/firstbg.png')] bg-cover bg-center grid items-center justify-center px-15">
        <h1 className="text-center text-2xl font-bold">helloworld</h1>
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
