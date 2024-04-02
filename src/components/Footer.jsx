import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

const Footer = () => {
  return (
    <footer className="bg-black flex justify-center items-center py-20 shadow-2xl">
      <div className="flex w-full flex-col gap-14 px-4 sm:px-8">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className="font-bold text-lg mb-10 text-white">Shoppee</Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col, index) => (
              <FooterColumn title={col.title} key={index}>
                <ul className="flex flex-col gap-4 text-gray-300">
                  {col.links.map((link, index) => (
                    <Link key={index}>{link}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          
          <div className="flex flex-col gap-5">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link, index) => (
                <Link key={index} className="text-gray-300 flex gap-4 md:flex-col lg:flex-row">
                  <p>{link.label}:</p>
                  <p>{link.value}</p>
                </Link>
              ))}
            </FooterColumn>
          </div>

          <div>
            <FooterColumn>
              <ul className="flex gap-4">
                {SOCIALS.links.map((link, index) => (
                  <Link to="/" key={index}>
                    <img className="hover:opacity-50" src={link} width={22} height={22} alt="socialIcon" />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 border-opacity-20 pt-8">
          <p className="text-center text-white opacity-20">2024 Shoppee | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-white text-lg whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
