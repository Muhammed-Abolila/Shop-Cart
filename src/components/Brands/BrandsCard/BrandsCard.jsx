import { Link } from 'react-router-dom';
const BrandsCard = ({item}) => {  
  return (
      <div className='brand-img my-4'>
        <Link to={`/products/brand/${item._id}`}>
          <img className='w-100' src={item.image} alt={item.name} />
        </Link>
      </div>
  )
};
export default BrandsCard;
