export const WhyUsSection = () => {
  const whyUsData = [
    {
      title: `Solving Problems Together`,
      desc: `Our planet has limited resources, and e-waste is a growing concern. Every year, millions of tons of electronic waste end up in landfills, causing significant environmental harm.
At Edify, we are committed to combating this issue by refurbishing and reselling laptops. `,
    },
    {
      title: `Quality You Can Trust`,
      desc: `Our planet has limited resources, and e-waste is a growing concern. Every year, millions of tons of electronic waste end up in landfills, causing significant environmental harm.
At Edify, we are committed to combating this issue by refurbishing and reselling laptops. `,
    },
    {
      title: `Sourcing Responsibly`,
      desc: `Our planet has limited resources, and e-waste is a growing concern. Every year, millions of tons of electronic waste end up in landfills, causing significant environmental harm.
At Edify, we are committed to combating this issue by refurbishing and reselling laptops. `,
    },
  ]

  return (
    <div className="w-full flex flex-col items-center sm:grid sm:grid-cols-3 gap-y-4 sm:gap-8 lg:gap-20 xl:gap-24 px-[8%] xs:px-[1%] sm:px-[5%] xl:px-[6.5%]">
      {whyUsData.map((content, i) => (
        <div
          key={content.title}
          className="flex flex-col gap-y-2 items-center m-1 w-fit h-fit"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center font-orange">
            {content.title.split(" ")[0]} <br />
            {content.title.split(" ").slice(1).join(" ")}
          </h2>
          <p className="text-sm sm:text-[0.9rem] lg:text-base text-center font-gilroyMedium">
            {content.desc}
          </p>
        </div>
      ))}
    </div>
  )
}
