function About(){
    return(
        <>
        <section className="p-3">
            <div className="flex justify-center  mt-7">
        <span className=" bg-purple-500 text-white py-1.5 px-3 rounded-full">Our Story</span>
        </div>
        <h1 className=" text-4xl font-bold text-center py-2">We Turn <span className=" text-4xl text-purple-500 text-semibold">Ideas</span> Into</h1>
        <h2 className=" text-4xl font-bold text-center text-purple-500">Reality</h2>
        <p className="text-3xl  px-4">mvpier was born from a simple belief: every great product starts with a great MVP. We're here to help founders like you validate ideas and lunch products</p>
        <p className="text-3xl text-center">at <span className=" text-3xl text-purple-500">lighting speed.</span></p>
        <div className="grid grid-cols-4 gap-8 text-center py-10">
            <div>
        <div className=" bg-purple-400  h-10 w-10 ml-32 text-center items-center flex justify-center rounded-lg">🚀</div>
        <h2 className="text-3xl font-bold py-2 text-purple-400">100+</h2>
        <p>MVPs Lunched</p>
        </div>
            <div className="">
        <div className=" bg-purple-400  h-10 w-10 ml-32 text-center items-center flex justify-center rounded-lg">🚀</div>
        <h2 className="text-3xl py-2 text-purple-400 font-bold">100+</h2>
        <p>MVPs Lunched</p>
        </div>
        <div>
        <span className=" bg-purple-400 ml-32  h-10 w-10 text-center items-center flex justify-center rounded-lg">🚀</span>
        <h2 className="text-3xl py-2 text-purple-400 font-bold">100+</h2>
        <p>MVPs Lunched</p>
        </div>
        <div>
        <span className=" bg-purple-400 ml-32 h-10 w-10 text-center items-center flex justify-center rounded-lg">🚀</span>
        <h2 className="text-3xl text-purple-400 py-2 font-bold">100+</h2>
        <p>MVPs Lunched</p>
        </div>

        </div>
        </section>

        <section className="h-screen bg-pink-200 p-5">
            <div>
                <h1 className="text-4xl mt-8 font-bold">Our <span className=" text-purple-500 font-semibold">Mission</span></h1>
                <p className="text-1xl py-5">We believe every founder eserve a good website its our work do do something like this for you in a minum time which is also good for you and me i am doing this for you in less money which is made by a good person</p>
                <p className="text-1xl py-5">We believe every founder eserve a good website its our work do do something like this for you in a minum time which is also good for you and me i am doing this for you in less money which is made by a good person</p>
                <button className=" bg-purple-600 text-white py-1.5 px-4 rounded-full">Partner with Us</button>
            </div>
            <div>
                <img className="h-70 mt-7 w-400 rounded-lg" src="images/mission.webp" alt="" />
            </div>

        </section>

        <section></section>
        </>
    )
}

export default About;