import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='header'>
			<Link to= "/Kasa/">
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			</Link>
			<Navbar />
		</header>
	)
}
