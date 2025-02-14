const Partners = ({ heading }: { heading: string }) => {
  return (
    <section className="flex flex-col sm:gap-11 max-sm:mb-16 sm:py-4">
      <h1 className="text-center font-orange text-2xl text-nowrap lg:text-3xl xl:text-4xl mb-10">
        {heading}
      </h1>
      <div className="items-center  justify-between hidden sm:flex lg:px-6">
        <img
          src="/media/b2b/metafin_logo.png"
          alt="metaFin"
          className="lg:w-auto sm:w-24 w-[38px] h-[38px]"
          loading="lazy"
        />
        <img
          src="/media/b2b/joyspoon.png"
          alt="joyspoon"
          className="lg:w-auto sm:w-24  w-[35px] h-[45px]"
          loading="lazy"
        />
        <img
          src="/media/b2b/urban_vault.png"
          alt="urban_vault"
          className="xl:w-[100px] xl:h-[50px] lg:w-[130px] lg:h-[40px] sm:w-24 md:w-[110px]  w-[90px] h-[30px]"
          loading="lazy"
        />
        <img
          src="/media/b2b/finagg.png"
          alt="Finagg"
          className="xl:w-[130px] xl:h-[40px] lg:w-[110px] lg:h-[35px] sm:w-[90px] sm:h-[30px] w-[80px] h-[28px]"
          loading="lazy"
        />
        <img
          src="/media/b2b/electric_pe.png"
          alt="Finagg"
          className="xl:w-[130px] xl:h-[40px] lg:w-[110px] lg:h-[35px] sm:w-[90px] sm:h-[30px] w-[80px] h-[28px]"
          loading="lazy"
        />
        <img
          src="/media/b2b/my_gate.png"
          alt="Finagg"
          className="xl:w-[130px] xl:h-[40px] lg:w-[110px] lg:h-[35px] sm:w-[90px] sm:h-[30px] w-[80px] h-[28px]"
          loading="lazy"
        />
      </div>
      <div className="sm:py-4  items-center justify-around sm:hidden flex overflow-x-auto gap-10">
        <img
          src="/media/b2b/metafin_logo.png"
          alt=" metafin_logo"
          className="w-auto h-8"
          loading="lazy"
        />
        <img
          src="/media/b2b/joyspoon.png"
          alt="joyspoon"
          className="w-auto h-8"
          loading="lazy"
        />
        <img
          src="/media/b2b/urban_vault.png"
          alt="urban_vault"
          className="w-40 h-12"
          loading="lazy"
        />
        <img
          src="/media/b2b/finagg.png"
          alt="finagg"
          className="w-auto h-8"
          loading="lazy"
        />
        <img
          src="/media/b2b/electric_pe.png"
          alt="electric_pe"
          className="w-auto h-8"
          loading="lazy"
        />
        <img
          src="media/b2b/my_gate.png"
          alt="my_gate"
          className="w-auto h-8"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Partners
