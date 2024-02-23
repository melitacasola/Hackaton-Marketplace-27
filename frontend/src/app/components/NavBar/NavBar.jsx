import Image from "next/image"
import Link from "next/link"
import Logo from "../../../../public/Image20240222125816.png"
import { AiFillHome } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";


const NavBar = () => {
    return (
        <div className="bg-bg-header py-6 px-10 items-center flex justify-between">
            <Link href='/'>
            
                <Image 
                src={Logo}
                width='250'
                height='250'
                alt="Logo"
                className="bg-bg-header"/>
            </Link>
            <div className="flex flex-row gap-5"> <Link href='/'><AiFillHome className="text-text-color h-8 w-8"/></Link>
            <Link href='/not-found'><IoMdContacts className=" text-gray-500 h-8 w-8 ml-6 "/></Link></div>
        </div>
    )
}

export default NavBar
