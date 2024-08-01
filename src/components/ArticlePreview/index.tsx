'use client';

import Image from 'next/image';
import { useState } from 'react';
import ShareButton from '@/components/ShareButton';
import ShareBar from '@/components/ShareBar';

function ArticlePreview() {
  const [isShareBarOpen, setIsShareBarOpen] = useState(false);

  function handleShareBarToggle() {
    setIsShareBarOpen((prevState) => !prevState);
  }

  return (
    <article className="relative grid grid-cols-1 grid-rows-[200px_auto] w-[327px] rounded-[10px] bg-white shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)]">
      <figure className="relative h-[200px]">
        <Image
          src="/images/drawers.jpg"
          alt="drawers"
          fill
          priority
          className="object-cover object-[center_25%] rounded-t-[10px]"
        />
      </figure>
      <div className="pt-9 px-8 pb-5">
        <h1 className="text-heading mb-3">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-body mb-8">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Image
              src="/images/avatar-michelle.jpg"
              alt="Michelle"
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
            <div>
              <p className="text-author">Michelle Appleton</p>
              <p className="text-date">28 Jun 2020</p>
            </div>
          </div>
          <ShareButton
            isShareBarOpen={isShareBarOpen}
            onShareBarToggle={handleShareBarToggle}
          />
        </div>
        {isShareBarOpen && (
          <div className="absolute left-0 bottom-0">
            <ShareBar />
          </div>
        )}
      </div>
    </article>
  );
}

export default ArticlePreview;
