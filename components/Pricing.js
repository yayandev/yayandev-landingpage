import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Pilih Paket yang Cocok untuk Website Anda
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Kami akan bantu wujudkan website anda dengan memilih paket yang
              tepat. Konsultasi Gratis! hingga website anda tayang
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Paket UMKM
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Free Domain .com
                  </li>
                  <li className="relative check custom-list my-2">
                    Aktif 1 tahun
                  </li>
                  <li className="relative check custom-list my-2">1 Halaman</li>
                  <li className="relative check custom-list my-2">
                    Basic landing page design For Landing Page
                  </li>
                  <li className="relative check custom-list my-2">
                    Integrasi sosial media & tombol whatsapp
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Rp.525.000
                  </p>
                  <p className="text-xs text-slate-600 text-center mb-4 ">
                    Rp.400.000 di tahun selanjutnya
                  </p>
                  <ButtonOutline
                    onClick={() => {
                      document.location.href =
                        "https://wa.me/6283873614764?text=Hai yayandev!, saya ingin menanyakan paket web UMKM";
                    }}
                  >
                    Select
                  </ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Paket Bisnis
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Free Domain .com .id .org .or.id
                  </li>
                  <li className="relative check custom-list my-2">
                    Aktif 1 tahun
                  </li>
                  <li className="relative check custom-list my-2">
                    10 Halaman
                  </li>
                  <li className="relative check custom-list my-2">
                    Custom web design For Toko Online, Company Profile,
                    Portofolio, Yayasan/Organisasi, Portal Berita
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Rp. 2.525.000
                  </p>
                  <p className="text-xs text-slate-600 text-center mb-4 ">
                    Rp.1.000.000 di tahun selanjutnya
                  </p>
                  <ButtonOutline
                    onClick={() => {
                      document.location.href =
                        "https://wa.me/6283873614764?text=Hai yayandev!, saya ingin menanyakan paket web bisnis";
                    }}
                  >
                    Select
                  </ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Paket Custom
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Free Domain .com .id .org .or.id
                  </li>
                  <li className="relative check custom-list my-2">
                    Aktif 1 tahun
                  </li>
                  <li className="relative check custom-list my-2">
                    10 Halaman
                  </li>
                  <li className="relative check custom-list my-2">
                    Custom web design For Toko Online, Company Profile,
                    Portofolio, Yayasan/Organisasi, Portal Berita
                  </li>
                  <li className="relative check custom-list my-2">
                    Integrasi 3rd party
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Rp. 5.000.000
                  </p>
                  <p className="text-xs text-slate-600 text-center mb-4 ">
                    Rp. 2.000.000 di tahun selanjutnya
                  </p>
                  <ButtonOutline
                    onClick={() => {
                      document.location.href =
                        "https://wa.me/6283873614764?text=Hai yayandev!, saya ingin menanyakan paket web custom";
                    }}
                  >
                    Select
                  </ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Testimoni
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Berikut beberapa client yang sudah kami buatkan website.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Konsultasi Sekarang
                  </h5>
                </div>
                <ButtonPrimary
                  onClick={() => {
                    document.location.href =
                      "https://wa.me/6283873614764?text=Hai yayandev!, saya ingin konsultasi tentang layanan buat website.";
                  }}
                >
                  {" "}
                  Whatsapp
                </ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
