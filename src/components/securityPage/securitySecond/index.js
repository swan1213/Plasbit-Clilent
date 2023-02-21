import React, { useEffect, useState } from 'react';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';

import './style.css';

export const SecuritySecond = () => {
  const { isMobile } = useResize();

  const [degOffset, setDegOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setDegOffset(window.scrollY / 5);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="security-locker" style={{ backgroundImage: `url(${isMobile ? getImg('security/lockbgMob.png') : getLocalImg('webp-images/security/secuirty_lockbg.webp')})`, backgroundRepeat: 'no-repeat', backgroundPosition: `${!isMobile ? '47% 30px' : '-30px 10px'}` }}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `
                    url(${isMobile ? getImg('security/midCircleMob.png') : getLocalImg('webp-images/security/security_midCircle.webp')}),
                    url(${isMobile ? getImg('security/blueMob.png') : getLocalImg('webp-images/security/security_blue.webp')}),
                    url(${isMobile ? getImg('security/coverMob.png') : getLocalImg('webp-images/security/security_cover.wenp')}),
                    url(${isMobile ? getImg( 'security/greyMob.png') : getLocalImg('webp-images/security/security_grey.webp')})`,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'center, center, center, center, center',
      }}
      >
        <div>
          <img style={{ transform: `rotate(${degOffset}deg)` }} src={isMobile ? getImg('security/numbersMob.png') : getLocalImg('webp-images/security/secuirty_numbers.webp')} alt="numbers" />
        </div>
      </div>
    </div>
  );
};
