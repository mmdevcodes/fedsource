import React, {useState, useEffect} from 'react';
import TimeAgo from 'javascript-time-ago';

// The desired locale
import en from 'javascript-time-ago/locale/en';

// Initialize the desired locale
TimeAgo.locale(en);

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US');

export default ({ date, ...props }) => {
    /**
     * TODO: Look into if this is still needed since moving to mongoDB...
     * TODO: Look into trying to use this again: https://github.com/catamphetamine/react-time-ago
     *
     * The date is originally a string from postgres
     * so we're converting it back to a JS Date object
     * and then some special formatting for attributes
     */
    date = parseInt(date);
    const dateFormatted = new Date(date);
    const dateISO = dateFormatted.toISOString();
    const dateTooltip = dateFormatted.toLocaleString();
    const timeAgoFormatted = timeAgo.format(dateFormatted);


    /**
     * Setinterval with React hooks:
     * https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks/
     */
    const [state, setState] = useState(timeAgoFormatted);

    useEffect(() => {
      const interval = setInterval(() => {
        setState(() => timeAgo.format(dateFormatted));
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
        <time dateTime={dateISO} title={dateTooltip} {...props}>{state}</time>
    );
}