import {useState} from "react";

export function useSimpleInput(initialState = {}){
    let [data,setData] = useState(initialState)
    const change_input_name = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData(prevState => ({...prevState, [name]: value}));
    };
    return {data, change_input_name}
}