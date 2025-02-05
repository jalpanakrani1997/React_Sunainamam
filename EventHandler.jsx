import React, { useEffect, useState } from "react";

export default function EventHandler() {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState(0);

    
    fetch("https://fakestoreapi.com/products?limit=20")
        .then((res) => res.json())
        .then((apiData) => {
            setData(apiData);
        })

    useEffect(() => {
        const interval = setInterval(() => {
            setProduct((prevIndex) => prevIndex + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const showPro = data[product] || {}
    // const showPro = data[product] || {
    //     category: "Loading...",
    //     image: "https://www.bing.com/th/id/OGC.eef28b80715707b445d8d2ae8d0fcf19?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f24%2f07%2fb5%2f2407b512f6f2eec61cd2f3136242a025.gif&ehk=6l7HP3TMphWoQdYdxMwyg9tIX5q%2bP31eXFaBSIfOCac%3d",
    //     price: "-",
    //     title: "Fetching product...",
    //     description: "Please wait while we fetch the product details...",
    // };
    return (
        <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "400px", margin: "0 auto",
            padding: "20px", border: "1px solid #e0e0e0", backgroundColor: "#f9f9f9", textAlign: "center",
        }}        >
            <div key={showPro.id}>
                <p><b>{showPro.category}</b></p>
                <img style={{ height: "250px", width: "250px" }} src={showPro.image} alt={showPro.title} />
                <p><b>Price:</b> {showPro.price} $</p>
                <p><b>Title:</b> {showPro.title} </p>
                {/* <p>{showPro.description}</p> */}
            </div>
        </div>
    );
}
