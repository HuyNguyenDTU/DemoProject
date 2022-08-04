import React,{useState} from "react";
function TestUseState(props){
    const [status,setStatus] = useState('Default');
    const doCheck = ()=>{
        setStatus(props.name);
        
    }
    return (
        <>
            <h1>{status}</h1>
            <button onClick={doCheck}>Click me</button>
        </>
        
    );
}
export default TestUseState;