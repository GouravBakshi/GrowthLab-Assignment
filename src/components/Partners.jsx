import React from 'react'
import agora from '../assets/Partners/agora.png'
import azuga from '../assets/Partners/azuga.png'
import eqs from '../assets/Partners/eqs.png'
import genNext from '../assets/Partners/genNext.png'
import ignition from '../assets/Partners/ignition.png'
import bitwarden from '../assets/Partners/bitwarden.png'

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#E4875D] w-full sm:py-15 py-11 my-20">
      <p className="text-2xl text-[#FAE7DF]">Perfected by</p>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-20">
        {/* visible logos on small screens */}
        <img src={azuga} alt="Azuga" className="w-32  object-contain md:hidden" />
        <img src={bitwarden} alt="bitwarden" className="w-40 object-contain md:hidden" />
        
        {/* logos that will be hidden on small screens */}
        <img src={genNext} alt="Gen Next" className="w-24 md:w-28 lg:w-32 object-contain hidden md:block" />
        <img src={agora} alt="Agora" className="w-28 md:w-32 lg:w-36 object-contain hidden md:block" />
        <img src={azuga} alt="Azuga" className="w-32 md:w-40 lg:w-48 object-contain hidden md:block" />
        <img src={ignition} alt="Ignition" className="w-32 md:w-40 lg:w-48 object-contain hidden md:block" />
        <img src={eqs} alt="EQS" className="w-20 md:w-24 lg:w-28 object-contain hidden md:block" />
      </div>
    </div>
  )
}

export default Partners
