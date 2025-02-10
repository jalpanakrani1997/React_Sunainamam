import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function IntegrateBootstrap() {
    const items = [
        {
            id: 1,
            title: "Living Room Sets",
            img: "https://img.freepik.com/premium-photo/large-sofa-with-pillows-white-background_725455-199.jpg",
            price: 1500,
            stock: 3,
        },
        {
            id: 2,
            title: "Sofa for Living room",
            img: "https://images.furnituredealer.net/img/products%2Fdecor-rest%2Fcolor%2F2003_3003%20sofa-b1.jpg",
            price: 1000,
            stock: 5,
        },
        {
            id: 3,
            title: " Dining Table Chairs",
            img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/4765631/1.jpg?7024",
            price: 200,
            stock: 6,
        },
        {
            id: 4,
            title: "Dining Table Sets",
            img: "https://img.freepik.com/free-psd/table-with-tablecloth-dishware-chairs_176382-800.jpg",
            price: 1200,
            stock: 2,
        },
        {
            id: 5,
            title: "Office Table with Chair",
            img: "https://previews.123rf.com/images/kash/kash1009/kash100900029/7918970-set-of-office-furniture-on-a-white-background.jpg",
            price: 1800,
            stock: 1,
        },
        {
            id: 6,
            title: "Office Table",
            img: "https://5.imimg.com/data5/XO/AP/BI/SELLER-13327368/mild-steel-office-table-500x500.jpg",
            price: 400,
            stock: 4,
        },
        {
            id: 7,
            title: "Restaurant Table",
            img: "https://5.imimg.com/data5/SELLER/Default/2021/9/OX/KW/QT/50983634/restaurant-table-500x500.png",
            price: 240,
            stock: 8,
        },
        {
            id: 8,
            title: "Wooden Stools",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNvbLC5MExvdCNrRpzq7bv56e-iXkAd4OVl2UgYEjtkUjbKw1wM2ja30gvu8TSNWzkwY&usqp=CAU",
            price: 140,
            stock: 10,
        },
        {
            id: 9,
            title: "Restaurent Table Chair",
            img: "https://www.thechairmarket.com/cdn/shop/products/Gliss-980_H20-CR2.jpg?v=1677554880&width=640",
            price: 100,
            stock: 8,
        },
        {
            id: 10,
            title: "Restaurant Warehouse",
            img: "https://therestaurantwarehouse.com/cdn/shop/products/XU-DG-304860064-UB19BTN-GG_512x512.jpg?v=1694918647",
            price: 2000,
            stock: 2,
        },
        {
            id: 11,
            title: "Dining Desk and Chair",
            img: "https://s.alicdn.com/@sc04/kf/HTB1mQNxnbYI8KJjy0Faq6zAiVXaC.jpg",
            price: 800,
            stock: 4,
        },
        {
            id: 3,
            title: "Armchair and ottoman",
            img: "https://static.ikea.pr/assets/images/commons/1664354357_39487873_S5.webp",
            price: 1000,
            stock: 2,
        }
    ];

    return (
        <div>

            {/* Navbar */}

            <nav className="navbar navbar-expand-lg bg-light" style={{ padding: "20px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Furniture</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            {/* Slider */}

            <Carousel style={{ marginTop: '-20px', marginBottom: '20px' }}>
                <Carousel.Item>
                    <img src="https://www.alhuzaifa.com/media/catalog/product/cache/c49abd45a369e407cbb1ef28c4f3d4e1/g/a/gabbana_sectional_sofa_set_group4_dark_grey_3_v2.jpg" alt="" height={'840px'} width={'1500px'} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.alhuzaifa.com/media/catalog/product/s/s/sscdf-818-g1_narciso_sectional_sofa_greenish_beige_group1_7_.jpg" alt="" height={'840px'} width={'1500px'} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://img5.su-cdn.com/cdn-cgi/image/width=1000,height=1000/mall/file/2024/01/15/0207bf6eaeec72c19ce5bf03c6865a12.jpg" alt="" height={'840px'} width={'1500px'} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* product */}
            <div className="container mt-4">
                <div className="row">
                    {items.map((product, index) => {
                        const discountPrice = product.price - product.price * 0.2;

                        return (
                            <div className="col-md-4 mb-4" key={product.id} >
                                <div className="card h-100 shadow-sm">
                                    <img src={product.img} className="card-img-top" alt={product.title} height={'360px'} width={'100px'} />
                                    <div className="card-body" style={{alignItems:'center', display:'flex',flexDirection:'column'}}>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">
                                            <del className="text-muted">${product.price}</del> <strong>${discountPrice.toFixed(2)}</strong>
                                        </p>
                                        <p className="card-text text-muted"><small>Stock: {product.stock}</small></p>
                                        <button className="btn btn-primary w-100">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* footer */}
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />

                                    <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="" />

                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Restaurent
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Office
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Living
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Dining
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-1' />
                                    New York, US
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-1' />
                                    infofurns@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-1' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-1' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Furns. Made With  by .
                    <a className='text-reset fw-bold' href=''>HasThemes</a>
                </div>
            </MDBFooter>

        </div>
    )
}