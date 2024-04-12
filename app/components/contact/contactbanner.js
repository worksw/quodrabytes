export default function ContactBanner() {
  return (
    <div className="bg-contact-banner bg-cover min-h-[320px] md:min-h-[400px] relative mt-[-66px]">
      <div>
        <div className="absolute bottom-0 md:bottom-[70px] left-1/2 right-1/2 -translate-x-1/2 w-full text-center m-auto">
          <span className="text-[10px] md:text-xs text-primary-color tracking-[6px]">
            QUADRA BYTES
          </span>
          <h1 className="mt-0 md:mt-4 uppercase text-white leading-[60px] text-[40px] md:text-[50px] font-Anton mb-4 md:mb-[29px]">
            Our Contact
          </h1>
        </div>
      </div>
    </div>
  );
}
