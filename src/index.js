import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const createLink = (fonts, subsets, display, text) => {
    const families = fonts.reduce((acc, font) => {
        const family = font.font.replace(/ +/g, '+');
        const weights = (font.weights || []).join(',');

        return [
            ...acc,
            family + (weights && `:${weights}`),
        ];
    }, []).join('|');

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css?family=${families}`;

    if (text) {
        link.href += `&text=${encodeURIComponent(text)}`;
    }

    if (subsets && Array.isArray(subsets) && subsets.length > 0) {
        link.href += `&subset=${subsets.join(',')}`;
    }

    if (display) {
        link.href += `&display=${display}`;
    }

    return link;
};

const GoogleFontLoader = ({ fonts, subsets, display = null, text = null }) => {
    const [link, setLink] = useState(createLink(fonts, subsets, display, text));

    useEffect(() => {
        if (subsets && text) {
            console.warn("You've supplied react-google-font-loader with the props 'text' and 'subsets', this is unnecessary. https://developers.google.com/fonts/docs/getting_started");
        }
    }, [subsets, text]);

    useEffect(() => {
        document.head.appendChild(link);

        return () => document.head.removeChild(link);
    }, [link]);

    useEffect(() => {
        setLink(createLink(fonts, subsets, display, text));
    }, [fonts, subsets, display, text]);

    return null;
};

GoogleFontLoader.propTypes = {
    fonts: PropTypes.arrayOf(
        PropTypes.shape({
            font: PropTypes.string.isRequired,
            weights: PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ])),
        }),
    ).isRequired,
    subsets: PropTypes.arrayOf(PropTypes.string),
    display: PropTypes.string,
    text: PropTypes.string,
};

export default GoogleFontLoader;
