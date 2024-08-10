import './BloogCard.css'

function BloogCard() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
      <div className="card_holder">
        <div className="image">
            <img src="/GUisGU7XwAEFXrE.jpeg" alt="image" />
        </div>
        <div>
            <div className="card">
                <div className="card_image">
                    <img src="/dog.png" alt="" />                    
                </div>
 
                <div className="card_body">
                    <span className="card-title">Card title</span>
                    <span className="card-text">Some quick example text to build on the card title and make</span>
                    
                </div>
                <hr className='line' />
                <div className="card_footer">
                    <div className="card_footer_left">
                        <img src="/cat-5646889_640.jpg" alt="" />
                    </div>
                    <div className="card_footer_right">
                        <span className="card-text">Jane doe</span>
                        <span className="card-text">2 days ago</span>
                    </div>
                </div>
            </div>  
        </div>        
      </div>

      </>
    )
  }
  
  export default BloogCard