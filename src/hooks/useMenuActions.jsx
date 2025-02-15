import { useEffect, useState } from 'react';

const useMenuActions = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleOverlayToggle = () => setIsOverlayOpen(() => !isOverlayOpen);

  useEffect(() => {
    // Deshabilitar scroll cuando el overlay esté abierto
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOverlayOpen]);

  return {
    isOverlayOpen,
    handleOverlayToggle,
  };
};

export default useMenuActions;
