import './Footer.css'
import facebookIco from "../../public/Facebook-Icon.png"
import twitterIco from "../../public/Twitter-Icon.png"
import instagramIco from "../../public/Instagram-Icon.png"
import linkedinIco from "../../public/Linkedin-Icon.png"
import githubIco from "../../public/GitHub-Icon.png"

export default function Footer(){
    return (
        <footer>
            <a href='https://twitter.com/'>
                <img className="icon" src={twitterIco} alt="Twitter"/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100009216018247'>
            <img className="icon" src={facebookIco} alt="Facebook"/>
            </a>
            <a href='https://www.instagram.com/akateel/'>
            <img className="icon" src={instagramIco} alt="Instagram"/>
            </a>
            <a href='https://www.linkedin.com/'>
                <img className="icon" src={linkedinIco} alt="Linkedin"/>
            </a>
            <a href='https://github.com/Acateel'>
                <img className="icon" src={githubIco} alt="GitHub"/>
            </a>
        </footer>
    )
}