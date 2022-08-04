import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TestBody from "./TestBody";
function Home(){
    const [search,setSearch] = useSearchParams();
    const [cate,setCate] = useState(search.get('cate'));
    const [title,setTitle] = useState(search.get('id'));

    const doClick = () =>{
        setSearch({name:'huy',cate:'nk'});
    }
    return (
        <>
            <label>Category</label><input value={cate}></input><br>
            </br>
            <label>Id</label><input value={title}></input>
            <button onClick={doClick}>Click me</button>
        </>
    );
}
export default Home;