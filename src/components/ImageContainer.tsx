import React, { useState } from 'react';
import styles from './ImageContainer.module.css';

interface ImageContainerProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  caption,
  width,
  height = 'auto',
  className = ''
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeFullScreen();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeFullScreen();
    }
  };

  React.useEffect(() => {
    if (isFullScreen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullScreen]);

  return (
    <>
      <div className={`${styles.imageContainer} ${className}`} onClick={openFullScreen}>
        <div className={styles.imageWrapper}>
          <img
            src={src}
            alt={alt}
            style={{ height }}
            className={styles.image}
          />
          <div className={styles.fullscreenHint}>
            🔍
          </div>
        </div>
        {caption && (
          <div className={styles.caption}>
            {caption}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullScreen && (
        <div className={styles.fullscreenOverlay} onClick={handleOverlayClick}>
          <div className={styles.fullscreenContainer}>
            <button
              className={styles.closeButton}
              onClick={closeFullScreen}
              title="Close fullscreen"
              aria-label="Close fullscreen view"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={src}
              alt={alt}
              className={styles.fullscreenImage}
            />
            {caption && (
              <div className={styles.fullscreenCaption}>
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageContainer;