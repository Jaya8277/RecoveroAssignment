import axios from "axios"
export const GETDATA="GETDATA"
export const SENDDATA="SENDDATA"
export const getdata=(payload,dispatch)=>{
    // console.log(payload);
    axios.post("https://recovero.herokuapp.com/blog/bycategory",payload) 
    .then(res=>{
        dispatch({
            type:GETDATA,
            payload:res.data})
        // console.log(res.data)
    })
}

export const senddatafunction=(dispatch)=>{
    dispatch({type:SENDDATA})
}

