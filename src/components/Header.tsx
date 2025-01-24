import Nav from "./Nav"

export default function Header() {
    return <>
        <header className="bg-background top-0 z-[20] mx-auto flex w-full justify-end border-gray-400 p-14">
            <Nav />
        </header>
    </>
}