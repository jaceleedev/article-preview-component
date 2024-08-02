'use client';
import ShareIcon from './ShareIcon';

interface ShareButtonProps {
  isShareBarOpen: boolean;
  onShareBarToggle: () => void;
}

function ShareButton({ isShareBarOpen, onShareBarToggle }: ShareButtonProps) {
  return (
    <button
      onClick={onShareBarToggle}
      className={`flex justify-center items-center w-8 h-8 rounded-full z-10 ${
        isShareBarOpen
          ? 'bg-desaturated-dark-blue translate-y-2 md:translate-y-0'
          : 'bg-light-grayish-blue'
      }`}
    >
      <ShareIcon fill={`${isShareBarOpen ? '#FFFFFF' : '#6E8098'}`} />
    </button>
  );
}

export default ShareButton;
