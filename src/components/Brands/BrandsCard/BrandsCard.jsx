const BrandsCard = ({img,alt}) => {
  return (
      <div className='brand-img my-4'>
        <img className='w-100' src={img} alt={alt} />
      </div>
  )
}
export default BrandsCard; 
