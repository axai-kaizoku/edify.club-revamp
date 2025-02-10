import { Container } from "@/components/common/container"
import { Delete, Edit, IndianFlag, Logout } from "./_components/icons"
import { OrdersSection } from "./_components/order-section"

export default function Page() {
  const data = {
    name: "Ashwini Purohit",
    image: "/media/profile/profile.png",
    gender: "Male",
    phone: "7470873515",
    address: "Bengaluru, IN",
    email: "ashiwni@winuall.com",
  }

  return (
    <Container className="my-6 lg:my-10 h-full min-h-screen">
      <h2 className="text-xl lg:text-2xl font-gilroySemiBold text-center lg:text-left mb-8">
        Profile
      </h2>

      <section className="flex w-full justify-between lg:items-stretch h-full min-h-0 lg:h-48">
        <div className="flex w-full lg:w-[74%] h-full items-center border border-[#DEDEDE] rounded-xl">
          <img
            src={data.image}
            alt={data.name}
            className="object-cover rounded-xl w-24 h-24 lg:w-40 lg:h-40 m-3.5"
          />

          <div className="flex flex-col justify-evenly gap-y-3 lg:gap-0 lg:pl-5 items-start w-full h-full">
            <h3 className="text-base lg:text-[1.6rem] h-fit font-gilroySemiBold">
              {data.name}
            </h3>
            <div className="grid grid-cols-2 lg:flex lg:justify-between w-full h-fit lg:pr-8 xl:pr-14">
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  Email
                </span>
                <span className="text-xs lg:text-lg font-gilroyMedium truncate">
                  {data.email}
                </span>
              </div>
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  Phone
                </span>
                <span className="text-xs lg:text-lg font-gilroyMedium flex items-center gap-x-1">
                  <IndianFlag className="size-3.5 lg:size-7" />
                  {data.phone}
                </span>
              </div>
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  Gender
                </span>
                <span className="text-xs lg:text-lg font-gilroyMedium">
                  {data.gender}
                </span>
              </div>
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  City
                </span>
                <address className="text-xs lg:text-lg not-italic font-gilroyMedium">
                  {data.address}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex space-y-1 w-[24%] h-full flex-col border border-[#DEDEDE] rounded-xl">
          <button className="flex gap-x-3 items-center h-full w-full text-[#0076FF] font-gilroyMedium whitespace-nowrap px-5 hover:bg-[#F9F9F9] rounded-xl cursor-pointer">
            <Edit /> Edit Profile
          </button>
          <button className="flex gap-x-3 items-center h-full w-full font-gilroyMedium whitespace-nowrap px-5 hover:bg-[#F9F9F9] rounded-xl cursor-pointer">
            <Logout />
            Logout
          </button>
          <button className="flex gap-x-3 items-center h-full w-full text-[#F00] font-gilroyMedium whitespace-nowrap px-5 hover:bg-[#F9F9F9] rounded-xl cursor-pointer">
            <Delete />
            Delete Account
          </button>
        </div>
      </section>

      <h2 className="text-xl lg:text-2xl font-gilroySemiBold text-center lg:text-left my-8">
        My Orders
      </h2>

      <OrdersSection />
    </Container>
  )
}
