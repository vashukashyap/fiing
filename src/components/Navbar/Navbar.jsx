import Image from "next/image";


const Navbar = ({logo}) => {
    return(
        <>
        <div className="flex flex-row justify-between items-center px-8 py-3 sticky top-0 z-[99] bg-white">
            <Image src={logo}/>
            <div className="flex flex-row gap-8 items-center">
                <a className="cursor-pointer">Docs</a>
                <a className="cursor-pointer">Product</a>
                <a className="cursor-pointer">OurTeam</a>
            </div>
            <div className="flex flex-row gap-8 items-center">
                <a className="cursor-pointer">Book a demo</a>
                <a className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 hover:cursor-pointer">Sign In</a>
            </div>
        </div>
        </>
    )
}

export default Navbar;