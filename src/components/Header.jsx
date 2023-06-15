import React from "react";

function Header() {

    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <section
                className="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden 
        before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 ltr:before:right-36 ltr:before:left-0 rtl:before:left-36 rtl:before:right-0 before:mx-auto before:rounded-full before:bg-indigo-600 sm:before:w-[50rem] before:w-[30rem] sm:before:h-[50rem] before:h-[30rem]">
                <div className="container relative z-1">
                    <div className="grid grid-cols-1 mt-5">
                        <div className="title-heading">
                            <div className="grid md:grid-cols-12 mt-12">
                                <div className="lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0 relative">
                                    <div
                                        className="rounded-md lg:shadow-md lg:dark:shadow-gray-800 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6">
                                        <h5 className="mb-3 text-2xl font-bold lg:text-black lg:dark:text-white text-white">I'm
                                            a self taught programmer</h5>

                                        <p className="para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-0">Obviously
                                            I'm a front-end developer.</p>

                                        <div className="mt-4">
                                            <a 
                                                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Check projects</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4 lg:block hidden lg:order-2"></div>
                                <div className="lg:col-span-4 md:col-span-6 order-1 lg:order-3">
                                    <h4
                                        className="lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0">
                                        Fernando <br /> Pintoiu
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-b lg:from-indigo-600/5 lg:to-indigo-600/20 from-indigo-600/10 to-indigo-600 lg:-z-2">
                </div>
                <ul className="circles p-0 mb-0">
                    {list.map((li, i) => {
                        return (<li key={i}></li>)
                    })}
                </ul>
            </section>
            <div className="relative">
                <div
                    className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header;
