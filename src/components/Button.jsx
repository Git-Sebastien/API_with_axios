function Button ({buttonParams}){
    return(
        <button type={buttonParams.type} onClick={buttonParams.click}>{buttonParams.purpose}</button>
    )
}

export default Button

Button.defaultProps = {
    type:undefined,
    onClick:undefined
}