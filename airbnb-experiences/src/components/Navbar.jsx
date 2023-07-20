
import AirbnbLogo from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={AirbnbLogo} alt='Airbnb Logo' className='logo' />
            </nav>
        </div>
    )
}
