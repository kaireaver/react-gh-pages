import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
        ReactGA.event({
            category: 'Editing',
            action: 'Deleted Component',
            label: 'Game Widget'
        });
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}
export default useAnalyticsEventTracker;