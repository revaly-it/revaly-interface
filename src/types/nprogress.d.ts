declare module 'nprogress' {
    const NProgress: {
        configure: (options: {
            minimum?: number;
            easing?: string;
            speed?: number;
            trickle?: boolean;
            trickleSpeed?: number;
            showSpinner?: boolean;
            parent?: string;
            template?: string;
        }) => void;
        start: () => void;
        done: (force?: boolean) => void;
        inc: (amount?: number) => void;
        set: (n: number) => void;
        remove: () => void;
    };

    export default NProgress;
}
