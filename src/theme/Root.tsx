import React, { useEffect } from 'react';
import Root from '@theme-original/Root';

export default function RootWrapper(props) {
  useEffect(() => {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(90deg, #26d934 0%, #3bdd46 50%, #D926CB 100%)';
    progressBar.style.zIndex = '10000';
    progressBar.style.transition = 'width 0.1s ease-out';
    progressBar.style.boxShadow = '0 2px 4px rgba(38, 217, 52, 0.3)';
    
    document.body.appendChild(progressBar);

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      
      progressBar.style.width = `${Math.min(Math.max(scrollPercent, 0), 100)}%`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    // Initial update
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
      if (progressBar && progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  return <Root {...props} />;
}