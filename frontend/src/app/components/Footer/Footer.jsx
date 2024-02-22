
import { FaFacebookSquare } from "react-icons/fa";;

import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";


const Footer = () => {
  return (
    <>
    <div className='flex row gap-3 justify-center  p-5 '>
    <FaFacebookSquare className="text-text-color h-8 w-8" />
    <FaLinkedin className="text-text-color h-8 w-8" />
    <BsInstagram  className="text-text-color h-8 w-8"/>
    <FaTelegramPlane  className="text-text-color h-8 w-8"/>
    <FaYoutube  className="text-text-color h-8 w-8"/>
    <br /> 
    </div>
    <div className="flex flex-col">
        <div className="border-t-2  border-text-color mx-10"></div>
    <p  className="text-text-color text-center my-4">Politica de privicidad - Politica de cookies - Nota legal - Mapa web</p>
    <div className="flex row justify-center items-center"><MdCopyright className="text-text-color"/><p className="text-text-color">MetaCoders y entidades relacionadas. Reservados todos los derechos</p>
   </div>
    </div>
    <br />
    
    
    </>
  )
}

export default Footer