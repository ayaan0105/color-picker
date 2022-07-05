import { useState } from "react";
import ColorBox from "./colorBox";
import NavBar from "./navBar";
import Footer from "./footer";
import './colorBox.css';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

function SingleColor(props){
    const history = useHistory();
    const [format, setFormat] = useState("hex")
    console.log(props.palet);
    function gatherShades(palette, colorFilter){
        let shades = [];
        let allColors = palette.colors;

        for(let value in allColors){
            shades = shades.concat(
                allColors[value].filter(color => color.id === colorFilter)
            )
        }
        return shades.slice(1);
    }
    const new_shades = gatherShades(props.palet, props.colorId);
    console.log(new_shades);
    // const params = useParams();
    // const {colorId, paletteId} = params;
    const colorBoxes = new_shades.map(color => (
        <ColorBox 
            key={color.name}
            name={color.name}
            background={color[format]}
            showLink={false}
        />
    ))

    function handleChange(e){
        setFormat(e)
    }

    function clickHandler(){
        history.goBack();
    }

    return(

        <div className="singleColor palette">
            
            <NavBar handleChanges={handleChange} showBar={false}/>
            <div className="palette-colors">
           
                {colorBoxes}
                <div className="ColorBox back">
                
                <button onClick={clickHandler} className='back-button'>
                Back <FontAwesomeIcon icon={faAngleLeft} style={{fontSize:"1.8rem", marginLeft:"0.5rem"}}/></button>
               
                </div>
            </div>
            <Footer 
                name={props.palet.paletteName}
                emoji={props.palet.emoji}
                show={true}
                colorId={props.colorId}
            />
        </div>
    )
}

export default SingleColor;