import './Info.css'
import photo from "../../public/temporary-image.jpg"
import emailIco from "../../public/Mail.png"

export default function Info(){
    return (
        <header>
            <img className="photo" src={photo} alt="photo" />
            <h1 className="fullname">Taras Kozodoi</h1>
            <h4 className="job">Frontend Developer</h4>
            <h5 className="website">taraskozodoi.website</h5>
            <a href='mailto:acateely@gmail.com'>
                <button className="email"><img src={emailIco}/><span>Email</span></button>
            </a>
        </header>
    )
}