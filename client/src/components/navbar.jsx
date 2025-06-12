import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow px-6 py-4 w-full">
               
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold text-blur-600">AlgoTracker</h1>
                    
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <></> : <Menu size={24} />}
                        </button>
                    </div>
                
                    <ul>
                        <div className="hidden md:flex gap-6 md:text-md mt-4">
                            <li><Link to ="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link to ="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
                            <li><Link to ="/codeEditor" className="hover:text-blue-500">Code Editor</Link></li>
                            <li><Link to ="/Profile" className="hover:text-blue-500">Profile</Link></li>
                        </div>
                    </ul>

                </div>

                {isOpen && (
                <ul>
                    <div className="fixed inset-0 bg-black bg-opacity-20 z-40" onClick={toggleMenu}></div>

                    <div className="fixed mt-4 right-0 w-2/4 bg-white shadow-lg px-6 py-4 pt-0 z-50 flex flex-col gap-6 text-sm">
                        <div className="flex justify-end pt-4">
                        <   X onClick={toggleMenu} ></X>
                        </div>
                        <li><Link to ="/" onClick={toggleMenu} className="hover:text-blue-500">Home</Link></li>
                        <li><Link to ="/dashboard" onClick={toggleMenu} className="hover:text-blue-500">Dashboard</Link></li>
                        <li><Link to ="/codeEditor" onClick={toggleMenu} className="hover:text-blue-500">Code Editor</Link></li>
                        <li><Link to ="/Profile" onClick={toggleMenu} className="hover:text-blue-500">Profile</Link></li>
                    </div>
                </ul>
                )}
        </nav>
    );
}

export default Navbar;