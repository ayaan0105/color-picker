import './footer.css'

function footer(props){
    return (
        <footer className='footer'>
                {props.name}
                <span>{props.emoji}</span>
                {props.show && <span>{props.colorId}</span>}
        </footer>
    )
}

export default footer;