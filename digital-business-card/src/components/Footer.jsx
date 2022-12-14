import './Footer.css'
import facebookIco from "../../public/Facebook-Icon.png"
import twitterIco from "../../public/Twitter-Icon.png"
import instagramIco from "../../public/Instagram-Icon.png"
import linkedinIco from "../../public/Linkedin-Icon.png"
import githubIco from "../../public/GitHub-Icon.png"

export default function Footer(){
    return (
        <footer>
            <img className="icon" src={twitterIco} alt="Twitter"/>
            <img className="icon" src={facebookIco} alt="Facebook"/>
            <img className="icon" src={instagramIco} alt="Instagram"/>
            <img className="icon" src={linkedinIco} alt="Linkedin"/>
            <img className="icon" src={githubIco} alt="GitHub"/>
        </footer>
    )
}