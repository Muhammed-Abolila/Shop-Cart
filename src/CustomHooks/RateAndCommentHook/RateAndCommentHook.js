import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserCreateRate,
  GetAllReviews,
  DeleteReview,
  UpdateReview
} from "../../Redux/Actions/Rate&ReviewActions";
import Notifications from "../../CustomHooks/Notifications";
const RateAndCommentHook = id => {
  let btnRef = useRef();
  let user;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  let dispatch = useDispatch();
  let [rate, setRate] = useState(0);
  let [comment, setComment] = useState("");
  let [reviewId, setReviewId] = useState("");
  let [loading, setLoading] = useState(true);
  const ratingChanged = newRating => {
    setRate(newRating);
  };
  const onCommentChange = e => {
    setComment(e.target.value);
  };

  let response = useSelector(state => state.RateAndReviewReducers.CreateRate);
  let responseData = [];
  if (response) {
    responseData = response;
  }
  let [notify] = Notifications(responseData);
  const onSubmit = async e => {
    if (user) {
      if (user.role === "admin") {
        notify("Admin Can't Rate");
      } else {
        if (rate == 0) {
          notify("Choose Rate");
        } else if (comment == "") {
          notify("Add Comment");
        } else {
          setLoading(true);
          if (e.target.innerHTML == "Add Comment") {
            await dispatch(
              UserCreateRate(id, {
                review: comment,
                rating: rate
              })
            );
          } else if (e.target.innerHTML == "Eddit Comment") {
            await dispatch(
              UpdateReview(reviewId, {
                review: comment,
                rating: rate
              })
            );
            btnRef.current.innerHTML = "Add Comment";
          }
        }
      }
    } else {
      notify("Login");
    }
    setRate(1);
    setComment("");
    setLoading(false);
  };
  // To Notify Errors
  useEffect(() => {
    if (responseData.data) {
      if (responseData.data.errors) {
        notify(responseData.data.errors[0].msg);
      }
    }
  }, [responseData]);
  // To Show Comments
  let Reviews = useSelector(state => state.RateAndReviewReducers.AllReviews);
  let ReviewsData;
  try {
    if (Reviews) {
      ReviewsData = Reviews.data;
    } else {
      ReviewsData = [];
    }
  } catch (e) {}

  useEffect(() => {
    dispatch(GetAllReviews(id));
    setLoading(false);
  }, [loading]);
  // To Delete Comment
  const onDeleteComment = param => {
    dispatch(DeleteReview(param));
    setLoading(!loading);
  };
  // To Update Comment
  const onUpdateComment = review => {
    setReviewId(review._id);
    setRate(review.rating);
    setComment(review.review);
    btnRef.current.innerHTML = "Eddit Comment";
  };
  return [
    rate,
    ratingChanged,
    comment,
    onCommentChange,
    onSubmit,
    btnRef,
    ReviewsData,
    onDeleteComment,
    onUpdateComment,
    user
  ];
};
export default RateAndCommentHook;
