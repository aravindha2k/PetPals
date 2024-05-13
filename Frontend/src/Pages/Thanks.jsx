import  { useEffect } from 'react'
import './styles/thankyou.css'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/')
        }, 5000);
    },[])

    return (
        <div id='thankyou'>
            <div id="tq-header">
                <h1>Thank You!</h1>
            </div>
            <div className='tick'><p>&#10004;</p></div>
            <div className="main-content">
                <p>Thanks a bunch for Booking the Service. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
            </div>
        </div>
    )
}

export default Thanks