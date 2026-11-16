import Logo from 'src/Images/Logo.png';

const Header = () => {
    return (
        <nav>
            <Hstack gap={2} className="align-items-center">
                <a href="/">
                    <img src={Logo} alt="Little Lemon Logo" />
                </a>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Reservations">Reservations</a>
                <a href="#OrderOnline">Order Online</a>
                <a href="#Login">Login</a>
            </Hstack>
        </nav>
    );
};

export default Header;