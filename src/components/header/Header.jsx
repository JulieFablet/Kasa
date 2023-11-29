import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='header'>
			
			<h1>
		<Link to= "/Kasa">
				<img src={Logo} alt="kasa, location d'appartements" />
			</Link>
			</h1>
			<Navbar />
		</header>
	)
}
