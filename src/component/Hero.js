import {motion} from 'framer-motion'
import hero_mobile from '../images/image-hero-mobile.png'
import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'

export default function Hero(){

    return(
        <div className="hero">
            <img className="hero-img" src={hero_mobile}  alt="Hero" />
            <div className="content">
                <h1>Make <br/> remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <motion.button whileHover={{scale:1.1}} type="button" className="btn">Learn more</motion.button>
                <div className="socials">
                    <img src={databiz} alt="sdf" />
                    <img src={audiophile} alt="sdf" />
                    <img src={meet} alt="sdf" />
                    <img src={maker} alt="sdf" />
                </div>
            </div>
        </div>
    )
}