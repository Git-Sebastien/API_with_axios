function Select({selectParams}){

    return(
        <>
            <select name={selectParams.name} id="" value={selectParams.value} onChange={selectParams.handleChange}>
               {selectParams.options}
            </select>
        </>
    )
}

Select.defaultProps = {
    onChange : undefined
}

export default Select