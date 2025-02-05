import Image from "next/image"

export default function About() {
    return <>
        <main className="container min-h-screen">
            <div className="flex items-center justify-center space-x-10">
                <Image 
                    src="/jennar.jpg"
                    alt="Jenna"
                    width={300}
                    height={300}
                    className="w-50 h-50 rounded-full object-cover border border-neutral-900"
                />
                <p className="p-2 ml-12 mb-12">I'm curious about all things development, both frontend and backend. </p>
            </div>
        </main>
    </>

}