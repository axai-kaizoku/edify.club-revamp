import { Metadata } from "next"
import { privacyPolicyInfo } from "@/constants"
import { PrivacyPolicyInfoProps } from "@/types"
import { siteConfigPrivacyPolicy } from "@/config/site"

// export const metadata: Metadata = {
//   title: siteConfigPrivacyPolicy.name,
//   description: siteConfigPrivacyPolicy.description,
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfigPrivacyPolicy.url,
//     title: siteConfigPrivacyPolicy.name,
//     description: siteConfigPrivacyPolicy.description,
//     siteName: siteConfigPrivacyPolicy.name,
//     images: `${siteConfigPrivacyPolicy.url}/og_main.png`,
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfigPrivacyPolicy.name,
//     description: siteConfigPrivacyPolicy.description,
//     images: `${siteConfigPrivacyPolicy.url}/og_main.png`,
//   },
//   icons: {
//     icon: "/logo.png",
//   },
// }

export default function PrivacyPolicy() {
  const privacyPolicy: PrivacyPolicyInfoProps = privacyPolicyInfo
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col w-[87%] sm:w-4/5  ">
        <div className="flex flex-col text-center gap-8 py-4 sm:py-14 border-b">
          <h3 className="text-3xl sm:text-5xltext-2xl sm:text-5xl font-orange">
            We care about your privacy
          </h3>
          <p className="  font-gilroySemiBold text-lg sm:text-xl">
            Your privacy is important to us at Edify. We respect your privacy
            regarding any <br /> information we may collect from you across our
            website.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl sm:text-4xl font-orange py-6 sm:py-14">
            PRIVACY POLICY
          </h3>
          <div className="flex flex-col gap-8">
            <p className="   font-gilroyRegular  text-base sm:text-lg  ">
              {`Kuzagan Technologies Private Limited (referred as Company or "we"
							or "us" or "our") is the owner of the website domain
							at https://winuall.com/ and mobile application "[⚫]" available at
							Google Play Store/Apple App Store; (referred as "Platform"); and
							any service availed by Users (hereinafter referred to as "you",
							"your" or "User") through the Platform is conditioned upon your
							acceptance of the terms and conditions contained in Terms of
							Service as available on Platform and this privacy policy ("Privacy
							Policy").`}
            </p>
            <p className="  font-gilroySemiBold text-base sm:text-lg  ">
              THIS PRIVACY POLICY IS AN ELECTRONIC RECORD IN THE FORM OF AN
              ELECTRONIC CONTRACT FORMED UNDER THE INFORMATION TECHNOLOGY ACT,
              2000 AND THE RULES MADE THEREUNDER AND THE AMENDED PROVISIONS
              PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES
              AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000 OR ANY RELEVANT
              STATUTE OR REGULATION UNDER ANY APPLICABLE JURISDICTION. THIS
              PRIVACY POLICY DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR
              DIGITAL SIGNATURE.
            </p>
            <p className="   font-gilroyRegular text-base sm:text-lg  ">
              The purpose of this Privacy Policy is to ensure that there is an
              intact charter to collect, use and protect any personal and/or
              sensitive data collected by us. This Policy defines our procedure
              for collection, usage, processing, disclosure and protection of
              any information obtained by us through the Platform. Capitalized
              terms that are not defined in this Privacy Policy shall have the
              same meaning as ascribed to them in our Terms of Service. Any
              reference made to Privacy policy in this document shall mean and
              refer to the latest version of the Privacy Policy
            </p>
          </div>
        </div>
        <ul className="flex flex-col leading-5 sm:leading-7 text-base sm:text-lg gap-0.5 sm:gap-4 py-3 sm:py-10">
          <li>
            <h4 className="font-gilroyBold text-xl sm:text-3xl pb-7">
              1. CONSENT
            </h4>
            <div className="flex flex-col gap-8 pb-6    font-gilroyRegular">
              <p className="font-gilroySemiBold">
                PLEASE READ THIS PRIVACY POLICY CAREFULLY AS IT AFFECTS YOUR
                RIGHTS AND LIABILITIES UNDER LAW. BY USING THIS PLATFORM AND
                AVAILING OUR SERVICES, YOU INDICATE THAT YOU UNDERSTAND, AGREE
                AND CONSENT TO THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THE
                TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT USE THIS WEBSITE OR
                AVAIL OUR SERVICES.
              </p>
              <p>
                Please be advised that any Information procured by us, shall be:
                processed fairly and lawfully for rendering the Services;
                obtained only for specified and lawful purposes; adequate,
                relevant and not excessive in relation to the purpose for which
                it is required; able to be reviewed by the User, from time to
                time and updated-if need arises; and not kept longer than for
                the time which it is required or the purpose for which it is
                required or as required by the applicable law.
              </p>
              <p>
                If you do not agree with this Privacy Policy, you may refuse or
                withdraw your consent any time, or alternatively choose to not
                provide us with any Personal Information, you understand that
                under such circumstance, we may be unable to render Services.
                Any such intimation to withdraw your consent can be sent
                to care@winuall.com.
              </p>
              <p className="font-gilroySemiBold">
                WE SHALL NOT BE LIABLE FOR ANY LOSS OR DAMAGE SUSTAINED BY
                REASON OF ANY DISCLOSURE (INADVERTENT OR OTHERWISE) OF ANY DATA,
                IF THE SAME IS EITHER (A) REQUIRED FOR SHARING YOUR INFORMATION
                FOR LEGITIMATE PURPOSES; OR (B) WAS CAUSED THROUGH NO FAULT,
                ACT, OR OMISSION OF THE COMPANY.
              </p>
            </div>
          </li>
          {privacyPolicy.map((v, i) => (
            <li key={i}>
              <h4 className="  font-gilroyBold  text-xl sm:text-3xl pb-7">
                {v.title}
              </h4>
              <div className="flex flex-col gap-8 pb-6    font-gilroyRegular">
                {v.desc.map((v, i) => (
                  <p key={i}>{v}</p>
                ))}
              </div>
              {v.points && (
                <div className="flex flex-col gap-2.5 pb-6    font-gilroyRegular">
                  {v.points?.map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </div>
              )}
              {v.extraDesc && (
                <div className="flex flex-col gap-8 pb-6    font-gilroyRegular">
                  {v.extraDesc?.map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
