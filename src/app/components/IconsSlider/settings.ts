import { Settings } from '@ant-design/react-slick'

export type SettingsFunc = (custom?: Settings) => Settings

const settings: SettingsFunc = (custom: Settings = {}) => ({
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  ...custom,
})

export default settings
