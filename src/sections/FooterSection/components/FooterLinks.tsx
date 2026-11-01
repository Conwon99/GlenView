import { services } from "@/data/services";

export const FooterLinks = () => {
  return (
    <>
      <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[200px]">
        <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
          Quick Links
        </div>
        <nav className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
          <a
            href="/"
            className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
          >
            Home
          </a>
          <a
            href="/about/"
            className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
          >
            About Us
          </a>
          <a
            href="/services/"
            className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
          >
            Services
          </a>
          <a
            href="/contact/"
            className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[200px]">
        <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
          Services
        </div>
        <nav className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/${service.slug}/`}
              className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
