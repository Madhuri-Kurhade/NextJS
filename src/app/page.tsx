import styles from './home.module.css'
import { Inter1 } from './ui/font';
import { lusitana } from './ui/font';
import Image from 'next/image';;

export default function Page() {
  return (


    <main className="flex min-h-screen flex-col p-6">

      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>

      </div> */}
      {/* <div className={styles.shape} /> */}
      <div
        className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
      />
      <h1  className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        Hello NextJs !!!
      </h1>

      <Image
        src="/download.png"
        width={250}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"   //if image path is  wrong it display alt messege
      />
       <Image
        src="/download1.jfif"
        width={250}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"   //if image path is  wrong it display alt messege
      />


    </main>
  );
}
