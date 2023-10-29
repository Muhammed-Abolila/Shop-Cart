import PaginationComp from '../../Utilities/Pagination/Pagination';
import ReactStars from "react-rating-stars-component";
import { ToastContainer } from 'react-toastify';
import { BsFillStarFill } from 'react-icons/bs';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FaRegEdit} from 'react-icons/fa';
import { useParams } from 'react-router';
import GrowExample from '../../Utilities/Spinner/Spinner';
import RateAndCommentHook from '../../../CustomHooks/RateAndCommentHook/RateAndCommentHook';
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
const RateAndComments = ({oneProductData}) => {
  let {id}=useParams();
let [rate,ratingChanged,comment,onCommentChange,onSubmit,btnRef,ReviewsData,
    onDeleteComment,onUpdateComment,user]=RateAndCommentHook(id)
  return (
    <section className='rate-comments'>
      <div className="rate-container d-flex">
        <h2>Ratings</h2>
        <div className="rate mt-1 mx-2">
            <BsFillStarFill/>
            <p>{oneProductData.ratingsAverage}</p>
        </div>
        <div className="mt-1">
          <p>({oneProductData.ratingsQuantity} Ratings)</p>
        </div>
      </div>
      <div className="comments">
        <div className="add-comment">
          <div className="user">
          <h3>{user.name}</h3>
            <ReactStars
              count={5}
              value={rate}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              color="#c1c1c1"
              activeColor="#ffd700"
            />
          </div>
            <textarea 
              value={comment}
              onChange={onCommentChange}
              className='form-control' 
              name="comment" 
              cols="30" 
              rows="2"
              ></textarea>
            <button className='btn' onClick={onSubmit} ref={btnRef}>Add Comment</button>
        </div>
        <div className="show-comments">
          {ReviewsData?(
            ReviewsData.map((review,index)=>
            <div key={index} >
                <hr />
                <div className="d-flex justify-content-between">
                <div>
                <div className="d-flex">
                  <h6>
                    {review.user.name}
                  </h6>
                  <div className="rate mt-0 ms-2">
                    <BsFillStarFill/>
                    <p>{review.rating}</p>
                  </div>
                </div>
                <p>{review.review}</p>
                </div>
                {review.user._id===user._id?(
                  <div>
                    <DeleteBtn data={review} onDelete={onDeleteComment}/>
                    <span onClick={()=>onUpdateComment(review)} className="eddit-icon"><FaRegEdit/></span>
                  </div>
                ):null} 
                </div>
            </div>
            )
          ):<GrowExample/>}
        </div>
      </div>
      {/* <PaginationComp/> */}
      <ToastContainer />
    </section>
  )
}

export default RateAndComments
