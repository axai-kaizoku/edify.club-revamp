import React from "react"

const WarrantyPolicy = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col w-[87%] sm:w-4/5">
        <div className="flex flex-col text-center gap-8 py-4 sm:py-14 border-b">
          <h3 className="text-3xl sm:text-5xl font-orange">Warranty Policy</h3>
          <p className="font-gilroySemiBold text-lg sm:text-xl">
            Edify is committed to delivering high-quality refurbished products
            that meet your expectations. This warranty policy outlines the terms
            and conditions under which Edify offers warranty service for its
            refurbished hardware products and accessories.
          </p>
        </div>

        <div className="flex flex-col gap-8 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">Overview</h3>
          <p className="font-gilroyRegular text-base sm:text-lg">
            This warranty applies only to products purchased directly from
            Edify's official website or physical store. Products purchased from
            third-party marketplaces where Edify is a seller are not covered
            under this warranty.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">Warranty Period</h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
              <strong>For All Products Except Apple:</strong> The standard
              warranty is valid for one year from the date of original retail
              purchase by the end-user purchaser.
            </li>
            <li>
              <strong>For Apple Products:</strong> The warranty is valid for six
              months from the date of original retail purchase by the end-user
              purchaser.
            </li>
            <li>
              <strong>Extended Warranty:</strong> Customers may purchase an
              extended warranty, which provides additional coverage for up to
              two years. The extended warranty terms are valid in addition to
              the standard warranty and extend the total coverage period
              accordingly.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">What is Covered?</h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
              Edify warrants that the refurbished hardware product and
              refurbished accessories contained in the original packaging are
              free from defects in materials and workmanship when used normally
              in accordance with Edify's published guidelines. These
              guidelines include information in technical specifications, user
              manuals, and service communications.
            </li>
            <li>
              This warranty covers all hardware components of the refurbished
              product, including the main device and any branded accessories
              that are included in the original packaging.
            </li>

            <ul className="list-disc">
              <li>Screen</li>
              <li>Motherboard</li>
              <li>Keyboard</li>
              <li>Hard drive and memory (RAM)</li>
              <li>Accessories including in the original packaging</li>
              <li>
                Edify will service covered hardware issues resulting from
                manufacturing defects or normal use during the warranty period.
              </li>
            </ul>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">
            What is Not Covered?
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
              This warranty does not cover any third-party accessories or
              components used with the refurbished product, even if they are
              purchased from Edify.
            </li>
            <li>
              Any software, whether included with or installed on the
              refurbished product, is not covered by this warranty. This
              includes operating systems, applications, and other software
              components. Please refer to the licensing agreement that
              accompanies the software for details regarding your rights and
              responsibilities.
            </li>
            <li>
              Damage due to accidents, misuse, or unauthorized modifications.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Exclusions from Warranty
          </h3>
          <div>
            <p className="sm:text-lg font-gilroyRegular">
              This warranty does not apply to:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
              <li>
                Consumable parts, such as batteries, unless failure has occurred
                due to a defect in materials or workmanship.
              </li>
              <li>
                Superficial damage, including but not limited to scratches,
                dents, and broken plastic on ports, unless the damage occurred
                due to a defect in materials or workmanship.
              </li>
              <li>
                Damage caused by the use of third-party components that do not
                meet the specifications of the refurbished product.
              </li>
              <li>
                Damage caused by external factors, including but not limited to
                accidents, abuse, misuse, fire, liquid contact, earthquake, or
                other external causes.
              </li>
              <li>
                Damage caused by operating the product outside of Edify’s
                published guidelines or in an environment not recommended by
                Edify.
              </li>
              <li>
                Damage resulting from unauthorized repairs, modifications, or
                upgrades performed by anyone other than an authorized Edify
                service provider.
              </li>
              <li>
                Normal wear and tear or defects due to the aging of the
                refurbished product.
              </li>
              <li>Products with removed or defaced serial numbers.</li>
              <li>
                Products reported as stolen or those that cannot be accessed due
                to security measures like passcodes, and where ownership cannot
                be verified.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Your Responsibilities
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            If your refurbished product is capable of storing software programs, data, and other information, you are responsible for maintaining periodic backup copies of the information stored on the product. Edify is not responsible for any data loss that may occur during repair, replacement, or any other warranty service.
            </li>
            <li>
            Before receiving warranty service, you may be required to provide proof of purchase, respond to questions designed to assist with diagnosing potential issues, and follow Edify's instructions for troubleshooting and seeking warranty service.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">
            How to Obtain Warranty Service
          </h3>

          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            Contact Edify Customer Support via email at{" "}
            <a
              className="hover:underline font-gilroySemiBold"
              href="mailto:contact@edify.club"
            >
              contact@edify.club{" "}
            </a>
            or call{" "}
            <a
              className="hover:underline font-gilroySemiBold"
              href="tel:+919513245671"
            >
              +91 9513245671
            </a>{" "}
            (Mon-Sat, 10 AM - 7 PM). Provide proof of purchase and a detailed
            issue description.
            </li>
            <li>
            Once the complaint is raised, Edify will attempt to resolve the issue remotely within 24 hours to 48 hours. Our support team may guide you through troubleshooting steps or perform a remote diagnosis to address the issue.
            </li>
            <li>If the engineer’s visit does not resolve the issue, Edify may require you to send the unit to our service facility. At the facility, the product will undergo a thorough inspection and necessary repairs will be made.
            </li>
            <li>If, after the facility inspection, the issue still cannot be resolved, Edify may replace the unit with another one of equivalent value and specifications</li>
            <li>If a replacement is provided, the replacement product will be covered under the remaining term of the original warranty. Refunds, if offered, will be processed based on the original payment method.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-4xl font-orange">
          Shipping and Handling
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            If warranty service is required due to a defect covered under this policy, Edify will cover the shipping costs to and from the service center. If the service request is found to be ineligible, you may be responsible for the shipping costs.
            </li>
            <li>
            When returning a product for warranty service, ensure that it is properly packaged to prevent damage during transit. Edify is not responsible for any damage that occurs during shipping due to improper packaging.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Limitation of Liability
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            No Guarantee of Error-Free Operation
            </li>
            <li>
            Edify does not guarantee that the operation of the refurbished product will be uninterrupted or error-free. The warranty covers defects in materials and workmanship, but it does not cover software issues, user errors, or other non-hardware-related problems.

            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 ">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Limitation of Damages
          </h3>
          <p className="text-base sm:text-lg font-gilroyRegular">
          Except as provided in this warranty and to the maximum extent permitted by law, Edify is not responsible for direct, indirect, special, incidental, or consequential damages resulting from any breach of warranty or condition, or under any other legal theory, including but not limited to loss of use, loss of revenue, loss of actual or anticipated profits (including loss of profits on contracts), loss of the use of money, loss of anticipated savings, loss of business, loss of opportunity, loss of goodwill, or loss of reputation.

          </p>
        </div>

        <div className="flex flex-col gap-6 py-6 sm:py-14">
          <h3 className="text-2xl sm:text-4xl font-orange">
          Changes to the Warranty Policy
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg font-gilroyRegular">
            <li>
            Edify reserves the right to modify or update this warranty policy at any time without prior notice. Any changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically for any updates.
            </li>
            <li>
            Service and support for warranty claims will be provided based on parts availability and Edify's service center capabilities. Certain models may require additional lead time for repair or replacement due to component sourcing or specific part requirements.
            </li>
            <li>Edify is not liable for delays, interruptions, or inability to fulfil warranty obligations due to events beyond its reasonable control, including but not limited to natural disasters, acts of war, terrorism, government restrictions, pandemics, strikes, supply shortages, or other unforeseen events. In such cases, warranty obligations will be adjusted or deferred until the resolution of the event, as permitted by law.</li>
            <li>This warranty is nontransferable and applies only to the original purchaser of the refurbished product. Any resale or transfer of the product voids this warranty.
            </li>
            <li>
            Edify. is committed to providing a respectful and professional environment for both customers and employees. Customers are expected to treat our staff with courtesy and respect. Any abusive behaviour—such as verbal or physical threats, harassment, or disruptive conduct—will not be tolerated and may result in the limitation of warranty services or support.
            Conversely, Edify Technologies Ltd. expects its employees to uphold the highest standards of professionalism. If a customer feels they have experienced abusive or inappropriate language from our staff, they are encouraged to report the incident to management immediately. Such reports will be taken seriously and investigated thoroughly. Appropriate action will be taken to address any employee behaviour that does not align with our commitment to respect and professionalism.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 ">
          <h3 className="text-2xl sm:text-4xl font-orange">
            Governing Law
          </h3>
          <p className="text-base sm:text-lg font-gilroyRegular">
          This warranty policy is governed by the laws of the jurisdiction in which the purchase was made. Any disputes arising from this warranty will be subject to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WarrantyPolicy
