import memeIcon from '../image/memeIcon.jpg'
import '../style.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar--content'>
                <div className='navbar--first'>
                    <img className='navbar--icon' src={memeIcon} alt="meme Icon" />
                    <h2>Meme Generator</h2>
                </div>
                <h3 className='navbar--secondline'>React Course - Project 3</h3>
            </div>
        </div>
    )
}