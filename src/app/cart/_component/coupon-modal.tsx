"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export const CouponsModal = ({
  triggerLabel,
  content,
  onApply,
  selectedCouponCode,
}: {
  triggerLabel: React.ReactNode;
  content: React.ReactNode;
  onApply: (code: string) => void;
  selectedCouponCode: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    if (selectedCouponCode) {
      onApply(selectedCouponCode);
      setOpen(false); // Close the modal
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{triggerLabel}</DialogTrigger>
      <DialogContent className="rounded-2xl bg-white p-4 shadow-lg w-fit z-[200] top-[60%]">
        <DialogTitle className="text-base font-gilroySemiBold text-black mb-[10.54px]">
          <p className="flex gap-4 items-center">
            <ChevronLeft className="cursor-pointer" onClick={()=>{
              setOpen(false);
            }}/> 
            <span>Apply coupons</span>
          </p>
        </DialogTitle>
        <div className="flex justify-between items-center w-full bg-white gap-4 p-4 border border-[#D1D1D8] rounded-[13px]">
            <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Coupon Code"
                value={selectedCouponCode}
                readOnly
            />
            <div className="text-base font-gilroyMedium cursor-pointer text-black text-nowrap" onClick={handleApply}>Apply</div>
        </div>

        <div className="h-[1px] bg-[#D1D1D8] w-full my-[14px]"></div>

        <div className="overflow-y-auto">{content}</div>
      </DialogContent>
    </Dialog>
  );
};
