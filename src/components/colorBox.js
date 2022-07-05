import './colorBox.css';
import { useState } from 'react';
// import {withStyles} from '@material-ui/styles'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';

// const styles = {
//     extra:{
//         border: props =>(props.background) 
//     }
// }
function ColorBox(props){
    // const {classes} = props;
    const [show, setShow] = useState(false);

    function changeCopyHandler(){
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }

    const isDark = chroma(props.background).luminance() <= 0.08;
    const isLight = chroma(props.background).luminance() >= 0.6;
 return (
     <CopyToClipboard text={props.background} onCopy={changeCopyHandler}>
         <div style={{background: props.background}} className="ColorBox" id='extra'>
             <div className={`overlay ${show && 'show'}`} style={{backgroundColor: props.background}}></div>
             <div className={`message ${show && 'show'}`}><h1 className={isLight && 'drk'}>Copied!</h1>
                <p className={isLight && 'drk'}>{props.background}</p>
             </div>
         <div className='copy-container'>
         <div className='box-content'>
            <span className={isDark && 'light'}>{props.name}</span>
         </div>
         <button className={`copy-button ${isLight && 'drk'}`}>Copy</button>
         </div>
         {props.showLink && (
         <Link to={props.moreURL} onClick={e => e.stopPropagation()}>
         {/* <Link to={`palette/${props.paletteId}/${props.id}`} onClick={e => e.stopPropagation()}> */}
            <span className={`more ${isLight && 'dark'}`}>MORE</span>
            {/* {chroma(props.background).luminance()} */}
         </Link>
         )}
     </div>
     </CopyToClipboard>
 )
}

// export default withStyles(styles)(ColorBox);
export default ColorBox