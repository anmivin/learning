(function (jsxRuntime, ReactDOM, react) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

    const Example = () => (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h1", { children: "Device Test!" }), jsxRuntime.jsxs(MediaQuery, { minWidth: 1224, children: [jsxRuntime.jsx("p", { children: "You are a desktop or laptop" }), jsxRuntime.jsx(MediaQuery, { minWidth: 1824, children: jsxRuntime.jsx("p", { children: "You also have a huge screen" }) })] }), jsxRuntime.jsx(MediaQuery, { maxWidth: 1224, children: jsxRuntime.jsx("p", { children: "You are a tablet or mobile phone" }) }), jsxRuntime.jsx(MediaQuery, { minResolution: "2dppx", children: (matches) => matches ? jsxRuntime.jsx("p", { children: "You are retina" }) : jsxRuntime.jsx("p", { children: "You are not retina" }) })] }));

    const App = () => {
        const { count, visible, onVisibilityChange } = usePageVisibility();
        react.useEffect(() => {
            onVisibilityChange((isVisible) => {
                console.log("first handler", isVisible);
            });
            onVisibilityChange((isVisible) => {
                console.log("second handler", isVisible);
            });
        }, []);
        const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
        const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
        const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
        const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
        const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { children: [" ", "\u0412\u044B \u043F\u043E\u043A\u0438\u043D\u0443\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443: ", count, " \u0440\u0430\u0437 \u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430?", " ", visible ? "да" : "нет"] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h1", { children: "Device Test!" }), isDesktopOrLaptop && jsxRuntime.jsx("p", { children: "You are a desktop or laptop" }), isBigScreen && jsxRuntime.jsx("p", { children: "You have a huge screen" }), isTabletOrMobile && jsxRuntime.jsx("p", { children: "You are a tablet or mobile phone" }), jsxRuntime.jsxs("p", { children: ["Your are in ", isPortrait ? "portrait" : "landscape", " orientation"] }), isRetina ? jsxRuntime.jsx("p", { children: "You are retina" }) : jsxRuntime.jsx("p", { children: "You are not retina" })] }), jsxRuntime.jsx(Example, {})] }));
    };

    const root = ReactDOM__default["default"].createRoot(document.getElementById('root'));
    root.render(jsxRuntime.jsx(App, {}));

})(jsxRuntime, ReactDOM, React);
