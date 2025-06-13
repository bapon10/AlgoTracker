import Navbar from "./navbar";

function Layout({children, nav=false}){

    return (
    <>

    {nav ? (<div>
            <main className="p-6 bg-gradient-to-b from-slate-800 to-slate-300">{children}</main>
        </div>) : 

        (<div>
            <Navbar />
            <main className="p-6 bg-gradient-to-b from-slate-800 to-slate-300">{children}</main>
        </div>)
    }
    </>  );}

export default Layout;