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
        <section className="section" id="about" ref={ ref }>
            <div className="container mx-auto">
                <div>
                    {     /*img*/       }
                    <div
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
                        mix-blend-lighten "
                    >
                    </div>
                    {     /*text*/       }
                    <div>text</div>
                </div>
            </div>
        </section>
    )

};

export default About;
