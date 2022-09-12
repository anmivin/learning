import { jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';

const useMediaQuery = ({ query }) => {
    const [matching, setMatching] = useState(() => window.matchMedia(query).matches);
    useEffect(() => {
        const media = window.matchMedia(query);
        setMatching(media.matches);
        const changeState = () => setMatching(() => media.matches);
        media.addEventListener("change", changeState);
        return () => media.removeEventListener("change", changeState);
    }, [query]);
    return matching;
};

const MediaQuery = ({ children, ...props }) => {
    const getSize = (key, value) => {
        switch (key) {
            case "orientation":
                return `(orientation: ${value})`;
            case "minWidth":
                return `(min-width: ${value}px)`;
            case "maxWidth":
                return `(max-width: ${value}px)`;
            case "minHeight":
                return `(min-height: ${value}px)`;
            case "maxHeight":
                return `(max-height: ${value}px)`;
            case "minResolution":
                return `(min-resolution: ${typeof value === "number" ? value + "dppx" : value})`;
            case "maxResolution":
                return `(max-resolution: ${typeof value === "number" ? value + "dppx" : value})`;
            default:
                return "";
        }
    };
    const line = Object.entries(props)
        .map(([key, value]) => `${getSize(key, value)}`)
        .join("; ");
    const query = useMediaQuery({ query: line });
    return typeof children === "function" ? (jsx(Fragment, { children: children(query) })) : query ? (jsx(Fragment, { children: children })) : null;
};

function usePageVisibility() {
    const [visible, setVisible] = useState(!document.hidden);
    const [count, setcount] = useState(0);
    const ref = useRef([]);
    useEffect(() => {
        const changeVisability = () => {
            if (document.hidden) {
                setcount((count) => count + 1);
            }
            setVisible(!document.hidden);
            ref.current.forEach((changeVisability) => changeVisability(!document.hidden));
        };
        document.addEventListener("visibilitychange", changeVisability);
        return () => {
            document.removeEventListener("visibilitychange", changeVisability);
        };
    }, []);
    const onVisibilityChange = (func) => {
        ref.current = [...ref.current, func];
    };
    return { visible, count, onVisibilityChange };
}

export { MediaQuery, useMediaQuery, usePageVisibility };
//# sourceMappingURL=index.mjs.map
