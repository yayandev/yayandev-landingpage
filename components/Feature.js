import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Mengapa Pilih Jasa Pembuatan Website di YayanDev?
            </h3>

            <ul className="text-black-500 self-start list-inside ml-8">
              <motion.li
                className="relative circle-check custom-list"
                custom={{ duration: 2 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                Keamanan: "Kami mengutamakan keamanan situs Anda dengan
                langkah-langkah perlindungan terkini, memberi Anda ketenangan
                pikiran yang Anda butuhkan."
              </motion.li>
              <motion.li
                className="relative circle-check custom-list"
                custom={{ duration: 2 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                Harga yang Terjangkau: "Dengan harga yang ramah di kantong, kami
                menawarkan solusi berkualitas tinggi tanpa menguras anggaran
                Anda."
              </motion.li>
              <motion.li
                className="relative circle-check custom-list"
                custom={{ duration: 2 }}
                variants={scrollAnimation}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                Kecepatan: "Bersama Yayandev, Anda tidak hanya mendapatkan
                kualitas, tetapi juga kecepatan. Situs web Anda akan siap
                diluncurkan dengan cepat, memberi Anda keunggulan kompetitif
                dalam waktu yang singkat."
              </motion.li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
