import discImage from "../../../assets/image/discount/discount.png";
const DescountComp = () => {
  return (
        <section className='my-5'>
            <div className="discount" style={{backgroundImage:`url(${discImage})`}}>
              <div className="caption">
                <h2>Exclusively High Quality Products</h2>
                <h3>Nikon Normal <br/>55mm F/1.2<br/> manual Focus Lens</h3>
              </div>
            </div>
        </section>
  )
}
export default DescountComp;
