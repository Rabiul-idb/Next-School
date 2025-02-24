
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
const HeaderTop = () => {
  return (
    <div className="bg-blue-500 py-2">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="flex gap-3 items-center text-white">
          <FaRegEnvelope />
          <span>ssmhs.info@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#"><FaFacebookF className="text-base text-white"/></a>
          <a href="#"><FaLinkedinIn className="text-base text-white"/></a>
          <a href="#"><FaYoutube className="text-base text-white"/></a>
        </div>
        <div className="">
          <a className="btn btn-xs">Login</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
