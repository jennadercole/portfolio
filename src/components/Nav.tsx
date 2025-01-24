import Link from "next/link";

const NavLinks = () => {
    return (
        <>
            <Link className="text-xl p-2 hover:bg-black hover:font-bold" href="/about">about</Link>
            <Link className="text-xl p-2 hover:bg-black hover:font-bold" href="/projects">projects</Link>
            <Link className="text-xl p-2 hover:bg-black hover:font-bold" href="/contact">contact me</Link>
        </>
    );
};

const Nav = () => {
    //make mobile friendly? toggle hanbaobao menu

    return (
        <nav className="w-1/3 flex justify-end">
            <div className="hidden w-full justify-between md:flex">
                <NavLinks />
            </div>
        </nav>
    );
};

export default Nav;
