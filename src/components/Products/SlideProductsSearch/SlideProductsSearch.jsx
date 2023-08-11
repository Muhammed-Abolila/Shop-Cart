import React from 'react'

const SlideSearch = () => {
  return (
    <div className='SlideSearch'>
      <div className="category">
            <h6>الفئه</h6>
            <ul className='list-unstyled p-0 m-0'>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="" />
                <label>أجهزه منزليه</label>
              </li>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="" />
                <label>أجهزه منزليه</label>
              </li>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="" />
                <label>أجهزه منزليه</label>
              </li>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="" />
                <label>أجهزه منزليه</label>
              </li>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="" />
                <label>أجهزه منزليه</label>
              </li>
              <li className='d-flex'>
                <input type="checkbox" name="category" value="" />
                <label>أجهزه منزليه</label>
              </li>
            </ul>
          </div>
          <div className="brand">
              <h6>الماركه</h6>
              <ul className='list-unstyled p-0 m-0'>
                <li className='d-flex'>
                  <input type="checkbox" name="category" value="" />
                  <label>سامسونج</label>
                </li>
                <li className='d-flex'>
                  <input type="checkbox" name="category" value="" />
                  <label>توشيبا</label>
                </li>
                <li className='d-flex'>
                  <input type="checkbox" name="category" value="" />
                  <label>يونيون اير</label>
                </li>
              </ul>
            </div>
            <div className="price">
              <h6>السعر</h6>
              <ul className='list-unstyled p-0 m-0'>
                <li className='d-flex'>
                  <label>من: -  </label>
                  <input className="form-control" type="number" name=""/>
                </li>
                <li className='d-flex'>
                  <label>إلي:- </label>
                  <input className="form-control"  type="number" name=""/>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default SlideSearch
