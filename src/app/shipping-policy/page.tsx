import React from "react";

const ShippingPolicy = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col w-[87%] sm:w-4/5">
        <div className="flex flex-col text-center gap-8 py-4 sm:py-14 border-b">
          <h3 className="text-3xl sm:text-5xl font-orange">Shipping Policy</h3>
          <p className="font-gilroySemiBold text-lg sm:text-xl">
            All orders are processed within 2 to 4 business days (excluding holidays) after receiving your order confirmation email. You will receive another notification when your order has been shipped.
          </p>
        </div>

        <div className="flex flex-col gap-8 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">Shipping Rates</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
            For calculated shipping rates: Shipping charges for your order will be calculated and displayed at checkout.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">Delivery Issues</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
            If you haven’t received your order within 15 days of receiving your shipping confirmation email, please contact us with your name and order number, and we will look into it for you.
          </p>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
          <li>
              Email: <a
              className="hover:underline font-gilroySemiBold"
              href="mailto:contact@edify.club"
            >
              contact@edify.club{" "}
            </a> 
            </li>
            <li>
              Phone: <a
              className="hover:underline font-gilroySemiBold"
              href="tel:+919513245671"
            >
              +91 9513245671
            </a> (Mon-Sat, 10 AM - 7 PM)
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">Returns & Refunds</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
            If, for any reason, you are not completely satisfied with a purchase, we invite you to review our policy on refunds and returns.
          </p>
          <p className="font-gilroyRegular text-base sm:text-lg">
            Please refer to our <a className="hover:underline font-gilroySemiBold" href="/return-policy">Return Policy</a> for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
