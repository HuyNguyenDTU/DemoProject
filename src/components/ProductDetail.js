import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
function ProductDetail() {
    
    const [search,setSearch] = useSearchParams();
    const [productId,setProductId]=useState(search.get('id'));
    return (  
        <div style={{  minHeight:'813px',backgroundColor:'lightblue'}}>
            <h1>Sản phẩm có id = {productId}</h1>
        </div>
    );
}

export default ProductDetail;