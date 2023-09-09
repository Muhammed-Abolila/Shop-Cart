import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../../Redux/Actions/CategoryAction';
import { getBrandsApi } from '../../../Redux/Actions/BrandActions';
const SlideSearch = ({getProduct}) => {
  // when first load
  let dispatch=useDispatch();
  useEffect(()=>{
    const getData=async()=>{
      await dispatch(getCategoryApi());
      await dispatch(getBrandsApi());
    }
    getData()
  },[]);
  let categoryData=useSelector((state)=>state.CategoryReducer.CategoryApi);
  let brandData=useSelector((state)=>state.BrandReducer.BrandApi);
// On Choose Category
  let [Categoryselected,setCategoryselected]= useState([])
  const onChooseCategory=(e)=>{
    let value=e.target.value;
    if(value==="0"&&e.target.checked===true){
      setCategoryselected([])
    }else{
      if(e.target.checked===true){
        setCategoryselected([...Categoryselected,value])
      }else if(e.target.checked===false){
        let newCategoryArray=Categoryselected.filter((id)=>id!=value);
        setCategoryselected(newCategoryArray);
      }
    };
    
  };
  // to make query string
  let queryCategory='' 
  useEffect(()=>{
    queryCategory=Categoryselected.map((category)=>"category[in][]="+category).join("&");    
    localStorage.setItem("Categoryselected",queryCategory);
    setTimeout(()=>{
      getProduct()
    },1000);
  },[Categoryselected])


  // On Choose Brand
  let [brandSelected,setBrandSelected]=useState([])
  const onChooseBrand=(e)=>{
    let brandValue=e.target.value;
    if(brandValue==="0"&&e.target.checked===true){
      setBrandSelected([])
    }else{
      if(e.target.checked===true){
        setBrandSelected([...brandSelected,brandValue])
      }else if(e.target.checked===false){
        let newBrandArray=brandSelected.filter((id)=>id!=brandValue);
        setBrandSelected(newBrandArray)
      } 
    }
  };

  // to make query string
  let queryBrand='';
  useEffect(()=>{
    queryBrand=brandSelected.map((brand)=>'brand[in][]='+brand).join("&");
    localStorage.setItem("Brandselected",queryBrand);
    setTimeout(()=>{
      getProduct()
    },1000)
  },[brandSelected]);

  // on choose starting price
  let [startingPrice,setStartingPrice]=useState("0");
  const priceFrom=(e)=>{
    setStartingPrice(e.target.value);
  }
  // on choose ending price
  let [endingPrice,setEndingPrice]=useState("0");
  const priceTo=(e)=>{
    setEndingPrice(e.target.value)
  };
  // to make query string
  let priceFromQuery,priceToQuery;
  useEffect(()=>{
    if(startingPrice==''||startingPrice<=0){
      priceFromQuery='';
    }else{
      priceFromQuery=`price[gt]=${startingPrice}`;
    }
    localStorage.setItem("startingPrice",priceFromQuery);
    if(endingPrice==''||endingPrice<=0){
      priceToQuery='';
    }else{
      priceToQuery=`price[lte]=${endingPrice}`;
    }
    localStorage.setItem("endingPrice",priceToQuery);
    setTimeout(()=>{
      getProduct()
    },1000)
  },[startingPrice,endingPrice])
  return (
    <div className='SlideSearch'>
      <div className="category">
            <h6>الفئه</h6>
            <ul className='list-unstyled p-0 m-0'>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="0" onClick={onChooseCategory}/>
                <label>الكل</label>
              </li>
              {categoryData.data?(categoryData.data.map((category,index)=>
                <li className='d-flex' key={index}>
                  <input type="checkbox" name="category" value={category._id} onClick={onChooseCategory} />
                  <label>{category.name}</label>
                </li>
              )):null}
            </ul>
          </div>




          <div className="brand">
              <h6>الماركه</h6>
              <ul className='list-unstyled p-0 m-0'>
                <li className='d-flex'>
                  <input type="checkbox" name="category" value="0" onClick={onChooseBrand}/>
                  <label>الكل</label>
                </li>
                {brandData.data?(brandData.data.map((brand,index)=>
                  <li className='d-flex' key={index}>
                    <input type="checkbox" name="category" value={brand._id} onClick={onChooseBrand} />
                    <label>{brand.name}</label>
                  </li>
                  )):null}
              </ul>
            </div>






            <div className="price">
              <h6>السعر</h6>
              <ul className='list-unstyled p-0 m-0'>
                <li className='d-flex'>
                  <label>من: -  </label>
                  <input className="form-control" type="number"  onChange={priceFrom}/>
                </li>
                <li className='d-flex'>
                  <label>إلي:- </label>
                  <input className="form-control"  type="number" onChange={priceTo}/>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default SlideSearch
