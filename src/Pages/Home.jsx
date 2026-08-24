 
function Home(){
    return(
        <>
        <section className="h-screen bg-purple-400 py-5 px-8">
        <span className="bg-purple-200 py-1 px-3 rounded-lg text-purple-500   ">Lunch your vision.Fast.</span>
        <h1 className="font-bold text-4xl py-1 mt-6">WE Build <span className="text-4xl font-semibold">Ideas</span> That</h1>
        <h2 className="text-4xl font-bold">Make <span className="text-4xl font-semibold">Impact.</span></h2>
        <p className="mt-6 text-2xl">We design,develop,and lunch your first vision in weeks</p>
        <button className="bg-purple-700 text-white py-2 px-4 rounded-lg mt-4 ml-2 ">Let's Build Your Pitch</button>
        <div className="flex justify-center items-center">
        <img className="h-60 mt-5 rounded-lg " src="../images/hero_image.webp" alt="" />
        </div>
        </section>


        <section className=" bg-white h-screen py-3 px-5">
            <span className=" bg-purple-500 py-1 px-2 rounded-lg text-white">mvpier</span>
            <h1 className="py-2 font-semibold text-4xl">WHY <span className="font-bold text-4xl">mvpier ?</span></h1>
            <div className="relative bg-gray-600 text-white w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden flex justify-center flex-col px-4 ml-80 font-semibold shadow-xl">
            <span className= "py-1 px-2 rounded-lg absolute top-6 right-6 bg-gray-400  ">Lean Expertise</span>
            <div>
                    <h1 className=" text-3xl">Iterate Faster,mitigate risk.</h1>
                    <h1 className=" text-3xl">Our lean methodology</h1>
                    <h1 className=" text-3xl">ensure you validate your</h1>
                    <h1 className=" text-3xl">concept before heavy</h1>
                    <h1 className=" text-3xl">investment.</h1>
                </div>
            </div>

           
            
        </section>

        <section className="h-screen px-3">
            <div>
          <hr className=" flex-1 ml-20 border-gray-200 " />
            <span className=" bg-[#c4b5fd] text-[#6366f1] px-3 py-1 rounded-full relative -top-3">Goals</span>
            <p id="text" className="text-3xl opacity-0 translate-y-10 transition-all duration-1000 opacity-100  translate-y-0 "><span className=" text-purple-700">mvpier</span> helps founders validate ideas quickly and efficiently. By foucing on lean develop rapid prototyping, and continuous iteration,, we empower startups to test their market fit scale with confidance,</p>
            </div>
        </section>

        <section></section>
        </>
    )
}

export default Home;