import React from "react";

interface CouponCardProps {
    coupon: any; 
    key: number; 
    selected: boolean;
    onClick: () => void;
}

export const CouponCard = ({ coupon, selected, onClick }: CouponCardProps) => {
  return ( 
    <div className={`relative rounded-[8px] ${
        selected ? "bg-[#b3d4bc46]" : "bg-[#c4c4c446]"
      } h-fit overflow-hidden w-full px-10 cursor-pointer`} onClick={onClick}> 
      <div className="absolute w-8 h-8 bg-white rounded-full -left-4 top-1/2 transform -translate-y-1/2"></div>
      <div className="absolute w-8 h-8 bg-white rounded-full -right-4 top-1/2 transform -translate-y-1/2"></div>

      {/* Coupon Content */}
      <div className="h-full flex justify-center items-center py-4 w-full mx-auto cursor-pointer">
        <div className=" h-full pr-4 flex flex-col justify-center">
          <div className="text-[11.44px] font-gilroyRegular text-black opacity-30 text-center">Use:</div>
          <div className="font-gilroySemiBold text-[17.159px] text-black">{coupon?.code}</div>
        </div>

        <div className="gap-[3px] pl-4 flex flex-col w-full border border-l-2 border-[rgba(102,102,102,0.40)] border-r-0 border-y-0 border-dashed">
          <div className="text-2xl font-gilroySemiBold text-black">{coupon?.discount}</div>
          <div className="text-xs font-gilroyRegular text-[#6C6C6C]">{coupon?.description}</div>
          <div className="text-[10px] text-[#6c6c6c9e]">{coupon?.validity}</div>
        </div>
      </div>
    </div>
  );
};


// bg-[#c4c4c446] 
// bg-[#b3d4bc46]