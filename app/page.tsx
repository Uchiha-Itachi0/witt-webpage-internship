import Image from 'next/image';
import Navbar from '@/components/navbar';
import homeImage from '../assets/home-image.png';
import sideImage from '../assets/img.png';
import { FaPlay } from 'react-icons/fa';

const DecorativeShapes = () => (
    <>
        <div className="absolute bg-white w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] top-0 -right-[30px] sm:-right-[50px]"></div>
        <div className="absolute bg-primary w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] top-0 -right-[60px] sm:-right-[100px] rounded-full"></div>
        <div className="absolute bg-white w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] left-0 -bottom-[30px] sm:-bottom-[50px]"></div>
        <div className="absolute bg-primary w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] left-0 -bottom-[60px] sm:-bottom-[100px] rounded-full"></div>
    </>
);

const DecorativeButtonShapes = () => (
    <>
        <div className="absolute bg-white w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] bottom-0 -right-[30px] sm:-right-[50px]"></div>
        <div className="absolute bg-primary w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] bottom-0 -right-[60px] sm:-right-[100px] rounded-full"></div>
        <div className="absolute bg-white w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] left-0 -top-[30px] sm:-top-[50px]"></div>
        <div className="absolute bg-primary w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] left-0 -top-[60px] sm:-top-[100px] rounded-full"></div>
    </>
);

const PlayButtonShapes = () => (
    <>
        <div className="absolute bg-white w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] top-0 -left-[30px] sm:-left-[50px]"></div>
        <div className="absolute bg-primary w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] top-0 -left-[60px] sm:-left-[100px] rounded-full"></div>
        <div className="absolute bg-white w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] right-0 -bottom-[30px] sm:-bottom-[50px]"></div>
        <div className="absolute bg-primary w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] right-0 -bottom-[60px] sm:-bottom-[100px] rounded-full"></div>
    </>
);

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className="w-full h-full">
                <div className="relative flex flex-col items-center justify-center h-[80vh] bg-primary mx-8 rounded-[50px] rounded-bl-none">
                    <div className="absolute top-0 left-0">
                        <DecorativeShapes />
                        <Image
                            src={sideImage}
                            alt="Side Image"
                            width={260}
                            height={260}
                            className="w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] rounded-br-[20%] border-white border-[2vw] sm:border-[1vw]"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-white rounded-tr-[20px] p-[1vw]">
                        <DecorativeButtonShapes />
                        <button className="whitespace-nowrap text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-8 py-3 bg-black text-white rounded-[50px] hover:bg-gray-800">
                            Download for Free
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 bg-white p-4 rounded-bl-[30px] lg:rounded-bl-[50px]">
                        <div className="bg-black rounded-full w-[10vw] h-[10vw] sm:w-[8vw] sm:h-[8vw] md:w-[6vw] md:h-[6vw] flex items-center justify-center">
                            <FaPlay className="text-white w-[2vw] h-[2vw]" />
                        </div>
                        <PlayButtonShapes />
                    </div>
                    <div className="absolute sm:static top-[30%] sm:top-0 px-6 sm:p-0 flex w-full sm:w-fit">
                        <div className="z-10 w-full sm:w-fit flex flex-col gap-3 sm:text-right sm:mt-0 sm:ml-0 sm:pr-8 text-white items-center sm:items-end justify-center">
                            <h1 className="absolute sm:static -top-[6vw] sm:top-0 left-[2vw] sm:left-0 text-[4.5vw] sm:text-[3vw] lg:text-[2vw] font-bold blippo sm:mb-5">
                                witt.
                            </h1>
                            <div className="flex flex-col sm:block text-[14vw] sm:text-[6.5vw] lg:text-[5vw] leading-[14vw] sm:leading-[6vw] lg:leading-[4.5vw] font-bold grotesque">
                                <h1>your</h1>
                                <h1>second</h1>
                                <h1>brain</h1>
                            </div>
                            <p className="absolute sm:static right-[4vw] sm:right-0 -bottom-[25vw] text-right sm:text-left sm:bottom-0 text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw] font-bold mt-4 w-[35vw] sm:w-[15vw]">
                                a personal assistant to organize, track and document your work
                            </p>
                        </div>
                        <div className="absolute sm:static top-1/2 sm:top-0 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 text-left opacity-20 sm:opacity-100">
                            <Image
                                src={homeImage}
                                alt="Home Image"
                                width={350}
                                height={500}
                                className="rounded-lg w-[40vw] sm:w-[30vw] lg:w-[22vw]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
