import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href='/'>
            <div className="items-center hidden lg:flex">
                <Image src='/logo-black-96.png' alt="Logo" height={28} width={28} />
                <p className="font-semibold text-white text-2xl ml-2">FinEasy</p>
            </div>
        </Link>
    )
}