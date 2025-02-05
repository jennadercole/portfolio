import GetYear from "@/utils/helpers";
import { Jost } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    weight: "200"
});

const Footer = () => (
    <footer className={`${jost.className} text-center py-2`}>
       <p className="text-sm font-semibold">©{GetYear()} Jenna Dercole. This page is <a className="hover:text-red-400" href="https://github.com/jennadercole/portfolio" target="_blank">open source!</a></p>
    </footer>
  );
  
  export default Footer;