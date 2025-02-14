import logo from './assets/logo.png';

function Header() {
    const myName = "Ben"; // This isn't needed but anywho.. 

    return (
        <div class="heading">
        <h1>Random Dice Generator</h1>
        <img class="logo" src={logo} alt="Simple Dice Logo"/>
        </div>
    );
}

export default Header;