import React from 'react'
import PaginationComp from '../../Utilities/Pagination/Pagination'

const RateAndComments = () => {
  return (
    <section className='rate-comments'>
      <div className="rate">
        <h4>التقيمات</h4>
      </div>
      <div className="comments">
        <div className="add-comment">
            <h6>محمد ابو ليله</h6>
            <textarea className='form-control' name="comment" id="" cols="30" rows="2"></textarea>
            <button className='btn'>إضافه تعليق</button>
        </div>
        <div className="show-comments">
            <div>
                <hr />
                <h6>محمد أبو ليله</h6>
                <p>منتج جيد وممتاز</p>  
            </div>
            <div>
                <hr />
                <h6>محمد أبو ليله</h6>
                <p>منتج جيد وممتاز</p>  
            </div>
            <div>
                <hr />
                <h6>محمد أبو ليله</h6>
                <p>منتج جيد وممتاز</p>  
            </div>
            <div>
                <hr />
                <h6>محمد أبو ليله</h6>
                <p>منتج جيد وممتاز</p>  
            </div>
        </div>
      </div>
      <PaginationComp/>
    </section>
  )
}

export default RateAndComments
