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
    const [ref, inview] = useInView({
        threshhold: 0.5,
    })
    return (
        <section className="section" id="" ref={ ref }>
            <div className="container mx-auto">
                <div>
                    {     /*img*/       }
                    <div
                        className="flex-1 bg- bg-contain bg-no-repeat h-[640px] 
                        mix-blend-lighten bg-top"
                    >
                    </div>
                    {     /*text*/       }
                    <div>
                        <h2>Něco málo o mně.</h2>
                        <h3>
                            Som umelkyňa so zálibou malování všetkého prírodného, specializujem sa na
                            plátna a štětce. můj signiture je malování koček.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Nullam rhoncus aliquam metus. Aliquam ante. Etiam bibendum elit eget erat.
                            Temporibus autem quibusdam et aut officiis.
                        </p>
                        {     /*stats*/}
                        <div className="flex">
                            <div>
                                <div className="text-[40px] italic hover:not-italic text-gradient mb-2">
                                    <CountUp start={350} end={500} duration={2} />
                                </div>
                                <div className="font-primary text-sm tacking-[2px]">Roky <br />
                                    zkušeností
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default About;
