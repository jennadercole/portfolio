import Link from "next/link";

const NavLinks = () => {
    return (
        <>
            <Link className="text-4xl p-12 transition-transform hover:scale-125" href="/">home</Link>
            <Link className="text-4xl p-12 transition-transform hover:scale-125" href="/projects">projects</Link>
            <Link className="text-4xl p-12 transition-transform hover:scale-125" href="/writing">writing</Link>
            <Link className="text-4xl p-12 transition-transform hover:scale-125" href="/about">about</Link>
            <Link className="text-4xl p-12 transition-transform hover:scale-125" href="/contact">contact me</Link>
        </>
    );
};

const Nav = () => {
    return (<>
        <div></div>
        <div className="w-full justify-end flex space-x-8 md:flex">
            <NavLinks />
        </div>
    </>
    );
};

export default Nav;
