import { useRef } from "react"

export default function Istanbul() {

    const itemref = useRef<HTMLDivElement | null>(null)

    return (
        <div className='flex justify-between rounded-md min-h-[1030px] bg-[#f4f5fd]' ref={itemref}>
        
        </div>
    )
}
