import { Carousel, Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import CartPageHook from '../../../CustomHooks/CartHooks/CartPageHook';
import ItemDetailsHook from '../../../CustomHooks/ProductsHooks/ItemDetailsHook';
import FormSpinner from '../../Utilities/FormSpinner/FormSpinner';
const ItemDetail = ({oneProduct,oneCategory,oneBrand}) => {
    let [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]=CartPageHook()
    let [indexOfselectedColor,onColorChange,onAddToCart,display]=ItemDetailsHook(oneProduct,reload,setReload)
  return ( 
    <section className='item-details my-3 py-4'>
                <Row> 
                    <Col lg={4}>
                    <Carousel>
                        {oneProduct.images?(
                           oneProduct.images.map((image,index)=>{return(
                            <Carousel.Item key={index}>
                                <div className='slider-img'>
                                    <img src={image} alt={oneProduct.title} />
                                </div> 
                            </Carousel.Item>
                           )}) 
                        ):null}
                    </Carousel>
                </Col>
                <Col lg={8}>
                    <div className='item-content mt-4'>
                    <Row>
                        <Col md={6}>
                        <div className="title">
                            <h2>Title :-</h2>
                            <p className=" mt-2">{oneProduct.title}</p>
                        </div>
                        <div className="category">
                            <h2>Category :-</h2>
                            <p className=" mt-2">{oneCategory.name}</p>
                        </div>
                        <div className="brand">
                            <h2>Brand :-</h2>
                            <p className=" mt-2">{oneBrand.name}</p>
                        </div>
                        </Col>
                        <Col md={6}>
                        {oneProduct.availableColors?(
                            <>
                            {oneProduct.availableColors.length>=1?(
                                <div className="color-container">
                                    <h2>Colors :-</h2>
                                    <ul className="color">
                                        {oneProduct.availableColors.map((color,index)=>
                                            <li key={index} className=" mt-2" style={{backgroundColor:`${color}`,border:indexOfselectedColor===index?"2px solid #000":"2px solid transparent"}} onClick={()=>onColorChange(color,index)}></li>
                                            )}
                                    </ul>
                                </div>
                                ):null}
                                </>
                        ):null}
                            <div className="details">
                                <h2>Details:-</h2>
                                <p className=" mt-2">{oneProduct.description}</p>
                            </div>
                            <div className='price'>
                                {oneProduct.priceAfterDiscount?(
                                    <>
                                    <h2>Price :- </h2>
                                    <div className="price-container mt-2">
                                        <p className="me-2 price-offer">{oneProduct.price} EGP
                                        <span></span>
                                        </p> 
                                        <p>{oneProduct.priceAfterDiscount} EGP</p>
                                    </div>
                                    </>
                                ):(
                                    <>
                                    <h2>Price :- </h2>
                                    <p>{oneProduct.price} EGP</p>
                                    </> 
                                )}
                                
                            </div>
                        </Col>
                    </Row>
                    <div className="btns">
                        <button className='btn btn-style' onClick={onAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </Col>
        </Row>
        <ToastContainer/>
        <FormSpinner displayStyle={display} />
    </section>

  )
};
export default ItemDetail
