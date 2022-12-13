import photo from "../../public/temporary-image.jpg"

export default function Info(){
    return (
        <header>
            <img className="photo" src={photo} alt="photo" />
            <h1 className="fullname">Taras Kozodoi</h1>
            <h4 className="job">Frontend Developer</h4>
            <h5 className="website">taraskozodoi.website</h5>
            <button className="email">Email</button>
            <button className="linkedln">Linkedln</button>
        </header>
    )
}