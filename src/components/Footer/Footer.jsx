import "./Footer.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-div-left">
                <div className="footer-div address">
                    <h1 className="footer-headings">Address</h1>
                    <h2 className="footer-body">Student Activity Center(SAC), Room No. 116, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand 247667</h2>
                </div>
                <div className="footer-div contact">
                    <h1 className="footer-headings">Contact</h1>
                    <h2 className="footer-body">Shivam Singh Aswal : +91 798 378 9329</h2>
                    <h2 className="footer-body">Rajnish : +91 704 895 2487</h2>
                    <h2 className="footer-body">Kriti : +91 988 680 0307</h2>
                </div>
                </div>
                <div className="footer-div-right">
                <div className="footer-div email">
                    <h1 className="footer-headings">Email</h1>
                    <h2 className="footer-body"><a href="mailto:paac@iitr.ac.in">paac@iitr.ac.in</a></h2>
                </div>
                <div className="footer-div social">
                    <div className="footer-socials"><a href="https://www.instagram.com/astro_iitr/?hl=en" target="m_blank"><Instagram className="socials-icon" fontSize="2vw"/>Instagram</a></div>
                    <div className="footer-socials"><a href="https://www.facebook.com/physastroclubiitr/" target="m_blank"><Facebook className="socials-icon" fontSize="2vw"/>Facebook</a></div>
                    <div className="footer-socials"><a href="https://twitter.com/paaciitr?lang=en" target="m_blank"><Twitter className="socials-icon" fontSize="2vw"/>Twitter</a></div>
                    <div className="footer-socials"><a href="https://www.linkedin.com/company/paac-iitr/" target="m_blank"><LinkedIn className="socials-icon" fontSize="2vw"/>Linkedin</a></div>
                </div>
                </div>
            </div>
        </div>
    )
}
