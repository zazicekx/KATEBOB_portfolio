import React from 'react';
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants"

//services data
const services = [
    {
        name: "UI/UX Design",
        description: 
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.In dapibus augue non sapien.",
        link: "learn more"
    },
    {
        name: "Development",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.In dapibus augue non sapien.",
        link: "learn more"
    },
    {
        name: "Digital Marketing",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.In dapibus augue non sapien.",
        link: "learn more"
    },
    {
        name: "Product branding",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo.In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.In dapibus augue non sapien.",
        link: "learn more"
    },
]

const Services = () => {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    { /* text & image */}
                    <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
                        mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6">What Do I Do.</h2>
                        <h3 className="h3 max-w-[455px] mb-16">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas aliquet accumsan leo.In laoreet, magna id viverra
                            tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi
                            sed libero.In dapibus augue non sapien.
                        </h3>
                        <button className="btn btn-sm">Check my Work</button>
                    </div>
                    { /* services */ }
                    <div>services</div>
                </div>
            </div>
        </section>
    )
};

export default Services;
