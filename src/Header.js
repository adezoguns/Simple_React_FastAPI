import logo from './assets/doctory_purple_whiteBG_180x60.png';


function Header() {
  
  return (
    <div className="custom_header">
      <img className="our_logo" src={logo} alt="Logo"/>
        <h1 className="beta">Fastgolem Beta</h1>
        <h2 className="token_bar">Token: 0.0</h2>
    </div>
  )
}
export default Header;
