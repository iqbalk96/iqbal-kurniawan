'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface ReCaptchaDialogProps {
  onVerified: () => void;
  triggerButtonText: string;
  buttonClassName?: string;
}

export function ReCaptchaDialog({ triggerButtonText, buttonClassName = '' }: ReCaptchaDialogProps) {
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const captchaContainerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      captchaContainerRef.current &&
      !captchaContainerRef.current.contains(event.target as Node)
    ) {
      setIsCaptchaVisible(false);
    }
  };

  useEffect(() => {
    if (isCaptchaVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCaptchaVisible]);

  return (
    <div className="relative">
      <Button
        variant="default"
        className={buttonClassName}
        onClick={() => {
          const phoneNumber = '6281223043453'; // WhatsApp requires the international format (62 for Indonesia)
          const message = encodeURIComponent('Halo, saya tertarik untuk membuat website.\nBisakah Anda membantu saya dengan informasi lebih lanjut?');
          const url = `https://wa.me/${phoneNumber}?text=${message}`;
          window.open(url, '_blank');
        }}
      >
        {triggerButtonText}
      </Button>
    </div>
  );
}
