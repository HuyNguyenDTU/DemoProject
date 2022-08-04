import React from "react";
import CardBootstrap from "./CardBootstrap";
import PanigationAnt from "./PanigationAnt";
import ModalBootstrap from "./ModalBootstrap";
import SearchAntd from "./SearchAntd";
import ModalAntd from "./ModalAntd";
import CardAntd from "./CardAntd";


function Management(){
    var listProduct = [
        { id: 1, title: 'Title 1', Noidung: '1.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 2, title: 'Title 2', Noidung: '2.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 3, title: 'Title 3', Noidung: '3.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 4, title: 'Title 4', Noidung: '4.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 5, title: 'Title 5', Noidung: '5.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 6, title: 'Title 6', Noidung: '6.Some quick example text to build on the card title and make up the bulk of the cards content.' },
        { id: 7, title: 'Title 7', Noidung: '7.Some quick example text to build on the card title and make up the bulk of the cards content.' }
    ];
    return (
        <>
            {/* <TestModal/> */}
            <div style={{ display:'inline-block',width:'100%' }}>
                {/* <ModalBootstrap/> */}
                <ModalAntd/>
                <SearchAntd />
            </div>
            
            <div style={{textAlign:'center'}}>
                <div style={{width:'100%', backgroundColor: 'white',flexWrap:'wrap',justifyContent:'stretch',display:'flex'}}>
                    {/* <CardBootstrap/>
                    <CardBootstrap/>
                    <CardBootstrap/>
                    <CardBootstrap/>
                    <CardBootstrap/>
                    <CardBootstrap/> */}
                    {/* {listProduct.map( (item)=>(
                        <CardBootstrap key={item.id} duLieu={item}/>
                    ))} */}
                    {listProduct.map( (item)=>(
                        <CardAntd/>
                    ))}
                </div>
                <PanigationAnt/>
            </div>
            
        </>
    );
}
export default Management;