import React from 'react';
// icon
import { RiArrowRightUpFill } from "react-icons/ri";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants"

//services data
const services = [
    {
        name: "UI/UX Design",
        description: 
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet.",
        link: "learn more"
    },
    {
        name: "Development",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet.",
        link: "learn more"
    },
    {
        name: "Digital Marketing",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet.",
        link: "learn more"
    },
    {
        name: "Product branding",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet.",
        link: "learn more"
    },
]

const Services = () => {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    { /* text & image */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
                        mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6">What Do I Do.</h2>
                        <h3 className="h3 max-w-[455px] mb-16">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Nulla quis diam. 
             
                        </h3>
                        <button className="btn btn-sm">Check my Work</button>
                    </motion.div>
                    { /* services */ }
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex-1"
                    >
                        {/* service list */}
                        <div>
                            {services.map((service, index) => {
                                return (
                                    <div className="border-b border-white/20 h[146px] 
                                         mb-[38px] flex" key={index}
                                    >
                                        <div className="max-w-[476px]">
                                            <h4 className="text-[20px] tacking-weider
                                                font-primary font-semibold mb-6"
                                                >
                                                {service.name}
                                            </h4>
                                            <p className="font-secondary leading-tight"
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end">
                                            <a href="#" className="btn w-9 h-9 mb-[42px] 
                                                flex justify-center items-center"
                                            >
                                                <RiArrowRightUpFill />
                                            </a>
                                            <a href="#" className="text-gradient text-sm" >
                                                { service.link }
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Services;
