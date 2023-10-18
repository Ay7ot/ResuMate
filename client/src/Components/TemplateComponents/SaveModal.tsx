import { useEffect, useRef, useState } from "react";

export default function SaveModal() {

    const modalRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [modalRef]);


    return (
        <>
            {
                isOpen &&
                <div ref={modalRef} className={`bg-blue-300 h-[300px] w-[300px]`}>
                   
                </div>
            }
        </>
    )
}
