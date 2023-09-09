import React from 'react';
import PaginationComp from '../../Utilities/Pagination/Pagination';
import ReactStars from "react-rating-stars-component";

const RateAndComments = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section className='rate-comments'>
      <div className="rate">
        <h4>التقيمات</h4>
      </div>
      <div className="comments">
        <div className="add-comment">
          <div className="user">
          <h6>محمد ابو ليله</h6>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={false}
              color="#c1c1c1"
              activeColor="#ffd700"
            />
          </div>
            
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
      {/* <PaginationComp/> */}
    </section>
  )
}

export default RateAndComments
