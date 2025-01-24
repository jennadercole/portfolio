import GetYear from "@/utils/helpers";

const Footer = () => (
    <footer className="sticky bottom-0 h-45">
      <p className="font-semibold text-center">©{GetYear()} Jenna Dercole. All Rights Reserved.</p>
    </footer>
  );
  
  export default Footer;