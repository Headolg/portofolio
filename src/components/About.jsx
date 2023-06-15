import React from "react";
import Skills from "./Skills";

function About() {
    return (

        <section className="relative md:py-24 py-16" id="about">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <img src="images/custom/programmer-gif.gif" className="rounded-full" alt="" />
                        </div>
                    </div>
                    <Skills />
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-5xl md:leading-normal color-title text-2xl leading-normal font-semibold">About me ?</h3>
                </div>
                <div className="custom-p">
                    <p>In the world of web development, I am a curious autodidact, always seeking out new and innovative technologies. I thrive on
                        constant exploration and learning, adapting to the rapid changes in this field.</p>
                    <br />
                    <p>In my free time, I enjoy riding ATVs through the forest, disconnecting and reconnecting with nature to rejuvenate my creativity.
                        The combination of my passion for technology and my outdoor adventures makes me a well-rounded and creative individual.</p>
                    <br />
                    <p>Through the personal projects I have developed and my passion for continuous learning, I have built a strong foundation of knowledge and technical skills. I am eager to embark on a career in front-end
                        development, utilizing my creativity and curiosity to bring value and innovation to every project.</p>
                </div>

            </div>
        </section>
    )
}

export default About;