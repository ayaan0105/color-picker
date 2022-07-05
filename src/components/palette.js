import './palette.css';
import ColorBox from "./colorBox";
import {useState} from 'react';
import NavBar from './navBar.js';
import Footer from './footer';

function Palette(props){

    const [level, setLevel] = useState(600);
    const [format, setFormat] = useState("hex")

    function ChangeLevel(newlevel){
        setLevel(newlevel);
        console.log(newlevel);
    }
    
    function handleChange(e){
        setFormat(e)
    }
    const ColorBoxes = props.palettes.colors[level].map(color => (
        <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id} 
        // id={color.id}    
        // paletteId={props.palettes.id}
        moreURL={`/palette/${props.palettes.id}/${color.id}`}
        showLink={true}/>
    ));

    return (
        <div className="palette">
            <NavBar 
                changeColor={ChangeLevel} 
                lev={level} 
                handleChanges={handleChange}
                showBar={true}/>
            <div className="palette-colors">
                {ColorBoxes}
            </div>
            <Footer 
                show={false}
                name={props.palettes.paletteName}
                emoji={props.palettes.emoji}/>
        </div>
    )
}

export default Palette;