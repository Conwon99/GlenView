export const DesktopNav = () => {
  return (
    <nav
      role="navigation"
      className="absolute box-border caret-transparent hidden basis-[0%] grow float-none justify-center min-h-0 min-w-0 md:relative md:flex md:min-h-[auto] md:min-w-0 md:w-full md:flex-1 md:items-center md:justify-start"
    >
      <ul
        role="list"
        className="absolute text-neutral-700 items-start bg-white shadow-[rgba(0,0,0,0.05)_0px_8px_50px_0px] box-border caret-transparent gap-x-5 flex flex-col justify-around list-none max-h-[880px] min-h-0 min-w-0 gap-y-5 w-full overflow-auto mt-2.5 pt-5 pb-[30px] px-5 rounded-[20px] top-[0%] inset-x-[0%] md:static md:[align-items:normal] md:bg-transparent md:shadow-none md:flex-row md:justify-start md:items-center md:gap-x-6 md:max-h-none md:min-h-[auto] md:min-w-0 md:w-auto md:gap-y-0 md:overflow-visible md:mt-0 md:p-0 md:rounded-none md:top-auto md:inset-x-auto md:pl-2 md:pr-4"
      >
        <li className="box-border caret-transparent min-h-0 min-w-0 mx-0 md:min-h-[auto] md:min-w-0 md:mr-0">
          <a
            href="/"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:justify-start md:text-left md:text-neutral-900 hover:text-neutral-600"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-neutral-900 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Home
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 mx-0 md:min-h-[auto] md:min-w-0 md:mr-0">
          <a
            href="/about/"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:justify-start md:text-left md:text-neutral-900 hover:text-neutral-600"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-neutral-900 md:text-base md:min-h-[auto] md:min-w-[auto]">
              About
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 mx-0 md:min-h-[auto] md:min-w-0 md:mr-0">
          <a
            href="/gallery/"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:justify-start md:text-left md:text-neutral-900 hover:text-neutral-600"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-neutral-900 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Gallery
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 mx-0 md:min-h-[auto] md:min-w-0 md:mr-0">
          <a
            href="/services/"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:justify-start md:text-left md:text-neutral-900 hover:text-neutral-600"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-neutral-900 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Services
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 mx-0 md:min-h-[auto] md:min-w-0 md:mr-0">
          <a
            href="/contact/"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:justify-start md:text-left md:text-neutral-900 hover:text-neutral-600"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-neutral-900 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Contact
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
