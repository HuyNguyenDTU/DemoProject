import { Pagination } from 'antd';
import React from 'react';
import PageItem from 'react-bootstrap/PageItem';
import { useSearchParams } from 'react-router-dom';


// const PanigationAnt = () => <Pagination onChange={(page,pagesize)=>{
    
//     searchParams.setSearchParams({pages:page})
//     console.log(page);
// }} defaultCurrent={1} total={50} />;
function PanigationAnt(){
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <Pagination  onChange={(page,pagesize)=>{
            setSearchParams({page:page})
            console.log(page+'số items:'+pagesize);
        }} defaultCurrent={1} total={50} />
    );
} 

export default PanigationAnt;