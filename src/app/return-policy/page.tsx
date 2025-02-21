import React from "react"

const ReturnPolicy = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col w-[87%] sm:w-4/5">
        <div className="flex flex-col text-center gap-8 py-4 sm:py-14 border-b">
          <h3 className="text-3xl sm:text-5xl font-orange">Return Policy</h3>
          <p className="font-gilroySemiBold text-lg sm:text-xl">
            At Edify, we are committed to ensuring your satisfaction with
            every purchase. If for any reason you are not completely satisfied
            with your order, we invite you to review our returns and refunds
            policy outlined below.
          </p>
        </div>

        <div className="flex flex-col gap-8 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Eligibility for Returns
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
              You can return your order within 14 days of receiving it if:
            </li>
            <li>
              The product is physically damaged, defective, or significantly
              different from its description on the product detail page.
            </li>
            <li>
              The product is missing parts, accessories, or any included items.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Conditions for Return
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
              Product must be returned in its original condition with all
              packaging, tags, and accessories intact.
            </li>
            <li>
              The product must not have been damaged while in your possession,
              and it must be the same item that was shipped to you.
            </li>
            <li>
              Any device that stores personal information must have all such
              information removed prior to returning. Edify shall not be
              liable for any misuse or unauthorized use of such information.
            </li>
            <li>
              Products that were purchased by mistake or for buyer’s remorse
              (e.g., incorrect model or color) may not be eligible for return.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">Return Process</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
            To initiate a return, contact our customer support at{" "}
            <a
              className="hover:underline font-gilroySemiBold"
              href="mailto:contact@edify.club"
            >
              contact@edify.club{" "}
            </a> or call{" "}
            <a
              className="hover:underline font-gilroySemiBold"
              href="tel:+919513245671"
            >
              +91 9513245671
            </a>{" "} (Mon-Sat, 10 AM - 7 PM). Do not return
            items without authorization, as they will not be accepted.
          </p>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            Do not return items without first requesting a return. Items sent back without authorization will not be accepted.
            </li>
            <li>
            For certain products, a technician visit may be scheduled to evaluate the condition of the item. The technician’s report will determine the eligibility of the return or replacement.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">Refund Process</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
          Once we receive and inspect the returned goods, we will process your refund within 14 days. Refunds will be issued using the same method of payment as the original order. You will not incur any additional fees for the refund.
          </p>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            Original shipping costs will not be refunded, except in cases where the return is due to an error on Edify’s part.
            </li>
            <li>
            A restocking fee of 10% of purchase cost may apply in certain cases, depending on the condition of the returned item.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Non-Returnable Items
          </h3>
          <p className="font-gilroyRegular text-base sm:text-lg">Certain items may not be eligible for return, including but not limited to:</p>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>Products that have been used or are not in their original condition.</li>
            <li>Products damaged due to improper use or handling by the customer.</li>
            <li> Items that were customized or personalized at the time of purchase.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">Warranty and Service</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
          Edify reserves the right to change the method by which we provide service, and the eligibility of your product for return or replacement may vary based on your location. Service options, replacement availability, and response times may differ depending on your state or city.
          </p>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">Policy Changes</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
          Edify reserves the right to modify or update this returns and refunds policy at any time without prior notice. Any changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically for any updates.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">Company Rights</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
          Edify reserves the right to:
          </p>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>Refuse a return if the product does not meet the above conditions.</li>
            <li>Limit the number of returns or exchanges for customers with a history of excessive returns.</li>
            <li>Determine the eligibility of a product for return, replacement, or refund at its sole discretion.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">Contact Us</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
            If you have any questions, reach out to us at:
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
          <p className="font-gilroyRegular text-base sm:text-lg">Thank you for choosing Edify. Your satisfaction is our priority, and we are here to help with any issues you may encounter.</p>
        </div>
      </div>
    </section>
  )
}

export default ReturnPolicy
