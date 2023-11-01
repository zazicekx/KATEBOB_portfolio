import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../variants"

const Contact = () => {

    const form = useRef();
    const [emailValid, setEmailValid] = useState(false);
    const [userNameValid, setUserNameValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!emailValid || !userNameValid || !messageValid ) {
            if (!emailValid) {
                emailErrorNotify()
            }
            if (!userNameValid) {
                usernameErrorNotify()
            }
            if (!messageValid) {
                messageErrorNotify()
            }
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_USER_ID
        ).then(
            (result) => {
                console.log(result.text);
                succesNotify()
                e.target.reset()
                setEmailValid(false)
                setUserNameValid(false)
                setMessageValid(false)
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmailValid(validateEmail(email));     // checkuje zdali e-mail je validní
    };

    const handleUserNameChange = (e) => {
        const userName = e.target.value;
        setUserNameValid(userName.trim() !== ''); // chcekuje zdali username není prázdné
    };
    const handleMessageChange = (e) => {
        const message = e.target.value;
        setMessageValid(message.trim() !== ''); // chcekuje zdali message není prázdné
    };

    const emailErrorNotify = () => {
        toast.error('Email is missing or invalid.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    const usernameErrorNotify = () => {
        toast.error('You need to fill your name/nickname', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
    };

    const messageErrorNotify = () => {
        toast.error('Message is empty !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    };

    const succesNotify = () => {
        toast.success('🦄 Message sent !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <>
        <section className="py-16 lg:section" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* text */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex justify-start items-center"
                        >
                        <div>
                            <h3 className="text-xl uppercase text-accent font-medium mb-2
                                            tacking-wide">Get in touch</h3>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                                Lets work <br/> Together
                            </h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        onSubmit={ sendEmail }
                        ref={form}
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 border rounded-2xl flex flex-col 
                                    gap-y-6 pb-24 p-6 items-start">
                        <input
                            className={`bg-transparent border-b py-3 outline-none w-full 
                                          placeholder:text-white focus:border-accent transition-all ${!userNameValid ? 'border-accent' : 'border-green-500'
                                }`}
                            type="text"
                            placeholder="Tvoje meno"
                            name="user_name"
                            onChange={handleUserNameChange}
                        />
                        <input
                            className={`bg-transparent border-b py-3 outline-none w-full 
                                          placeholder:text-white focus:border-accent transition-all ${!emailValid ? 'border-accent' : 'border-green-500'
                                }`}
                            type="text"
                            placeholder="Tvoj e-mail"
                            name="user_email"
                            onChange={handleEmailChange}
                        />
                        <textarea className="bg-transparent border-b py-12 outline-none w-full 
                                             placeholder:text-white focus:border-accent transition-all
                                             resize-none mb-12"
                            type="text"
                            placeholder="Tvoja zprava"
                            name="message"
                            onChange={handleMessageChange}
                        /> 
                        <button className="btn btn-lg" type="submit">send message</button>
                    </motion.form>
                </div>
            </div>
        </section>
         <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
};

export default Contact;
