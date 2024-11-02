"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  useEffect(() => {
    // Disable scroll when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Function to handle clicks on the background
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click target is the modal background
    if (event.currentTarget === event.target) {
      onClose(); // Close the modal if clicked outside the image
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick} // Add the click handler
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-3xl"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <Image
          src={imageUrl}
          alt="Enlarged image"
          width={800} // Set your desired width
          height={600} // Set your desired height
          className="rounded-md shadow-md"
          priority // Add priority if this is a critical image
        />
      </div>
    </div>
  );
};

export default ImageModal;
