import React, { useRef, useState } from 'react';
import Me from '../assets/me.png';

const History: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (e: any) => {
        if (imgRef.current) {
            const { left, top, width, height } = imgRef.current.getBoundingClientRect();
            const x = (((e.clientX - left) / width) * 100 - 50) / 8; // Normalize and shift the origin to the center
            const y = (((e.clientY - top) / height) * 100 - 50) / 8; // Normalize and shift the origin to the center

            setMousePosition({ x, y });
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="flex justify-center text-center 2xl:text-left items-center font-main 2xl:font-light h-screen 2xl:space-x-40"
        >
            <div className="hidden items-center 2xl:flex" style={{ perspective: '1000px', height: '100%' }}>
                <img
                    ref={imgRef}
                    src={Me}
                    className="h-1/2"
                    alt="Pic of Me"
                    style={{
                        transform: `rotateY(${mousePosition.x / 10}deg) rotateX(${-mousePosition.y / 10}deg)`,
                        transition: 'transform 0.1s',
                    }}
                />
            </div>
            <div className="2xl:mb-6">
                <span className="text-3xl text-secondary dark:text-dark-secondary w-full flex justify-center mb-12 2xl:pr-12">
                    HISTORY
                </span>
                <div className="flex justify-center 2xl:space-x-14">
                    <div className="hidden flex-col items-center 2xl:flex">
                        <div className="mt-[30px] flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Jan 2026 - Current
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[60px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Aug 2024 - Jan 2026
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[60px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Sep 2023 - Aug 2024
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[60px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Dec 2022 - Sep 2023
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[76px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Nov 2021 - Dec 2023
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[76px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Jul 2022 - Nov 2022
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                    </div>
                    <div className="flex flex-col 2xl:w-[24rem] 2xl:px-0 px-4">
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Currently, at{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.nzdf.mil.nz/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                NZDF
                            </a>
                            , working as a Software Engineer contributing to systems that support workforce
                            remuneration.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Prior to that, at{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.insourcerecruit.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Insource
                            </a>
                            , was part of a team upkeeping a React, PHP web application.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            During my last position I was developing both internal and external tools for{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.levno.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Levno
                            </a>{' '}
                            using a range of tools.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Previously, at{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://accessitlibrary.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Accessit
                            </a>
                            , I have managed internal componentary libraries used at scale in client-facing and interal
                            applications.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Further, with{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.insourcerecruit.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Insource
                            </a>
                            , I managed a penertration testing project, followed by development on a React, PHP web
                            appliation.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Lastly, my Capstone project with{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.microsoft.com"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Microsoft
                            </a>
                            <br />
                            involved managing dependancy reliance in Azure's Java SDK.
                        </span>
                        <span className="text-lg pt-8 text-secondary dark:text-dark-secondary">
                            Want to get in touch?{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href='mailto:jamesrsatherley@gmail.com?subject="Hey!"'
                            >
                                Flick me a message
                            </a>
                            .
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
