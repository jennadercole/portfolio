import Nav from "./Nav"
import { Jost } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    weight: "200"
});

export default function Header() {
    return <>
        <header className={`${jost.className} flex w-full justify-end p-12 text-lg`}>
            <Nav />
        </header>
    </>
}