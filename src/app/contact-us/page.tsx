import { Mail, MessageCircleMore } from "lucide-react"
import React from "react"

const ContactUs = () => {
  return (
    <section className="flex justify-center items-center w-full py-12">
      <div className="flex flex-col sm:flex-row w-[87%] sm:w-[4/5] gap-24">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-4 py-4 sm:py-14 border-b">
            <h3 className="text-3xl sm:text-5xl font-orange">
              Experience IN-STORE
            </h3>
            <p className="font-gilroySemiBold text-lg sm:text-xl">
              Walk into Edify.Club
            </p>
          </div>

          <div className="flex flex-col gap-4 py-6 sm:py-14">
            <h3 className="text-2xl sm:text-4xl font-orange">
              Support & Warranty
            </h3>
            <p className="font-gilroyRegular text-base sm:text-lg flex items-center gap-2">
                <Mail className="size-5"/>
              <a
                className="hover:underline font-gilroySemiBold"
                href="mailto:contact@edify.club"
              >
                contact@edify.club{" "}
              </a>
            </p>
            <p className="font-gilroyRegular text-base sm:text-lg">
              For support or any questions:{" "}
              <a
                className="hover:underline font-gilroySemiBold"
                href="tel:+919513245671"
              >
                +91 9513245671
              </a>
            </p>
            <p className="font-gilroyRegular text-base sm:text-lg">
              (From Mon-Sat 10:00 AM - 7:00 PM)
            </p>
          </div>

          <div className="flex flex-col gap-3 py-6 sm:py-10">
            <h3 className="text-2xl sm:text-4xl font-orange">Sales</h3>
            <p className="font-gilroyRegular text-base sm:text-lg flex items-center gap-2">
                <Mail className="size-5"/>
              <a
                className="hover:underline font-gilroySemiBold"
                href="mailto:contact@edify.club"
              >
                contact@edify.club{" "}
              </a>
            </p>

            <a
              className="flex gap-2 items-center"
              href="https://wa.me/919513245671"
            >
              <MessageCircleMore className="size-5 mb-0.5" />
              <span className="hover:underline font-gilroySemiBold">
                WhatsApp
              </span>
            </a>

            <p className="font-gilroyRegular text-base sm:text-lg">
              For sales related queries:{" "}
              <a
                className="hover:underline font-gilroySemiBold"
                href="tel:+919513245671"
              >
                +91 9513245671
              </a>
            </p>
            <p className="font-gilroyRegular text-base sm:text-lg">
              (From Mon-Sun 10:00 AM - 7:00 PM)
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-4 py-4 sm:py-14">
            <h3 className="text-xl sm:text-3xl font-orange">Store Location</h3>
            <p className="font-gilroyRegular text-base sm:text-lg">
              Edify by Winuall 2nd
              <br />
              Floor, SRS Arcade, 15/2,
              <br />
              Hosa Rd, Kasavanahalli,
              <br />
              Bengaluru, Karnataka 560035, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
