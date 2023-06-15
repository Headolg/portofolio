import React from "react";

function Projects() {
    return (
        <section className="relative md:py-24 py-16" id="projects">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-5xl color-title md:leading-normal text-2xl leading-normal font-semibold">My Projects</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">With each project I undertake, I invest time and effort to deeply understand web design
                        principles and build interactive and user-friendly experiences.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-5 mx-3 mb-6 flex flex-col justify-center items-center rounded-md shadow-lg zoom">
                        <div className="text-xl mb-2 text-fgText">Keeper-App</div>
                        <div className="mb-4">
                            <a href="https://github.com/Headolg/Keeper-App" target="_blank" rel="noreferrer">
                                <img alt="Keeper's Demo" loading="lazy" width="270" height="250" decoding="async" data-nimg="1" className="object-contain" style={{ color: "transparent" }} src="./images/custom/keeper.png" />
                            </a>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">React</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">CSS</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">JavaScript</div>
                        </div>
                    </div>

                    <div className="p-5 mx-3 mb-6 flex flex-col justify-center items-center rounded-md shadow-lg zoom">
                        <div className="text-xl mb-2 text-fgText">Daily Journal</div>
                        <div className="mb-4">
                            <a href="https://github.com/Headolg/Daily-Journal" target="_blank" rel="noreferrer">
                                <img alt="Bloggy's Demo" loading="lazy" width="270" height="250" decoding="async" data-nimg="1" className="object-contain" style={{ color: "transparent" }} src="./images/custom/dailyJournal.png" /></a>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">JavaScript</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">EJS</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">MQL</div>
                        </div>
                    </div>

                    <div className="p-5 mx-3 mb-6 flex flex-col justify-center items-center rounded-md shadow-lg zoom">
                        <div className="text-xl mb-2 text-fgText">Secrets</div>
                        <div className="mb-4">
                            <a href="https://github.com/Headolg/secrets" target="_blank" rel="noreferrer">
                                <img alt="Bloggy's Demo" loading="lazy" width="270" height="250" decoding="async" data-nimg="1" className="object-contain" style={{ color: "transparent" }} src="./images/custom/secrets.png" /></a>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">JavaScript</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">EJS</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">MongoDB</div>
                        </div>
                    </div>

                    <div className="p-5 mx-3 mb-6 flex flex-col justify-center items-center rounded-md shadow-lg zoom">
                        <div className="text-xl mb-2 text-fgText">TodoList</div>
                        <div className="mb-4">
                            <a href="https://github.com/Headolg/TodoList" target="_blank" rel="noreferrer">
                                <img alt="Bloggy's Demo" loading="lazy" width="270" height="250" decoding="async" data-nimg="1" className="object-contain" style={{ color: "transparent" }} src="./images/custom/todoList.png" />
                            </a>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">JavaScript</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">EJS</div>
                            <div className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;