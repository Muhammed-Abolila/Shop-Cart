import PaginationComp from '../../Utilities/Pagination/Pagination';
import ReactStars from "react-rating-stars-component";
import { ToastContainer } from 'react-toastify';
import { BsFillStarFill } from 'react-icons/bs';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FaRegEdit} from 'react-icons/fa';
import { useParams } from 'react-router';
import RateAndCommentHook from '../../../CustomHooks/RateAndCommentHook/RateAndCommentHook';
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
import Spinner from '../../Utilities/Spinner/Spinner';
import { Row, Col } from 'react-bootstrap';
const RateAndComments = ({oneProductData}) => {
  let {id}=useParams();
let [rate,ratingChanged,comment,onCommentChange,onSubmit,btnRef,ReviewsData,
    onDeleteComment,onUpdateComment,user]=RateAndCommentHook(id);
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
            {user?(<h3>{user.name}</h3>):(<h3>Gest</h3>)}
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
            <button className='btn btn-style' onClick={onSubmit} ref={btnRef}>Add Comment</button>
        </div>
        <div className="show-comments">
          {ReviewsData?(
            ReviewsData.map((review,index)=>
            <div key={index}>
                <hr />
                <Row>
                <Col sm={{span:9}} className="comment-content">
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
                </Col>
                {review.user._id===user._id?(
                  <Col sm={{span:3}} className="btns">
                    <DeleteBtn text="Comment" data={review} onDelete={onDeleteComment}/>
                    <span onClick={()=>onUpdateComment(review)} className="eddit-icon"><FaRegEdit/></span>
                  </Col>
                ):null} 
                </Row>
            </div>
            )
          ):<Spinner/>}
        </div>
      </div>
      {/* <PaginationComp/> */}
      <ToastContainer />
    </section>
  )
}

export default RateAndComments
