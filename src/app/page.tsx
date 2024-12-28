'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden'>
      <Image
        src='/assets/images/tokyo_station.jpg'
        alt='背景画像'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='z-0'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 z-10'></div>
      <div className='relative z-20 h-full flex flex-col justify-center items-center text-white p-4'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-7xl font-bold mb-4 text-center'
        >
          Portfolio Hirai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-xl md:text-2xl mb-8 text-center'
        >
          Next.js、TypeScriptを使用して作成したポートフォリオサイトです。
        </motion.p>
      </div>
    </div>
  );
}
