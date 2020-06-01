import { useEffect, useState } from 'react';

/**
 * A hook to get the window width
 */
export function useWindowWidth(): number {
    function getWidth(): number {
        if (typeof window !== 'undefined') return window.innerWidth;
        return 800;
    }

    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        function handleWidthChange() {
            setWidth(getWidth());
        }

        window.addEventListener('resize', handleWidthChange);

        return () => window.removeEventListener('resize', handleWidthChange);
    });

    return width;
}
