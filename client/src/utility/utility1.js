
function getToken(){
    if(window.localStorage){
        return window.localStorage.getItem("authorization")
    }
    return ""
}

export {getToken}