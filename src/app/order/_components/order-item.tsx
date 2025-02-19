import React from 'react'

const OrderItem = () => {
  return (
    <div className='border border-[#DEDEDE] rounded-[10.5px] flex p-2 gap-3'>
        <div className='rounded-[5.833px] bg-[#F7F8FA] py-3 px-1.5'>
            <img src="/media/product-img/dell1.png" alt="product image" width={69} height={51} />
        </div>
        <div className='flex-grow flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <span className='font-gilroySemiBold text-base text-black'>Dell Inspiron 2024</span> 
                <div>
                    <span className='text-xs text-[#C5C5C5] font-gilroySemiBold'>1x </span>
                    <span className='text-black font-gilroySemiBold'>$146.00</span>
                </div>
            </div>

            <div className='text-[#AFAFAF] text-sm font-gilroyMedium'>
                <span>128GB . </span>
                <span>16GB . </span>
                <span>i5 5th Gen</span>
            </div>

            <div className='text-[#AFAFAF] text-sm font-gilroyMedium'>
                Black
            </div>
        </div>
    </div>
  )
}

export default OrderItem