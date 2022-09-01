'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const useMediaQuery = ({ query }) => {
    const [matching, setMatching] = react.useState(() => window.matchMedia(query).matches);
    react.useEffect(() => {
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
    return typeof children === "function" ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children(query) })) : query ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children })) : null;
};

function usePageVisibility() {
    const [visible, setVisible] = react.useState(!document.hidden);
    const [count, setcount] = react.useState(0);
    const ref = react.useRef([]);
    react.useEffect(() => {
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

exports.MediaQuery = MediaQuery;
exports.useMediaQuery = useMediaQuery;
exports.usePageVisibility = usePageVisibility;
//# sourceMappingURL=index.js.map
