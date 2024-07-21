import Image from 'next/image';

import fiver from '@/public/icons/fiver.svg';
import upwork from '@/public/icons/upwork.svg';
import xgrid from '@/public/icons/xgrid.jpg';



export const FiverIcon = () => {
    return (
        <Image      className='pt-2 pl-2 '
        src={fiver}
       
         alt="Fiver Icon" />
    )
}

export const UpworkIcon = () => {
    return (
        <Image className='pt-2 pl-2'
        src={upwork} alt="Upwork Icon" 
        
        
       


        />
    )
}

export const XgridIcon = () => {
    return (
        <Image className='pt-3 pl-3'
        width={45}
        height={45}
        src={xgrid} alt="Xgrid Icon" 
        
        
        />
    )
}
    