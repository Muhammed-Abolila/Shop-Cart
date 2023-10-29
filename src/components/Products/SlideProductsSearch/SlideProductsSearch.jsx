import SlideProductsSearchHook from "../../../CustomHooks/ProductsHooks/SlideProductsSearchHook";
import { Link } from "react-router-dom";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
const SlideSearch = ({getProduct}) => {
 let [categoryData,onChooseCategory,brandData,onChooseBrand,priceFrom,priceTo]=SlideProductsSearchHook(getProduct)
  return (
    <div className='SlideSearch mt-3 mb-5'>
      <div className="category mb-3">
            <h3>Category:-</h3>
            <ul className='list-unstyled p-0 m-0'>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="0" onClick={onChooseCategory}/>
                <label>All</label>
              </li>
              {categoryData?(categoryData.slice(0,10).map((category,index)=>
                <li className='d-flex' key={index}>
                  <input type="checkbox" name="category" value={category._id} onClick={onChooseCategory} />
                  <label>{category.name}</label>
                </li>
              )):null}
              <Link to="/allcategories">
                <li>
                  <div>See More</div>
                  <MdOutlineKeyboardDoubleArrowRight/>
                </li>
              </Link>
            </ul>
      </div>
          <div className="brand mb-3">
              <h3>Brand:-</h3>
              <ul className='list-unstyled p-0 m-0'>
                <li className='d-flex'>
                  <input type="checkbox" name="category" value="0" onClick={onChooseBrand}/>
                  <label>All</label>
                </li>
                {brandData?(brandData.slice(0,10).map((brand,index)=>
                  <li className='d-flex' key={index}>
                    <input type="checkbox" name="category" value={brand._id} onClick={onChooseBrand} />
                    <label>{brand.name}</label>
                  </li>
                  )):null}
                <Link to="/brands">
                <li>
                  <div>See More</div>
                  <MdOutlineKeyboardDoubleArrowRight/>
                </li>
              </Link>
              </ul>
            </div>
            <div className="price">
              <h3>Price:-</h3>
              <ul className='list-unstyled p-0 m-0'>
                <li className='d-flex'>
                  <label>From :- </label>
                  <input className="form-control" type="number"  onChange={priceFrom}/>
                </li>
                <li className='d-flex'>
                  <label>To :- </label>
                  <input className="form-control"  type="number" onChange={priceTo}/>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default SlideSearch
