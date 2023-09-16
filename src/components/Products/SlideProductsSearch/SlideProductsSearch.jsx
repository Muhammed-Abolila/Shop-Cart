import SlideProductsSearchHook from "../../../CustomHooks/ProductsHooks/SlideProductsSearchHook";

const SlideSearch = ({getProduct}) => {
 let [categoryData,onChooseCategory,brandData,onChooseBrand,priceFrom,priceTo]=SlideProductsSearchHook(getProduct)
  return (
    <div className='SlideSearch'>
      <div className="category">
            <h6>الفئه</h6>
            <ul className='list-unstyled p-0 m-0'>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="0" onClick={onChooseCategory}/>
                <label>الكل</label>
              </li>
              {categoryData?(categoryData.map((category,index)=>
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
                {brandData?(brandData.map((brand,index)=>
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
