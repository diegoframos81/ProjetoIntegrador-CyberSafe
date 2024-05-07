import LogoIcon from '../../assets/Logo/LogoCyberSafe-removebg-preview.png'
import LogoStyle from './style'

export const Logo = () => {
    return (
        <> 
            <LogoStyle>
                <img src={LogoIcon} alt="logo" />
                <p>LRWD Soluções</p>
            </LogoStyle>
        </>
    )
}

