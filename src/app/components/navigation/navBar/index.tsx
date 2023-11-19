import React from "react";
import Link from  "next/link";
import Logo from './Logo'
import Button from "./Button"
import Image from "next/image";


const Navbar =({...props})=>{
    return (
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                     <Logo />
                    <ul className="hidden md:flex gap-x-6 text-white ">
                        <li className=" cursor-point transition-all hover:font-bold ">
                            <Link href="/home ">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className=" cursor-point transition-all hover:font-bold">
                            <Link href="/about ">
                                <p>About</p>
                            </Link>
                        </li>
                        <li className="cursor-point transition-all hover:font-bold">
                            <Link href="/destination ">
                                <p>Destination</p>
                            </Link>
                        </li>
                        <li className="cursor-point transition-all hover:font-bold">
                            <Link href="/contacts ">
                                <p>Career</p>
                            </Link>
                        </li>
                        <li className="cursor-point transition-all hover:font-bold">
                            <Link href="/contacts ">
                                <p>Contact us</p>
                            </Link>
                        </li>

                        <div className="lg: flexCenter hidden">
                        <Button
                            type="button"
                            title="Login in"
                            icon ="/user.svg"
                            variant="btn_dark_green"                                
                        />
                        </div>

                        <Image
                            src="menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="inline-block cursor-pointer lg:hidden"
                        />
                        
                    </ul> 
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar