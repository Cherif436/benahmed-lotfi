"use client"

import React, { createElement, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsArrowRight, BsFillHouseDoorFill, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go'
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import img from '../public/lotfi.jpeg';
import Typewriter from "typewriter-effect";

export default function Intro() {
  const [showModal, setShowModal] = useState(false);
  const [showModalMaps, setShowModalMaps] = useState(false);
  const { ref } = useSectionInView(createElement(BsFillHouseDoorFill), 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
              }}
          >
            <Image src={img} alt="Benahmed" width="192" height="192" quality="95" priority={true} className="clearfix h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-110" />
          </motion.div>
        </div>
      </div>

      <motion.h6 className="mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-3xl card" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-medium">Benahmed Lotfi</span>
        <br />
        <span className="font-medium animate-pulse" onClick={() => setShowModal(true)}>Web developer</span> {" "}
        <span className="font-bold"></span><span className="italic"></span>{" "}
        <span className="underline"></span>
        
      </motion.h6>

      <motion.p className="mb-10 mt-4 px-4 font-medium !leading-[1.5] xl:text-xl card" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-medium">
          Je suis actuellement à la recherche d'un poste de{" "}<Typewriter
              options={{
                strings: [
                  "développeur front end",
                  "développeur back end",
                  "webmaster"
                ],
                autoStart: true,
                loop: true,
              }}
            />
        </span>
      </motion.p>

      <motion.div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, }}>
        <Link href="#contact" className="flex items-center gap-2 py-3 text-white transition bg-blue-800 rounded-full outline-none dark:bg-gray-800 group px-7 focus:scale-110 hover:scale-110 hover:bg-blue-950 active:scale-105" onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now())
        }}>
          Me contacter{" "} <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>
        <a className="flex items-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer hover:bg-blue-50 group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-blue/30 dark:bg-white/10" href="/CVLotfi.pdf" download>
          Télécharger mon CV{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          className="bg-white hover:bg-blue-50 p-4 text-blue-800 hover:text-blue-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-blue/30 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/lotfi-ben-ahmed-4289a2147"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white hover:bg-blue-50 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-blue/30 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Cherif436"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 bg-white border-b border-gray-200 border-solid rounded-t dark:bg-gray-800">
                  <h3 className="text-3xl font-semibold">
                    Développeur web junior
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-blue-600 border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 dark:text-white text-blue-950">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex flex-auto p-6 bg-white justify-evenly dark:bg-gray-800">
                  <div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4">
                    <Image src={img} alt="Benahmed" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl clearfix hover:scale-110" />
                  </div>
                  <div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4">
                    <p><em>Benahmed</em>  <i>Lotfi</i></p>
                    <p><em>lotfi.bena@hotmail.com</em></p>
                    <p><em>+324 85 85 23 45</em></p>
                    <p className="flex items-center justify-center space-x-2"><GoLocation onClick={() => setShowModalMaps(true)} className="text-blue-800 animate-pulse" /><em onClick={() => setShowModalMaps(true)} className='animate-pulse'> 40 Androme, 1200</em></p>
                    <div className="flex justify-center mt-2 text-blue-800 dark:text-white">
                      <a href="https://github.com/Cherif436" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="w-8 h-8 cursor-pointer" />
                      </a>
                      <a href="https://www.linkedin.com/in/lotfi-ben-ahmed-4289a2147" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 bg-white border-t border-solid rounded-b border-blueGray-200 dark:bg-gray-800">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear outline-none text-blue-950 dark:text-white background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-800 rounded-full shadow outline-none dark:bg-gray-900 bg-gradient-to-r active:bg-blue-900 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => window.open('mailto:lotfi.bena@hotmail.com')}
                  >
                    Envoyer message
                  </button>
                  <a className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-800 rounded-full shadow outline-none dark:bg-gray-900 bg-gradient-to-r active:bg-blue-900 hover:shadow-lg focus:outline-none" href="/CVLotfi.pdf" download="CV.pdf"> Télécharger le CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      {showModalMaps ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gradient-to-t from-gray-200 to-transparent">
            <div className="relative w-auto mx-auto my-6 max-w-7xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-gray-500 border-0 outline-none focus:outline-none"
                  onClick={() => setShowModalMaps(false)}
                >
                  <span className="block w-6 h-6 text-blue-800">
                    ×
                    </span>
                </button>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2518.8119054762246!2d4.4225091!3d50.8531673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dca51abd5d2d%3A0x4b2d4d85ee9b033e!2sAndromedalaan%2040%2C%201200%20Sint-Lambrechts-Woluwe!5e0!3m2!1snl!2sbe!4v1669473874528!5m2!1snl!2sbe" width="375" height="380" style={{ border: 0 }} loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </>
      ) : null}
      </motion.div>
    </section>
  )
}
