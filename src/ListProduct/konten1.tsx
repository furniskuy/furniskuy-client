import './konten1.css';
import bangkuSofa from '../assets/Bangku Sofa.png';

function Konten1() {

  return (
    <>
      <div className='container'>
        <div className='tulisan'>
          
          <div className='BestFurniskuy'>
            <p>Best Furniskuy</p>
          </div>

          <div className='SloganBold'>
            <p>Find Your Best <br/> Furniture</p>
          </div>

          <div className='Description'>
            <p>Find all your furniture needs for anything, <br/> 
            All furniture for offices, home, bussiness and more</p>  
          </div>

          <div className='orderButton'>
            <p>Order Now</p>
          </div>

        
            <div className='Subscriber'>
              <p> <span className='BigFont'> 500+ </span> <br />
             <span className='SmallFont'> Customer</span>  </p>
              <p> <span className='BigFont'>800+ </span>  <br />
              <span className='SmallFont'>Delivery </span> </p>
              <p> <span className='BigFont'> 100+   </span> <br />
              <span className='SmallFont'>Ratings </span></p>
             
            </div>
           
          
        </div>
        <div className='gambar'>
          <img src={bangkuSofa} alt="Bangku Sofa" className='gambarSofa' />


        </div>





      </div>
    </>
  )
}

export default Konten1;
