import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import styles from './slideshow.module.css';

const images = [
  'https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_flash_sale_may_desktop1683122178203.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/hp_dp_3-9summer_babyhug_mega_combofest_ext_10_off_hp1679384832115.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_superhit_fashion_brands_west_desktop1683124606293.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/makhana_for_babies_desktop_20225251321216740345951041680673476227.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/hp_default_summer23_budget_buys_2304231682276558450.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/hp_dp_3-9summer_babyhug_mega_combofest_ext_10_off_hp1679384832115.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/segment_mothersparsh_hp_1681536072245.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_bgn_4thmay1683115062029.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/microsoftteams-image_(63)1683176024753.png',
  'https://cdn.fcglcdn.com/brainbees/banners/april_charlie_banana_flat45_dp_hp_994x3991682492526839.jpg',
  'https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaperfest_3rdmay1683029019002.jpg'

];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <Box   className={styles.showme} w="100%"  >
      <Image src={images[currentImageIndex]} alt="Slideshow Image" w="100%" height="400px" />
    </Box>
  );
};

export default Slideshow;
