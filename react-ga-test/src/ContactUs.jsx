
//ContactUs.jsx
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
import ReactGA from "react-ga";

function EventTest(){
    ReactGA.event({
        category: 'Editing',
        action: 'Deleted Component',
        label: 'Game Widget'
    });
}

const ContactUs = () => {
    const gaEventTracker = useAnalyticsEventTracker('Contact us');
    return(
        <div>
            <h3>Contact Us</h3>
            <div>
                {/*<a href="#" onClick={()=>gaEventTracker('call')}>Call Us</a>*/}
                <a href="#" onClick={()=>EventTest()}>Call Us</a>
            </div>
        </div>)
};

export default ContactUs;