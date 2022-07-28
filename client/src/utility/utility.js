const Protected = ({children})=> {
    const token = localStorage.getItem("Token");
    //""
    return (
        <>
        {token.length ? children: <Navigate to="/signin"/>}
        </>
    )
}

function isAuthenticated(){
    if(window.localStorage){
        const token=window.localStorage.getItem("Token");
        return Boolean(token);
    }
    return false;
}