import React, { useRef, useEffect } from 'react';
import { createApp } from 'vue';

export const VueWrapper = ({ component, ...props }) => {
    const mountRef = useRef(null);
    const vueAppStart = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Create Vue app instance
        vueAppStart.current = createApp(component, props);
        // Mount it to the ref
        vueAppStart.current.mount(mountRef.current);

        return () => {
            // Unmount on cleanup
            if (vueAppStart.current) {
                vueAppStart.current.unmount();
            }
        };
    }, [component, props]);

    return <div ref={mountRef} className="vue-island-container h-full w-full" />;
};
