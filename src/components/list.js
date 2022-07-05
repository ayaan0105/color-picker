import MiniPalette from './miniPalette';
import './list.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFillDrip} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
function PaletteList(props){

    return (
        <div className="root">
            <div className="container">
                <div className='icn2'>
                <nav className="nav">
                <h1>UI Color Palettes</h1>
                </nav>
                {/* <Link to="/palette/create-palette"> */}
                <div className='icn'>
                <Link to='/palette/custom'>
                    <div className='font'>
                <FontAwesomeIcon icon={faFillDrip} style={{fontSize:"4rem"}}/>
                {/* <span>Custom Palette</span> */}
                </div>
                <nav className='next'>
                     <ul>
                       <li><a href="">Custom Palette</a></li>
                       
                     </ul>
                    </nav>
                </Link>
                </div>
                {/* </Link> */}
                </div>
                <div className="nnt">
                {props.palettess.map(color => (

                    <MiniPalette {...color}/>
                ))}
                </div>
            </div>
            
        </div>
    )
}

// export default withStyles(styles)(PaletteList);
export default PaletteList;