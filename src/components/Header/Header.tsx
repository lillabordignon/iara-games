import HeaderList from './components/HeaderList'
import Logo from '../Logo/Logo'
import HeaderListItem from './components/HeaderListItem'
import HeaderLinks from './components/HeaderLinks'

const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src='/images/logo.svg' alt='Logo Iara Games' />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>

            </HeaderList>
        </header>
    )
}

export default Header