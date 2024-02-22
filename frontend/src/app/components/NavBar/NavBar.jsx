import Image from "next/image"
import Link from "next/link"
import Logo from "../../../../public/Image20240222125816.png"


const NavBar = () => {
    return (
        <div className="bg-bg-header p-6 items-center flex justify-between">
            <Image 
            src={Logo}
            width='250'
            height='250'
            alt="Logo"
            className="bg-bg-header"/>

            <Link href='/'>HOME</Link>
        </div>
    )
}

export default NavBar
