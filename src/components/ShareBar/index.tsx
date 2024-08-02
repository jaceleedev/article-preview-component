import Image from 'next/image';

function ShareBar() {
  return (
    <div className="relative flex items-center w-[327px] px-8 py-[22px] rounded-b-[10px] bg-dark-grayish-blue md:w-[248px] md:py-[18px] md:rounded-[10px]">
      <span className="text-action mr-[21px]">SHARE</span>
      <div className="flex items-center gap-4">
        <a href="#">
          <Image
            src="/images/icon-facebook.svg"
            alt="Share on Facebook"
            priority
            width={20}
            height={20}
          />
        </a>
        <a href="#">
          <Image
            src="/images/icon-twitter.svg"
            alt="Share on Twitter"
            width={20}
            height={17}
          />
        </a>
        <a href="#">
          <Image
            src="/images/icon-pinterest.svg"
            alt="Share on Pinterest"
            width={20}
            height={20}
          />
        </a>
      </div>
      {/* Triangle shape for the tooltip arrow (visible only on desktop) */}
      <div className="hidden absolute left-1/2 bottom-0 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-solid border-t-dark-grayish-blue border-l-transparent border-r-transparent transform -translate-x-1/2 translate-y-full md:block" />
    </div>
  );
}

export default ShareBar;
