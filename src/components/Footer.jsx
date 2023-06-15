function Footer() {

    return (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container text-center">
                    <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                        <div class="ltr:md:text-left rtl:md:text-right text-center hidden-footer">
                            <ul className="list-none ltr:md:text-left rtl:md:text-left text-center mt-6 md:mt-0">
                                <li className="inline"><a href="mailto:fernando_pintoiu@yhaoo.com" rel="noreferrer"
                                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i
                                        className="uil uil-envelope align-middle" title="email"></i></a></li>
                                <li className="inline"><a href="https://github.com/Headolg" target="_blank" rel="noreferrer"
                                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path></svg>
                                </a></li>
                                <li className="inline"><a href="https://www.linkedin.com/in/fernando-pintoiu-b27104234/" target="_blank" rel="noreferrer"
                                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i
                                        className="uil uil-linkedin" title="Linkedin"></i></a></li>
                            </ul>
                        </div>

                        <div className="text-center mt-6 md:mt-0">
                            <p className="mb-0">
                                Design with 🧡 {new Date().getFullYear()}
                            </p>
                        </div>

                        <ul className="list-none ltr:md:text-right rtl:md:text-left text-center mt-6 md:mt-0">
                            <li className="inline"><a href="https://www.linkedin.com/in/fernando-pintoiu-b27104234/" target="_blank" rel="noreferrer"
                                className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i
                                    className="uil uil-linkedin" title="Linkedin"></i></a></li>
                            <li className="inline"><a href="https://github.com/Headolg" target="_blank" rel="noreferrer"
                                className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path></svg>
                            </a></li>
                            <li className="inline"><a href="mailto:fernando_pintoiu@yhaoo.com" rel="noreferrer"
                                className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i
                                    className="uil uil-envelope align-middle" title="email"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;