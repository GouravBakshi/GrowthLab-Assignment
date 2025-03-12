import React from 'react'

const Card1 = ({title,head,desc}) => {
    return (
        <div className=' mx-2'>
            <div className="sm:w-[343px] w-[300px] h-[271px] aspect-square bg-white border-[2px] rounded-3xl pt-[44px] pr-[20px] pb-[44px] pl-[20px] flex flex-col justify-center items-center gap-2 border-[#FFDDCF] bg-gradient-to-b from-[#FDF6F4] to-[#FFE9DF]">
                <h2 className="text-6xl font-semibold mb-2 bg-gradient-to-b from-[#E4875D] to-[#FFCBB4] bg-clip-text text-transparent">{title}</h2>
                <p className="text-[#E4875D] font-medium text-[28px] text-center">
                    {head}
                </p>
                <p className="text-[#333132] font-light text-[15px] text-center">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Card1