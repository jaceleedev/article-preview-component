'use client';

import ShareIcon from './ShareIcon';

function ShareButton() {
  return (
    <button
      className={`flex justify-center items-center w-8 h-8 rounded-full bg-light-grayish-blue`}
    >
      <ShareIcon fill="#6E8098" />
    </button>
  );
}

export default ShareButton;
