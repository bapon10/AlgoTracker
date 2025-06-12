import Navbar from "./navbar";

function Layout({children}){
    return (
        <div>
            <Navbar />
            <main className="p-6 bg-gradient-to-b from-slate-800 to-slate-300">{children}</main>
        </div>
    );
}

export default Layout;