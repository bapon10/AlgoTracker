import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-300">
            <div>
            <Link to="/profile">
                <button className="text-white hover:text-blue-400 p-4">Profile</button>
            </Link>

            <Link to="/dashboard">
                <button className="text-white hover:text-blue-400 p-4">Dashboard</button>
            </Link>

            <Link to="/codeEditor">
                <button className="text-white hover:text-blue-400 p-4">Code Editor</button>
            </Link>
            </div>

        <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-green-100">AlgoTracker</h1>
            <p className="text-lg max-w-xl mb-6 text-slate-200">Track your DSA progress across LeetCode, Codeforces and more</p>
            <button className="bg-blue-500 active:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg duration-50">Get Started</button>


        </section>

        <section className="py-16 px-6 bg-slate-900">
            <h2 className="text-3xl font-semibold text-center text-gray-200 mb-10">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                    { title: "Sync Platforms", desc: "Automatically pull data from LeetCode & Codeforces" },
                    { title: "AI Code Review", desc: "Get instant feedback on your solutions" },
                    { title: "Stats & Charts", desc: "Track your progress visually" },
                    { title: "Live Editor", desc: "Solve problems in a built-in IDE" },
                ].map((feat,i)=> (
                    <div key={i} className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <h3 className="text-xl text-gray-200 font-semibold mb-2">{feat.title}</h3>
                    <p className="text-gray-400">{feat.desc}</p>
                </div>
                ))}
            </div>
        </section>
        
        <section>
            <footer className="text-center font-semibold font-seriftext-black-400 py-20 text-sm">
                Made for fun by Rayan &middot; <a href="https://github.com/bapon10" className="underline">github</a>
            </footer>
        </section>

        </div>
    );
}

export default Home;