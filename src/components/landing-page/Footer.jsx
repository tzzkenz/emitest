import footerLinks from "../../assets/footer-links.svg";
import logo from "../../assets/logo.svg";

function Footer() {
  const links = [
    "Contact Us",
    "About Us",
    "Privacy Policy",
    "Manage Cookies",
    "Website Accessibility",
  ];

  return (
    <footer className="bg-emigrate-blue flex justify-center items-center flex-col pt-8 px-4 md:px-8">
      <img src={footerLinks} alt="Footer links" className="max-w-full h-auto" />
      <div className="flex flex-col items-center mt-8 md:mt-12">
        <img src={logo} alt="Emigrate logo" className="w-16 md:w-20" />
        <p className="mt-2 text-white text-xl md:text-2xl font-semibold">
          Emigrate
        </p>
      </div>
      <ul>
        <li>Home</li>
        <li>work</li>
        <li>profile</li>
        <li>skills</li>
        <li>messages</li>
      </ul>
      <div className="mt-4">
        <p className="text-xs md:text-sm text-white font-light opacity-50">
          Copyright 2024 Emigrate
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4 text-white text-sm md:text-base font-regular">
        {links.map((link, index) => (
          <p
            key={index}
            className="underline cursor-pointer hover:text-gray-300 transition duration-300"
          >
            {link}
          </p>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
