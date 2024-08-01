import Image from 'next/image';

function ShareBar() {
  return (
    <div className="flex items-center w-[327px] h-16 px-8 py-[22px] rounded-b-[10px] bg-dark-grayish-blue">
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
    </div>
  );
}

export default ShareBar;
