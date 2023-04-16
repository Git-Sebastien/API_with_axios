import Button from "./Button"

function Form({formParams}){
    return(
        <form action="" onSubmit={formParams.submit}>
            <>
                {formParams.input}
            </>
            <Button buttonParams={{type:"submit",purpose:"Envoyer"}} />
        </form>
    )
}

export default Form