import { useEffect, useState } from 'react';


function useWindowTitle(windowTitle = '') {
    //feature-1 update Screen title
    const [screen, setScreen] = useState(windowTitle)
    //useEffect to update window title after component mounted into dom
    useEffect(() => {
        document.title = screen;
    })
    return {
        screen,
        setScreen
    };
}
export { useWindowTitle };