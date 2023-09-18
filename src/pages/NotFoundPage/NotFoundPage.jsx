import React from 'react'
import errorImg from "../../assets/image/error.svg"
const NotFoundPage = () => {
  return (
        <div className="notfound">
            <div className="imgContainer">
                <img src={errorImg} alt=""/>
            </div>
        </div>
  )
}

export default NotFoundPage
