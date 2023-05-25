import './descProduct.css';
import SofaBesar from '../assets/Sofa Besar.png';


function DescProduct() {

    return (

        <>
            <div className='kontainer'>
                
                    <img src={SofaBesar} alt="Sofa Besar" className='SofaBesar'/>
               

                <div className='description'>
                    <div className='sofayangnyaman'>
                        <p> <span className='sofa'> Sofa </span> Yang Nyaman</p>
                    </div>
                    <div className='textparagraf'>
                        <p>Find all Your furniture needs foe anything,
                            All furniture for offices, home, businesses and more</p>
                    </div>
                    <div className='list'>
                        <div className='kiri'>
                            <ul>
                                <li>Interior Stretegy</li>
                                <li>Creative Designer</li>
                                <li>Interior Architecture</li>
                            </ul>
                        </div>
                        <div className='kanan'>
                            <ul>
                                <li>Update Designer</li>
                                <li>Event Decoration</li>
                                <li>21 Years Experience</li>
                            </ul>
                        </div>
                    </div>
                    <div className='learnmore'>
                        <p>
                            Learn more
                        </p>
                    </div>

                </div>

            </div>

        </>



    )

}

export default DescProduct;