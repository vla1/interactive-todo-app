import SwitchToDarkIcon from "../../assets/images/icon-moon.svg";
import SwitchToLightIcon from "../../assets/images/icon-sun.svg";
import './Header.css'

const Header=({handleTheme,themeDark})=>{
    return(
        <header>
            <h1>TODO</h1>
            <button className="btn" onClick={()=>handleTheme()}>
                {themeDark ?
                <img src={SwitchToLightIcon} alt="light-theme"/>:
                    <img src={SwitchToDarkIcon} alt="dark-theme"/> }
            </button>
        </header>
    )
}

export default Header