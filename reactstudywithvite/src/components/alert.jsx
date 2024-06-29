

function Alert(props){

    return(
        <>
        <div className="alert alert-primary">{props.name + props.age}</div>
        </>
    )
}


export default Alert;