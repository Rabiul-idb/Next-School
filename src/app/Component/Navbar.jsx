
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
    return (
        <div className="bg-blue-400 py-2">
            <div className="w-11/12 mx-auto flex items-center gap-8 justify-center">
                <Image src={logo} alt="logo" width="200" height="100"/>
                <div>
                <h2 className="font-semibold text-4xl text-white">Shaheed Smrity Model High School</h2>
                <p className="text-xl text-white font-medium mt-2">Mirpur, Dhaka (School Code - 0000,  EIIN - 0000000)</p> 
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <ul className="flex gap-8 items-center justify-center mt-7 mb-2">
                    <li className="text-white text-lg font-medium "><a href="/">Home</a></li>
                    <li className="text-white text-lg font-medium "><a href="#">About</a></li>
                    <li className="text-white text-lg font-medium "><a href="#">Gallary</a></li>
                    <li className="text-white text-lg font-medium "><a href="#">Teachers Info</a></li>
                    <li className="text-white text-lg font-medium "><a href="#">Academic</a></li>
                    <li className="text-white text-lg font-medium "><a href="#">Admission</a></li>
                    <li className="text-white text-lg font-medium "><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;