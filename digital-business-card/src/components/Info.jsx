import photo from "../../public/temporary-image.jpg"

export default function Info(){
    return (
        <header>
            <img className="photo" src={photo} alt="photo" />
        </header>
    )
}