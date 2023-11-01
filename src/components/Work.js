import React from 'react';
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../variants"
//img
import Img1 from "../assets/4ColorKid.jpg";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/bloodyCat.jpg";



const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10"> 
                    <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        {/*text */}
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                My latest <br />
                                Work.
                            </h2>
                            <p className="max-w-sm mb-16">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Nullam rhoncus aliquam metus. Aliquam ante. Etiam bibendum elit eget erat.
                            </p>
                            <button className="btn btn-sm">View all projects</button>
                        </div>
                        {/*image */}
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-2xl shadow-xl shadow-lg">
                            {/*overlay */}
                            <div className="group-hover:bg-black/60 w-full 
                                            h-full absolute z-40 transition-all duration-300"
                                            ></div>
                            {/* img */}
                            <img className="group-hover:scale-125 transition-all duration-500 shadow" src={Img1} alt="" />
                            {/* pretitle */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24
                                            transition-all duration-500 z-50">
                                <span className="text-gradient"> 4ColorKid </span>
                            </div>
                            {/*title */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14
                                            transition-all duration-500 z-50">
                                <span className="text-3x1 text-white">Project Title</span>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 flex flex-col gap-y-10">
                        {/*image */}
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/*overlay */}
                            <div className="group-hover:bg-black/60 w-full 
                                            h-full absolute z-40 transition-all duration-300"
                            ></div>
                            {/* img */}
                            <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />
                            {/* pretitle */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24
                                            transition-all duration-500 z-50">
                                <span className="text-gradient"> Shroooom Cat </span>
                            </div>
                            {/*title */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14
                                            transition-all duration-500 z-50">
                                <span className="text-3x1 text-white">Project Title</span>
                            </div>
                        </motion.div>
                        {/*image */}
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/*overlay */}
                            <div className="group-hover:bg-black/60 w-full 
                                            h-full absolute z-40 transition-all duration-300"
                            ></div>
                            {/* img */}
                            <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="" />
                            {/* pretitle */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24
                                            transition-all duration-500 z-50">
                                <span className="text-gradient"> Violent Cat </span>
                            </div>
                            {/*title */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14
                                            transition-all duration-500 z-50">
                                <span className="text-3x1 text-white">Project Title</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
};

export default Work;
