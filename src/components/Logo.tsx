export const Logo = () => {
  return (
    <div className="box-border caret-transparent shrink-0">
      <a
        href="/"
        aria-label="home"
        className="relative text-neutral-900 box-border caret-transparent block float-left h-24 max-h-24 overflow-visible md:h-32 md:max-h-32"
      >
        <div className="box-border caret-transparent">
          <img
            src="/logo.png"
            alt="GlenView Exterior Cleaning logo"
            className="box-border caret-transparent inline-block max-w-full h-24 w-24 object-contain md:h-32 md:w-32"
            width={500}
            height={500}
            decoding="async"
          />
        </div>
      </a>
    </div>
  );
};
