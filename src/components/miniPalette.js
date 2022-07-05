// import {withStyles} from '@material-ui/styles'
import { useHistory } from 'react-router-dom';
import './miniPalette.css';


function MiniPalette(props){
    const history = useHistory();
    // const location = useLocation();
    
    function handlePalettes(){
        history.push(`/palette/${props.id}`)
       console.log(props.id);
    };
    const miniColorBoxes = props.colors.map(color => (
        <div className='miniColor' style={{backgroundColor: color.color}} 
        key={color.name}
        />
    ));

    
    return (
        <div>
        <div className='root2' onClick={handlePalettes}>
            <div className='colors'>
                {miniColorBoxes}
            </div>
        </div>
        <h5 className='title'>{props.paletteName}
            <span className='emoji'>{props.emoji}</span></h5>
        </div>
    );
};

export default MiniPalette;