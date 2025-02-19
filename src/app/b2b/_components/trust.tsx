import React from "react"

function Trust() {
  return (
    <>
      <section className=" w-full flex justify-center items-center flex-col sm:hidden max-sm:mt-20 max-sm:mb-20">
        <h1 className="text-center font-orange text-2xl lg:text-3xl xl:text-4xl mb-10">
          Why Trust Us?
        </h1>
        <div className="text-center flex flex-col gap-5">
          <div className=" gap-6 p-6 bg-[url(/media/b2b/on-site_repair.png)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="font-orange text-2xl "> On-Site Repair</h1>
            <p className="font-gilroySemiBold text-lg">
              Quick and efficient on-site repair services to minimize downtime
              for your startup.
            </p>
          </div>
          <div className=" gap-6 p-6 text-white bg-[url(/media/b2b/quality_assurance.png)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="font-orange text-2xl "> Quality Assurance</h1>
            <p className="font-gilroySemiBold text-lg">
              Every laptop passes 50+ rigorous quality checks to ensure top
              performance.
            </p>
          </div>
          <div className=" gap-6 p-6 bg-[url(/media/b2b/custom.svg)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="font-orange text-2xl ">Customised Warranty </h1>
            <p className="font-gilroySemiBold text-lg">
              Enjoy peace of mind with our industry-leading warranty on all
              devices.
            </p>
          </div>
          <div className=" gap-6 p-6 bg-[url(/media/b2b/refurbishment.svg)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="font-orange text-2xl ">
              Comprehensive Refurbishment{" "}
            </h1>
            <p className="font-gilroySemiBold text-lg">
              Every laptop passes 50+ rigorous quality checks to ensure top
              performance.
            </p>
          </div>
        </div>
      </section>
      <section className="hidden relative text-center sm:flex justify-center items-center h-[80vh] my-32">
        <h1 className="text-center font-gilroySemiBold text-[#D7D7D7] text-5xl lg:text-6xl xl:text-7xl  ">
          Why Trust Us?
        </h1>
        <div className=" gap-3 w-36 lg:w-52 top-[5%] lg:top-0 right-[28%] absolute p-3 lg:p-4 bg-[url(/media/b2b/on-site_repair.png)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
          <h1 className="font-orange text-xl lg:text-2xl ">
            {" "}
            On-Site <br />
            Repair
          </h1>
          <p className="font-gilroySemiBold text-xs lg:text-lg">
            Quick and efficient on-site repair services to minimize downtime for
            your startup.
          </p>
        </div>
        <div className=" gap-3 w-44 lg:w-60 top-[5%] lg:top-0 left-[13%] absolute p-3 lg:p-4 bg-[url(/media/b2b/custom.svg)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
          <h1 className="font-orange text-xl lg:text-2xl ">
            Customised <br />
            Warranty{" "}
          </h1>
          <p className="font-gilroySemiBold text-xs lg:text-lg">
            Enjoy peace of mind with our industry-leading warranty on all
            devices.
          </p>
        </div>
        <div className="  gap-3 w-64 absolute bottom-[15%] lg:bottom-[8%] right-0 p-3 lg:p-4 bg-[url(/media/b2b/refurbishment.svg)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
          <h1 className="font-orange text-xl lg:text-2xl ">
            Comprehensive <br />
            Refurbishment{" "}
          </h1>
          <p className="font-gilroySemiBold text-xs lg:text-lg">
            Every laptop passes 50+ rigorous quality checks to ensure top
            performance.
          </p>
        </div>
        <div className=" gap-3 text-center w-[142px] lg:w-48 bottom-[8%] lg:bottom-0 absolute p-4 text-white bg-[url(/media/b2b/quality_assurance.png)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
          <h1 className="font-orange text-xl lg:text-2xl ">
            {" "}
            Quality
            <br /> Assurance
          </h1>
          <p className="font-gilroySemiBold text-xs lg:text-lg">
            Every laptop passes 50+ rigorous quality checks to ensure top
            performance.
          </p>
        </div>
        <div className=" gap-3 text-center top-[15%] lg:top-[10%] right-0 w-32 lg:w-48 absolute p-3 lg:p-4  bg-[url(/media/b2b/support.png)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
          <h1 className="font-orange text-xl lg:text-2xl ">
            24/7 <br /> Support
          </h1>
          <p className="font-gilroySemiBold text-xs lg:text-lg">
            Our dedicated support team is available around the clock to assist
            you
          </p>
        </div>
        <div className=" gap-3 text-center w-40 lg:w-56 absolute p-3 lg:p-4 top-[45%] left-0 bg-[url(/media/b2b/sustainable.png)] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
          <h1 className="font-orange text-xl lg:text-2xl ">
            Sustainable <br /> Solutions
          </h1>
          <p className="font-gilroySemiBold text-xs lg:text-lg">
            Choosing refurbished means supporting a greener planet.
          </p>
        </div>
      </section>
    </>
  )
}

export default Trust
