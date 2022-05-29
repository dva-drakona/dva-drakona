import React from 'react';
import Slider from 'react-slick';
import { BannerSliderProps } from './types';
import Image from 'next/image';

const BannerSlider = ({ data }: BannerSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <div>
      {data.images.map((el: any, i: number) => (
        <Image src={el.img} key={i} width={1090} height={500} alt="banner" />
      ))}
    </div>
  );
};

export default BannerSlider;
