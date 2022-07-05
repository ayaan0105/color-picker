import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import { Link } from 'react-router-dom';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
// import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { InputLabel } from '@mui/material';


function NavBar(props){

    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);

    function handleChange(event){
        setFormat(event.target.value);
        setOpen(true);
        // alert(event.target.value)
        props.handleChanges(event.target.value)
        // console.log();
    }
    function closeBar(){
        setOpen(false);
    }
    return (
        <header className="navbarr">
            <div className="logo">
             {/* eslint-disable-next-line */}
                <Link to="/">ColorPicker</Link>
            </div>
            {props.showBar && (
                <div className='container2'>
                <span className='level2'>Level:{props.lev}</span>
            <div className='slider'>
            <Slider 
            defaultValue={props.lev}
            min={200} 
            max={900} 
            step={100} 
            onAfterChange={props.changeColor}/>
            </div>
            </div>
            )}
            <div className='select-cont'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>{format}</InputLabel>
                <Select style={{fontSize: '0.8rem', fontFamily:'Montserrat', fontWeight:'600'}} value={format} onChange={handleChange}>
                    <MenuItem  style={{fontSize: '0.8rem', fontFamily:'Montserrat', fontWeight:'600'}}  value="hex">Hex</MenuItem>
                    <MenuItem  style={{fontSize: '0.8rem', fontFamily:'Montserrat', fontWeight:'600'}} value="rgb">RGB</MenuItem>
                    <MenuItem  style={{fontSize: '0.8rem', fontFamily:'Montserrat', fontWeight:'600'}} value="rgba">RGBA</MenuItem>
                    {/* <MenuItem value="no hash">no Hash - ffffff</MenuItem> */}
                </Select>
                </FormControl>
            </div>
            <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"left"}} 
            open={open}
            autoHideDuration={3000}
            message={<span id="message-id">Format Changed to '{format}'</span>}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            onClose={closeBar}
            action={[
                <IconButton onClick={closeBar}
                 color="inherit"
                 key='close'
                 aria-label='close'
                 >
                    <CloseIcon />
                </IconButton>
            ]}/>
        </header>
    )
}

export default NavBar;