import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        "I am a dedicated web developer with a keen interest in creating functional and visually appealing websites. With a strong foundation in React and a commitment to continuous learning, I strive to deliver high-quality projects that meet client needs. Let's work together to bring your ideas to life."
                        </p>
                        <p className="mt-4 text-gray-600">
                        In my projects, I showcase my skills and creativity. Each one reflects my commitment to quality and innovation. From complex web apps to simple static sites, I approach every project with dedication and attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
