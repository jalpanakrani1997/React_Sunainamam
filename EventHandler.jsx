// // // import React, { useEffect, useState } from 'react';

// // // export default function EventHandler() {
// // //     const [data, setData] = useState({
// // //         id: '',
// // //         category: '',
// // //         image: '',
// // //         price: '',
// // //         title: '',
// // //         description: ''
// // //     });
// // //     useEffect(() => {
// // //         fetchApi();
// // //     }, []);


// // //     function fetchApi() {
// // //         fetch('https://fakestoreapi.com/products?limit=5')
// // //             .then((res) => res.json())
// // //             .then((data) => {
// // //                 // setData(data);
// // //                 setData({
// // //                     id: data[0].id,
// // //                     category: data[0].category,
// // //                     image: data[0].image,
// // //                     price: data[0].price,
// // //                     title: data[0].title,
// // //                     description: data[0].description

// // //                 })

// // //                 console.log(data[0].id);
// // //                 console.log(data[0].category);
// // //                 console.log(data[0].image);
// // //             });
// // //     }


// // //     return (
// // //         <div>
// // //             <h1>EventHandler</h1>
// // //             {data.map((datas) => {
// // //                 return (
// // //                     <>
// // //                         <h2>id: {datas.id}</h2>
// // //                         <p>category: {datas.category}</p>
// // //                         <img src={datas.image} alt="" />
// // //                         <p> <b>price: </b > {datas.price} $</p>
// // //                         <p> <b>title: </b > {datas.title}</p>
// // //                         <p> <b>description: </b > {datas.description}</p>


// // //                     </>
// // //                 );
// // //             })}
// // //             {/* {data.map((datas) => {
// // //                 return (
// // //                     <>
// // //                         <h2>id: {datas.id}</h2>
// // //                         <p>category: {datas.category}</p>
// // //                         <p> <b>price: </b > {datas.price} $</p>

// // //                     </>
// // //                 );
// // //             })} */}
// // //         </div >
// // //     );
// // // }

// //     import React, { useEffect, useState } from 'react';

// //     export default function EventHandler() {
// //         const [data, setData] = useState({
// //             id: '',
// //             category: '',
// //             image: '',
// //             price: '',
// //             title: '',
// //             description: ''
// //         });

// //         useEffect(() => {
// //             setInterval(() => {
// //                 fetchApi()
// //             }, 1000)
// //         }, []);

// //         function fetchApi() {
// //             fetch('https://fakestoreapi.com/products?limit=20')
// //                 .then((res) => res.json())
// //                 .then((data) => {
// //                     // setData(data);
// //                     console.log(data)
// //                     setData({
// //                         id: data.id,
// //                         category: data.category,
// //                         image: data.image,
// //                         price: data.price,
// //                         // console.log(data[0].id);
// //                         // console.log(data[0].category);
// //                         // console.log(data[0].image);
// //                     })
// //                 });
// //         }

// //         return (
// //             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto', padding: '20px' }} >
// //                 <p><b>{data.category}</b></p>
// //                 <img style={{ height: '200px', width: '200px' }} src={data.image} alt={data.title} />
// //                 <p><b>price: </b>{data.price} $</p>
// //                 <b>title: </b>
// //                 <p>{data.title}</p>

// //                 {/* {data.map((datas) => {
// //                         <div key={datas.id} style={{ border: '1px solid #e0e0e0', padding: '15px', textAlign: 'center', backgroundColor: '#f9f9f9', width: '250px', margin: '10px' ,padding:'10px'}}>
// //                     return (
// //                             {/* <h2>id: {datas.id}</h2>
// //                         </div>
// //                     );
// //                 })} */}
// //             </div>
// //         );
// //     }

// import React, { useEffect, useState } from "react";

// export default function EventHandler() {
//     const [data, setData] = useState([]); // Store all products
//     const [currentIndex, setCurrentIndex] = useState(0); // Track current product index

//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products?limit=20")
//             .then((res) => res.json())
//             .then((apiData) => {
//                 setData(apiData); // Store API data
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex < data.length - 1 ? prevIndex + 1 : 0
//             );
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [data]);

//     return (
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #e0e0e0", backgroundColor: "#f9f9f9", textAlign: "center", }}>

//             {data.length > 0 ? (
//                 <div key={data[currentIndex].id}>
//                     <p><b>{data[currentIndex].category}</b></p>
//                     <img style={{ height: "200px", width: "200px" }} src={data[currentIndex].image} alt={data[currentIndex].title} />
//                     <p><b>Price:</b> {data[currentIndex].price} $</p>
//                     <p><b>Title:</b> {data[currentIndex].title}</p>
//                     <p>{data[currentIndex].description}</p>
//                 </div>
//             ) : (
//                 <p>Loading products...</p>
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";

export default function EventHandler() {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState(0);

    
    fetch("https://fakestoreapi.com/products?limit=20")
        .then((res) => res.json())
        .then((apiData) => {
            setData(apiData);
        })
    // useEffect(() => {
    // }, []);

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
