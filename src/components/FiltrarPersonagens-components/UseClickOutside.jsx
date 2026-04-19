import { useEffect } from "react";

export function UseClickOutside(refs, handler) {
    useEffect(()=>{
        const listener = (e) => {
            if(refs.some((ref => !ref.current || ref.current.contains(e.target)))) {
                return;
            };
            handler(e);
        };

        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener("mousedown", listener);
    }, [refs, handler])
};