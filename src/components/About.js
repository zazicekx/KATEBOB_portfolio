import React from 'react';
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants"

const About = () => {
    const [ref, inView] = useInView({
        threshhold: [0, 0.5],
        rootMargin: '100px'
    })
    return (
        <section className="section" id="about" ref={ ref }>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
                     lg:gap-y-0 h-screen">
                    {     /*img*/       }
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
                        mix-blend-lighten bg-top"
                    >
                    </motion.div>
                    {     /*text*/       }
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1">
                        <h2 className="h2 text-accent">About me.</h2>
                        <h3 className="h3 mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Nullam rhoncus aliquam metus. Aliquam ante. Etiam bibendum elit eget erat.
                            {/*Som umelkyňa so zálibou malování všetkého prírodného, specializujem sa na*/}
                            {/*plátna a štětce. můj signiture je malování koček.*/}
                        </h3>
                        <p  className="mb-6">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Nullam rhoncus aliquam metus. Aliquam ante. Etiam bibendum elit eget erat.
                            Temporibus autem quibusdam et aut officiis.
                        </p>
                        {     /*stats*/}
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={13} duration={5} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Roky <br />
                                    zkušeností
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={50} duration={4} /> : null}
                                        k+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    obrazů <br />
                                    namalováno
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={400} duration={4} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    spokojených <br />
                                    klientů
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">contact me</button>
                            <a href="#" className="text-gradient btn-link">
                                Moje portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )

};

export default About;
