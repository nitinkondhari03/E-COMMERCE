import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";

import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import Slider from "./Slider.jsx";
import SliderUp from "./SliderUp";
import Categorys from "../layout/Header/Categorys";
import { FaLaptop } from "react-icons/fa";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  const sliderImageUrl = [
    {
       "name":"POCO C50 (Royal Blue, 32 GB)  (3 GB RAM) Mobile",
       "description":"Treat yourself to the POCO C50, which has a plethora of innovative capabilities, and take advantage of a seamless smartphone experience. With its 16.56 cm (6.52) broad display and 120 Hz touch sampling rate, this smartphone makes it simple to enjoy content and elevate your visual experience. Additionally, The POCO C50 enhances the experience in terms of shooting great photographs with an 8 MP main camera with a depth sensor. You can also capture captivating selfies with this phone's 5 MP front camera to increase your social media profile. Moreover, the C50 is designed to be safe and has a fingerprint sensor on the back and this phone's rear panel boasts a leather-like texture that gives off an opulent impression, enhancing its allure and elegance.",
       "price":6199,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/j/d/-original-imaghggzevzjhzs5.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/z/n/-original-imaghggz7emhbdfx.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/6/t/-original-imaghggzzmwgb6f7.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/g/g/-original-imaghggz5qrjmurb.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/l/5/-original-imaghmtcdcfsvmqj.jpeg?q=70"
       }
       ],
       "category": "Mobile"
    },
    {
       "name":"POCO M4 5G (Power Black, 64 GB)  (4 GB RAM)#JustHere Mobile",
       "description":"Break all barriers and enjoy an unmatched smartphone experience with the POCO M4 5G that is designed to send chills across your body from the moment you start using it. This phone comes loaded with the Dimensity 700 processor, UFS 2.2 WriteBooster, and up to 2 GB of Turbo RAM that boosts your performance and makes multitasking a piece of cake. Moreover, the dual-camera setup with a 50 MP primary camera and 8 MP front camera allows you to click masterpieces and cherish the brilliance of their imagery.",
       "price":10999,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l2jcccw0/mobile/k/a/a/-original-imagdupmdhgzwmcy.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l2jcccw0/mobile/t/0/o/-original-imagdu8gmyvhykqg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l2jcccw0/mobile/v/3/d/-original-imagdu8gsdpe2zh4.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l2jcccw0/mobile/x/6/i/-original-imagdu8gypmkzj9v.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l2jcccw0/mobile/e/g/7/-original-imagdu8gyakbkhrf.jpeg?q=70"
       }
       ],
       "category": "Mobile"
    },
    {
       "name":"POCO X5 5G (Jaguar Black, 128 GB)  (6 GB RAM) Mobile",
       "description":"The innovative features of the POCO X5 5G smartphone mesmerises you with its faultless performance as it delivers top functionality. The POCO X5 5G's Snapdragon 695 5G chipset and octa-core Qualcomm Kryo 660 CPU, which offers a clock speed of up to 2.2 GHz, enable great gaming performance thanks to a built-in 6 nm technology. Moreover, the large 16.94 cm (6.67) FHD+ AMOLED Display can surprise you with its immersive viewing experience. A refresh rate of 120 Hz allows for very smooth navigation. Furthermore, this phone includes a 33 W quick charger in the box to guarantee that you always have enough power for the day and can continue to function normally.",
       "price":14999,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/q/q/-original-imagnqpnkkzmgv7h.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/w/l/-original-imagnqpnstzj7qay.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/f/s/-original-imagnqpnx8f3seex.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/w/j/-original-imagnqpngjgb4cya.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/d/g/-original-imagnqpng9hxgtzr.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/n/x/-original-imagnqpnx6nhbtpz.jpeg?q=70"
       }
       ],
       "category": "Mobile"
    },
    {
       "name":"MOTOROLA G62 5G (Frosted Blue, 128 GB)  (6 GB RAM) Mobile",
       "description":"With the Moto G62, you can enjoy lag-free gaming, seamless multitasking, and stunning stutter-free graphics. This phone allows you to juggle while savouring entertainment owing to its astounding 16.51 cm (6.5) FHD+ Ultra-smooth display and refresh rate of 120 Hz. In addition, you can perform excellently without the smartphone overheating thanks to the Snapdragon 695 5G processor and 6 GB of RAM. Moreover, this phone's 50 MP main camera allows you to capture breathtaking images with incredible imagery.",
       "price":15499,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/6/g/-original-imagh29eknx3cavh.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/w/7/-original-imagh29eyvp9u6g4.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/0/h/-original-imaggvy68fbcqrsc.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/w/w/-original-imaggvy6ddpzfxam.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/j/3/-original-imaggvy6uccc3nvg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/y/p/-original-imaggvy6gh9yvxvf.jpeg?q=70"
       }
       ],
       "category": "Mobile"
    },
    {
       "name":"MOTOROLA g13 (Lavender Blue, 128 GB)  (4 GB RAM) Mobile",
       "description":"Time to stand out of the crowd with a Super premium and ultra-modern design phone. Every design detail has been carefully considered and thoughtfully crafted, starting with the camera housing—a celebration of the experience that makes it a true standout. Plus, the fingerprint sensor has been positioned on the side of the phone where it’s easily accessible and helps maintain a streamlined look. You have plenty of space for photos, videos, music, applications, and games with 128 GB of built-in storage, so don't worry about running out of space. With 4 GB of Memory, you can easily multitask and have the capacity to accomplish anything you want and more. Get a more useful, dependable, and personalised experience by upgrading your phone to the recent version of Android 13. Make sure your phone feels and looks like it belongs to you alone. The 50 MP Quad Pixel Camera lets you take stunningly clear pictures even in poor lighting conditions.",
       "price":9999,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/h/f/g13-pawv0028in-motorola-original-imagz4rbawxkbyjg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/f/g13-pawv0028in-motorola-original-imagz4rbhxhhungh.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/n/n/g13-pawv0028in-motorola-original-imagz4rbzjz78hd2.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/5/v/g13-pawv0028in-motorola-original-imagz4rb2baqghug.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/p/a/g13-pawv0028in-motorola-original-imagz4rbmtgjn4yz.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/m/i/g13-pawv0028in-motorola-original-imagz4rbtaxemmvd.jpeg?q=70"
       }
       ],
       "category": "Mobile"
    },
    {
       "name":"REDMI 11 Prime (Peppy Purple, 128 GB)  (6 GB RAM) Mobile",
       "description":"Experience the power of MediaTek Helio G99 processor to seamlessly switch between the apps and multitask easily on the Redmi Prime 11 smartphone. You can enjoy a smooth and fast display, thanks to its 90 Hz FHD+ display. Its 50 MP AI triple camera allows you to click stunning images or record videos. With the 8 MP camera you can click attractive selfies. Thanks to its 5000 mAh battery, you can watch content online, record videos, or engage in intense gaming sessions. You can have a theatre-like experience on this large screen paired with Hi-Res Audio support.",
       "price":10999,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/m/3/11-prime-mzb0ceoin-redmi-original-imagzqvrz4mvf6tx.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/6/v/11-prime-mzb0ceoin-redmi-original-imagzqvrpvu8zqek.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/o/r/-original-imagp9nnswpfunjb.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/p/t/11-prime-mzb0ceoin-redmi-original-imagzqvrrydeczkg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/i/g/-original-imagq3tyhzayxetq.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/k/u/-original-imagp9nmvmhfgmh6.jpeg?q=70"
       }
       ],
       "category": "Mobile"
    }
    ]
    
  const Laptop=[
    {
      "name":"ASUS Vivobook AMD R5 5600H Ryzen 5 Hexa Core 10th Gen - (16 GB/512 GB SSD/Windows 11 Home) M1603QA-MB512WS Laptop  (16 inch, Silver, With MS Office)",
      "description":"ASUS Vivobook AMD R5 5600H Ryzen 5 Hexa Core 10th Gen - (16 GB/512 GB SSD/Windows 11 Home) M1603QA-MB512WS Laptop  (16 inch, Silver, With MS Office)",
      "price":51899,
      "images":[
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/6/n/q/vivobook-16x-m1603qa-laptop-asus-original-imagjy3g4gvfrg5h.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/6/h/d/vivobook-16x-m1603qa-laptop-asus-original-imagjy3gtghfkusr.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/g/b/vivobook-16x-m1603qa-laptop-asus-original-imagjy3gt7fzjfnx.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/z/j/vivobook-16x-m1603qa-laptop-asus-original-imagjy3gt7gf6rfg.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/s/i/vivobook-16x-m1603qa-laptop-asus-original-imagjy3gveggdf4e.jpeg?q=70"
      }
      ],
      "category": "Laptop"
   },
   {
      "name":"Lenovo ThinkBook 15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) Thinkbook 15 G3 Thin and Light Laptop  (15.6 Inch, Mineral Grey, 1.70 Kg, With MS Office)",
      "description":"Lenovo ThinkBook 15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) Thinkbook 15 G3 Thin and Light Laptop  (15.6 Inch, Mineral Grey, 1.70 Kg, With MS Office)",
      "price":39990,
      "images":[
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/2/t/thinkbook-15-g3-thin-and-light-laptop-lenovo-original-imaghqytqaydcgy2.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/6/s/j/thinkbook-15-g3-thin-and-light-laptop-lenovo-original-imaghqytru29zupk.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/q/s/thinkbook-15-g3-thin-and-light-laptop-lenovo-original-imaghqytsywhzuwv.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/e/y/thinkbook-15-g3-thin-and-light-laptop-lenovo-original-imaghqyt3d3bjh6x.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/a/9/u/thinkbook-15-g3-thin-and-light-laptop-lenovo-original-imaghqytygvhzwhu.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/t/g/d/thinkbook-15-g3-thin-and-light-laptop-lenovo-original-imaghqytxwnv5z4k.jpeg?q=70"
      }
      ],
      "category": "Laptop"
   },
   {
      "name":"Infinix INBook X2 Plus Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) XL25 Thin and Light Laptop  (15.6 Inch, Blue, 1.58 Kg)",
      "description":"The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
      "price":47990,
      "images":[
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/f/r/-original-imagjfgyxmcz7scf.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/w/u/k/-original-imagjfgyecea4pcu.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/z/p/-original-imagjfgyxj3nv4wk.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/t/b/0/-original-imagjfgyemjbge8n.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/b/b/9/-original-imagjfgytcz9xk2j.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/g/i/-original-imagjfgyha7agymv.jpeg?q=70"
      }
      ],
      "category": "Laptop"
   },
   {
      "name":"Infinix INBook Y1 Plus Intel Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) XL28 Thin and Light Laptop  (15.6 inch, Blue, 1.76 kg)",
      "description":"The sleek and fashionable Infinix INBook Y1 Plus features a large, colour-enriched 39.62 cm (15.6) FHD Display. Also, this laptop's Intel Core i3 processor, 8 GB of RAM, and up to 512 GB of storage provide an all-day, lag-free experience in addition to a sophisticated and elegant appearance. Also, at 1.76 kg, it is lightweight and easy to transport. Moreover, in order to save time, its 65 W USB Type-C fast charger can charge this laptop up to 75% in around 60 minutes.",
      "price":29990,
      "images":[
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/u/u/k/-original-imagmxuravjcmdwu.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/7/l/b/-original-imagmxjbdjwed2fd.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/9/g/-original-imagmxjb3xhhttrw.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/v/m/l/-original-imagmxjbxwh3zfz2.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/o/x/r/-original-imagmxjbdqwq6rab.jpeg?q=70"
      }
      ],
      "category": "Laptop"
   },
   {
      "name":"ASUS Vivobook Go 15 (2023) Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) E1504FA-NJ322WS Thin and Light Laptop  (15.6 Inch, Mixed Black, 1.63 Kg, With MS Office)",
      "description":"The incredible Vivobook Go 15 laptop, which is packed with excellent features, provides a seamless user experience and a stunning appearance. You can carry out all of your professional tasks with the AMD Ryzen 7000-U Series processor, 5500 MHz quick LDDR5, and PCIe 3.0 SSD storage included in the Vivobook Go 15 laptop. The ASUS SonicMaster and DTS Audio Processor in this laptop, which both deliver remarkably loud, high-quality sound, let you move to your favourite tunes. Its laptop's excellently engineered 180-degree lay-flat hinge enables efficient information sharing and engagement.",
      "price":35990,
      "images":[
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/u/p/-original-imagpxgrxrqsmdqz.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/2/4/-original-imagnzhgsaxrqbzf.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/4/g/1/-original-imagnzgjctgu3cat.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/k/v/0/-original-imagnrhvg9tgeree.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/0/m/m/-original-imagnzgjcbhnwzgx.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/x/n/9/-original-imagnzh2jp2vm8z8.jpeg?q=70"
      }
      ],
      "category": "Laptop"
   },
   {
      "name":"HP 14s Intel Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) 14s - dy5005TU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 Kg kg, With MS Office)",
      "description":"Enjoy the slick operations and powerful performance of this HP laptop, which is stuffed with innovative features. You can effortlessly operate at your optimum with the aid of a strong processor and graphics card. You can complete your tasks swiftly thanks to this laptop's integrated 4G LTE configuration and USB connectors. You can bring everything you need with you thanks to this laptop's fast booting technology.",
      "price":58990,
      "images":[
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/e/6/0/-original-imagp7pgftd3zehz.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/o/m/h/-original-imagkqwzfgfht4ce.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/t/1/l/-original-imagkqwzmz43jvff.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/l5h2xe80/computer/f/e/z/14s-dy5005tu-thin-and-light-laptop-hp-original-imagg4rc6ukz2ddv.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/l5h2xe80/computer/o/b/d/14s-dy5005tu-thin-and-light-laptop-hp-original-imagg4rcb7dspgt5.jpeg?q=70"
      },
      {
         "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/a/q/-original-imagkqwzgc4shvgn.jpeg?q=70"
      }
      ],
      "category": "Laptop"
   }
  ]
  const headphones=[
    {
       "name":"boAt Airdopes Alpha with 35 HRS Playback, 13mm Drivers, Dual Mics ENx & Beast Mode Bluetooth Headset  (Swedish White, In the Ear) Headphones",
       "description":"Groove to your favorite songs for hours on end, flaunting the boAt Airdopes Alpha Earbuds. boAts IWPTM tech speeds up pairing so theres no time lost for your entertainment. The large 13 mm dual drivers pump out high-octane boAt Signature sound making these earbuds truly an alpha. Long rides are no longer tedious when you can catch up on podcasts or new OTT releases, courtesy of the immense playback time of up to 35 hours. Additionally, ASAPTM charge ensures that the fun never stops with up to 120 minutes of playtime when charged for merely 10 minutes. Moreover, BEASTTM mode eliminates lag with 50 ms low latency infusing a dose of adrenaline into your gaming sessions. With dynamic sound in sync, visuals feel realistic. These earbuds also boast IPX5 resistance that keeps sweat and water splashes at bay for hassle-free workouts at the gym. A simple tap enables the voice assistant to follow a plethora of commands ranging from calling your loved ones to creating your shopping list. Complete your tasks on the go, with the alpha of true wireless sound at your fingertips.",
       "price":999,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/i/7/-original-imagqre9pyfawzcg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/w/y/v/-original-imagr5j73phfsazy.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/e/c/-original-imagr5j7rhxdvxgs.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/q/2/g/-original-imagr5j7bzghcttz.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/i/3/-original-imagqre9x72wytgt.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/0/p/u/-original-imagr5j7cdgfjqef.jpeg?q=70"
       }
       ],
       "category": "Headphones"
    },
    {
       "name":"Noise Buds Trance with 45 Hrs Playtime, Low Latency (up to 40ms), HyperSync, and IPX5 Bluetooth Headset  (Jet Black, True Wireless) Headphones",
       "description":"You can comfortably listen to music all day long on the Noise Buds Trance Bluetooth Headset. The bean design of this headset ensures a perfect fit while tuning into your favourite music. With up to 45 hours of playtime, you can enjoy uninterrupted music anytime, anywhere. This headset has a quick charging feature so that you do not have to wait long for charging it. Featuring a 40 ms of latency, you can listen to lag-free content. You can connect to external devices to access unlimited content.",
       "price":1199,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/b/3/0/-original-imagpgv5yg9y9ja4.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/8/z/5/-original-imagpgv5twrj6jdg.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/w/m/s/-original-imagpgv5b6czrzzx.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/h/u/-original-imagpgv5tswvezye.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/g/n/-original-imagpgv5vgfzk2j2.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/r/9/u/-original-imagpgv5vw3sht5z.jpeg?q=70"
       }
       ],
       "category": "Headphones"
    },
    {
       "name":"boAt Rockerz 255 Pro+ /258 Pro+ with ASAP Charge and upto 40 Hours Playback Bluetooth Headset  (Teal Green, In the Ear) Headphones",
       "description":"boAt Rockerz 255 Pro+ is a power-packed in-ear wireless neckband headphone that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with Bluetooth V5.0 for instant wireless connectivity. Its super powerful 300mAh battery provides a humongous playtime of up to 40 hours for an extended audio bliss. Its 10mm dynamic drivers help supply superior musical experience to the user with immersive sound. With our ASAP fast charge technology, you can get the headphones fully charged in just 60 minutes. It also offers resistance against water and sweat with IPX7 rated premium build. One can control the playback and calls easily via the provided multifunction controls and even summon respective smart Voice Assistant. Get ready to get enthralled by the pumped up audio and soaring vibe of Rockerz 255 Pro+",
       "price":1199,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/m/5/v/-original-image9ehhvpt8vzt.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/u/3/8/-original-image9ehb2hxcnzb.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/e/e/n/-original-image9ehzcmfgj3s.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/v/g/j/-original-image9ehzqzehczf.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/j/4/z/-original-image9ehcn5ypf4s.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/v/0/i/-original-image9ehxy9ggytn.jpeg?q=70"
       }
       ],
       "category": "Headphones"
    },
    {
       "name":"Boult Audio Loop2 with 10mm Drivers, BoomX Rich Bass, In-line Controls, Soft Silicon Snugfit Wired Headset  (Teal Blue, In the Ear) Headphones",
       "description":"Boult Audio Loop2 with 10mm Drivers, BoomX Rich Bass, In-line Controls, Soft Silicon Snugfit Wired Headset  (Teal Blue, In the Ear)",
       "price":349,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/z/r/v/-original-imagjfqefb3hzhcw.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/m/y/e/-original-imagjfqevy4uefez.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/5/r/z/-original-imagjfqe55zqtfhe.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/t/h/c/-original-imaghucfyambsj4t.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/w/7/f/-original-imaghucfkaxuvctw.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/2/z/f/-original-imaghucfnqhnqmmg.jpeg?q=70"
       }
       ],
       "category": "Headphones"
    },
    {
       "name":"Boult Audio X45 with Quad Mic ENC, 40H Playtime, 45ms Ultra Low Latency, Made In India, 5.3 Bluetooth Headset  (Grey, True Wireless) Headphones",
       "description":"Experience perfection when it comes to calling with the Boult X45 Earbuds' Zen Quad Mic ENC, ensuring crystal-clear voice calls and virtual meetings even in noisy environments. Experience sound like never before with the 13 mm BoomX Drivers, delivering breathtaking audio with deep, resonant bass and crisp, clear highs. Don't let water or sweat hold you back, as these IPX5 water-resistant earbuds are perfect for all kinds of adventures. Enjoy seamless connectivity with Bluetooth 5.3, while the Combat Gaming feature with low latency technology immerses you in lag-free audio for an unbeatable gaming experience. With just 10 minutes of charging, get 100 minutes of playtime, and enjoy an impressive 40 hours of total playtime.",
       "price":1199,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/y/k/-original-imagz63sh8hjdh9q.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/y/p/k/-original-imagn43zzytfpagf.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/j/q/l/-original-imagmtasaueyjpgq.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/i/o/-original-imagmtasfzazpyj5.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/3/r/b/-original-imagmtasd5ttvvzd.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/0/w/k/-original-imagmtassxjhaehy.jpeg?q=70"
       }
       ],
       "category": "Headphones"
    },
    {
       "name":"Noise Buds Trance with 45 Hrs Playtime, Low Latency (up to 40ms), HyperSync, and IPX5 Bluetooth Headset  (True Blue, True Wireless) Headphones",
       "description":"You can comfortably listen to music all day long on the Noise Buds Trance Bluetooth Headset. The bean design of this headset ensures a perfect fit while tuning into your favourite music. With up to 45 hours of playtime, you can enjoy uninterrupted music anytime, anywhere. This headset has a quick charging feature so that you do not have to wait long for charging it. Featuring a 40 ms of latency, you can listen to lag-free content. You can connect to external devices to access unlimited content.",
       "price":1199,
       "images":[
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/m/c/s/-original-imagpgv56gcy4hrs.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/e/l/-original-imagpgv5psfgzexb.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/v/e/-original-imagpgv5ezsqbyva.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/e/l/j/-original-imagpgv5fsuqkebq.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/y/h/-original-imagpgv5heau4agf.jpeg?q=70"
       },
       {
          "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/t/j/x/-original-imagpgv5xfaeehbx.jpeg?q=70"
       }
       ],
       "category": "Headphones"
    }
    ]
    const Mobile_Cover=[
      {
         "name":"KartV Back Cover for Vivo Y21, Vivo Y21 2021, Vivo Y33s  (Black, Camera Bump Protector, Pack of: 1) Mobile Cover",
         "description":"KartV Brings you another back cover for your smartphone. Camera Bump Protection, Precise cut-outs for speakers, camera, charging ports, audio ports and buttons. Easy access to all buttons and ports. Premium Material Environmental-friendly soft silicone material with no toxic. Easy to grip and give you a comfortable touch feeling. Excellent Protection Soft skin protects your phone from accidental drops, bumps, dents, and scratches, Reduce the risk of any possible damage.",
         "price":171,
         "images":[
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l22724w0/cases-covers/back-cover/e/q/l/liquidsilicone-017-04-101-kartv-original-imagdhkmmczgb4kw.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l22724w0/cases-covers/back-cover/r/q/9/liquidsilicone-017-04-101-kartv-original-imagdhkmkbhgdgcm.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l22724w0/cases-covers/back-cover/8/2/d/liquidsilicone-017-04-101-kartv-original-imagdhkmpuzvggfp.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l22724w0/cases-covers/back-cover/l/p/p/liquidsilicone-017-04-101-kartv-original-imagdhkmgqxtgzcd.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l22724w0/cases-covers/back-cover/x/s/o/liquidsilicone-017-04-101-kartv-original-imagdhkmmq9u3hmg.jpeg?q=70"
         }
         ],
         "category": "Mobile Cover"
      },
      {
         "name":"SHINESTAR. Back Cover for Poco M2 Pro, Mi Redmi Note 9 Pro, Mi Redmi Note 9 Pro Max  (Black, Pack of: 1) Mobile Cover",
         "description":"Exclusively Design for SmartPhones.?TPU+Actylic Hard Cover??The back case made of TPU and acrylic hard cover.TPU can protect corner guard of your Phone better and acrylic hard cover can display the original beauty of the phone.?Soft Combine with Tough ??Our material is soft combine with tough,which is excellent touch and shockproof.",
         "price":224,
         "images":[
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/f/y/b/-original-imagrh3fb3zcxhbs.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/khuvxjk0/cases-covers/back-cover/m/g/p/shinestar-n9-eagle-blk-original-imafxs3uafbhasjh.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/kg40k280/cases-covers/back-cover/5/g/p/shinestar-n9pro-eagle-blk-original-imafwf8h6egn4grs.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/kg40k280/cases-covers/back-cover/5/g/p/shinestar-n9pro-eagle-blk-original-imafwf8huuy4v83m.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/kg40k280/cases-covers/back-cover/5/g/p/shinestar-n9pro-eagle-blk-original-imafwf8hf92zhkzx.jpeg?q=70"
         }
         ],
         "category": "Mobile Cover"
      },
      {
         "name":"Micvir Back Cover for Mi Redmi Note 7 Pro, Mi Redmi Note 7, Mi Redmi Note 7S  (Transparent, Black, Camera Bump Protector, Pack of: 1) Mobile Cover",
         "description":"Micvir® Back Cases & Covers Give Protection for Your Smartphone Mi Redmi Note 7 Pro || Mi Redmi Note 7 || Mi Redmi Note 7S Our Case covers all four corners with high quality TPU bumper for best protection To Your Phone . Your Smartphone camera lens is protected by a small raised lip around camera. All cutouts for charging ports, buttons, speaker grill, microphone, camera, LED flash will be perfect with precision cuts.Unique Fabric material applied on a silicon TPU layer. This case consist of soft TPU layer, hard PC layer and a final Top Fabric layer. It provides great look and feel to Your Smartphone.",
         "price":202,
         "images":[
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/i/a/6/ipaky-rdn7-001-hobbytronics-original-imagb9hn2qagn9jz.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-cases-covers/c/j/y/redmi-note-7-7s-note-7-pro-back-cover-loklix-original-imagb9hnaaefhkqk.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-cases-covers/d/b/q/redmi-note-7-7s-note-7-pro-back-cover-loklix-original-imagb9hnfwzfe8fc.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-cases-covers/o/g/o/redmi-note-7-7s-note-7-pro-back-cover-loklix-original-imagb9hnzxyghm8t.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/knj7wcw0/cases-covers/back-cover/x/g/f/egl-one-9r-blk-micvir-original-imag26v5rcmqh4ea.jpeg?q=70"
         }
         ],
         "category": "Mobile Cover"
      },
      {
         "name":"GLOBALCASE Back Cover for Google Pixel 6a  (Black, Grip Case, Pack of: 1) Mobile Cover",
         "description":"globalcase Premium Ultra Slim Case fits your Device perfectly and wraps all around edges and back to provides protection in clarity that unveils the phone's original design,with a scratch-resistant coating, the clear back stays clean an it clearly display's your device's slim body.",
         "price":249,
         "images":[
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l51d30w0/cases-covers/back-cover/a/1/u/yrty-hola-original-imagftydeez9jgwg.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/l51d30w0/cases-covers/back-cover/o/k/l/yrty-hola-original-imagftydbecvvcz7.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/l/k/j/candy-pixel-6a-1-globalcase-original-imaggjt5hsvguguf.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/a/u/w/candy-pixel-6a-1-globalcase-original-imaggjt5hwzpcgkh.jpeg?q=70"
         }
         ],
         "category": "Mobile Cover"
      },
      {
         "name":"SHINESTAR. Back Cover for Oppo A78 5G  (Black, Pack of: 1) Mobile Cover",
         "description":"Exclusively Design for SmartPhones,Made with Premium Soft PU Leather,Full Access-cut outs for Easy Access to All Ports and Buttons.High Quality Note Holder Case,made of synthetic PU Leather with luuriously smooth feel and looks.Enhanced & Updated TPU inner shell rather than brittle PC shell.Soft fleible TPU",
         "price":259,
         "images":[
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/t/o/9/a785g-flip-blk-shinestar-original-imagmbqdg8nyqdyq.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/3/h/z/a785g-flip-blk-shinestar-original-imagmbqdzjcuzqez.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/6/j/9/a785g-flip-blk-shinestar-original-imagmbqdxzafmep5.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/q/6/z/v255g-flip-brwn-shinestar-original-imafsfzk6yk43gzu.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/6/5/n/a785g-flip-blk-shinestar-original-imagmbqdvfrm6pxg.jpeg?q=70"
         }
         ],
         "category": "Mobile Cover"
      },
      {
         "name":"Sprig Liquid Silicone Back Cover for Realme GT Neo 3, GT Neo 3  (Purple, Grip Case, Silicon, Pack of: 1) Mobile Cover",
         "description":"1 Kindly note that this back cover is made of Environmentally sustainable Liquid Silicone Material as per ROHS Standards with a very smooth finish supported by PC(Polycarbonate) Casing inside to make it bit stiff 2 Sides & Bottom of Back cover will lack stiffness to accomodate flexibility for Buttons/design cutouts 3 The Case while retaining its smoothness has very good grip & absorbs shocks protecting your hardware 4 All Sprig Liquid Silicone Cases support wireless charging 5 Sprig Liquid Silicone cases can be easily cleaned using soap water & do not lose colour over a period of time 6 Sprig does not use any recycled material/solid silicone/synthetic rubber in any of its products due to inherent Health hazards 7. Microfibre cloth inside back cover minimises scratches at the back & sides of your phone 8. For Colour/Product Change Requests - Reverse pickup fee of Rs 99 will be charged else kindly drop it to nearest post office in which case, on receipt we will initiate colour change replacement.",
         "price":649,
         "images":[
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/x/g/i/oppo-rm-gt-neo-3-slc-cvr-lt-prpl-sprig-original-imaggx3ybenkf5yn.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/b/w/t/oppo-rm-gt-neo-3-slc-cvr-lt-prpl-sprig-original-imaggx3yjdxxd3g8.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/3/q/v/oppo-rm-gt-neo-3-slc-cvr-lt-prpl-sprig-original-imaggx3yujxhyfqz.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/w/c/e/oppo-rm-gt-neo-3-slc-cvr-lt-prpl-sprig-original-imaggx3y79vyrzzr.jpeg?q=70"
         },
         {
            "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/z/q/v/13-slc-cvr-gold-brw-sprig-original-imagmhczxmjw9vja.jpeg?q=70"
         }
         ],
         "category": "Mobile Cover"
      }
      ]
      const Tablet=[
        {
           "name":"SAMSUNG Galaxy Tab S6 Lite With Stylus 4 GB RAM 64 GB ROM 10.4 inch with Wi-Fi Only Tablet (Blue)",
           "description":"Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Blue",
           "price":28999,
           "images":[
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/v/t/t/sm-p613nzbainu-samsung-original-imagfdad5phxgz4p.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/e/2/j/sm-p613nzbainu-samsung-original-imagfdadhfqjheeh.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/t/u/m/sm-p613nzbainu-samsung-original-imagfdadwg4cghcf.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/kb5eikw0/tablet/n/q/j/samsung-sm-p615nzbainu-original-imafskynzedwxafz.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/i/9/2/sm-p613nzbainu-samsung-original-imagfdaduwhdcw3n.jpeg?q=70"
           }
           ],
           "category": "Tablet"
        },
        {
           "name":"SAMSUNG Galaxy Tab S6 Lite With Stylus 4 GB RAM 128 GB ROM 10.4 inch with Wi-Fi Only Tablet (Blue)",
           "description":"Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Blue",
           "price":31999,
           "images":[
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/v/t/t/sm-p613nzbainu-samsung-original-imagfdad5phxgz4p.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/h/r/t/-original-imagnffkqfqswyqa.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/e/2/j/sm-p613nzbainu-samsung-original-imagfdadhfqjheeh.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l4hcx3k0/tablet/t/u/m/sm-p613nzbainu-samsung-original-imagfdadwg4cghcf.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/kb5eikw0/tablet/n/q/j/samsung-sm-p615nzbainu-original-imafskynzedwxafz.jpeg?q=70"
           }
           ],
           "category": "Tablet"
        },
        {
           "name":"APPLE iPad Air (5th gen) 256 GB ROM 10.9 Inch with Wi-Fi Only (Blue) Tablet",
           "description":"APPLE iPad Air (5th gen) 256 GB ROM 10.9 Inch with Wi-Fi Only (Blue)",
           "price":68900,
           "images":[
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l0jwbrk0/tablet/w/w/o/-original-imagcbjahwcnqbfh.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l0jwbrk0/tablet/r/5/0/-original-imagcbjak3cegv2n.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l0jwbrk0/tablet/u/1/c/-original-imagcbjafkkzcjgy.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l0jwbrk0/tablet/o/k/8/-original-imagcbja829qvhd9.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l0jwbrk0/tablet/c/y/3/-original-imagcbjabugv8vyk.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l0jwbrk0/tablet/7/k/i/-original-imagcbjakfxbrnyx.jpeg?q=70"
           }
           ],
           "category": "Tablet"
        },
        {
           "name":"MOTOROLA tab g70 LTE 6 GB RAM 128 GB ROM 11 inch with Wi-Fi+4G Tablet (Modernist Teal) ",
           "description":"With moto tab g70 in your hands, you can practically possess everything you need to be on top of entertainment and work efficiency. With an astonishing 27.94 cm (11) FHD+ 2K IPS LCD display you can enjoy a cinematic visual experience. With MediaTek Helio G90T Octa-core Processor and 6 GB of RAM, this device can elevate your productivity to a great height. The moto tab g70 comes loaded with a Dolby Atmos Quad-speaker setup that enhances the acoustics and brings every tone to life. This gadget boasts impressive internal storage of 128 GB which can be expanded up to 1 TB. This way you can store bundles of music, movies, and much more.",
           "price":22999,
           "images":[
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/kyag87k0/tablet/4/n/o/g70-lte-moto-original-imagak3huz7jweyz.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l12h1u80/tablet/6/3/n/zaaw0002in-motorola-original-imagcpssqmcyrhpn.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l12h1u80/tablet/0/g/q/zaaw0002in-motorola-original-imagcpssfzddfpdb.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l12h1u80/tablet/8/y/1/zaaw0002in-motorola-original-imagcpsspc8jpf74.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l12h1u80/tablet/7/r/s/zaaw0002in-motorola-original-imagcpssuy9vggzm.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/l12h1u80/tablet/a/i/d/zaaw0002in-motorola-original-imagcpsspq6zwa2a.jpeg?q=70"
           }
           ],
           "category": "Tablet"
        },
        {
           "name":"REDMI Pad 4 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Graphite Gray) Tablet",
           "description":"Explore different perspectives and enjoy smooth gaming with Redmi Pad that enables you to achieve top-notch productivity. This gadget’s display features a 2K resolution and supports up to a billion hues, making everything on it a joy to watch. Furthermore, with the MediaTek Helio G99 processor equipped with the Redmi Pad, which makes every experience incredibly quick, you can multitask like a pro and breeze through games, papers, and other tasks without any hindrance. Moreover, thanks to the Redmi Pad’s multi-window capability, you can launch up to three apps at once by using two split-screen windows and one floating window, enabling you to enhance your performance.",
           "price":17999,
           "images":[
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/l/e/y/-original-imaggp4gpux53gcz.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/w/x/o/-original-imaggp4ggvt6hja5.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/e/u/c/-original-imaggp4gphmevwgb.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/1/j/l/-original-imaggp4gbepzeta8.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/j/s/a/-original-imaggp4gbcuh2xq7.jpeg?q=70"
           }
           ],
           "category": "Tablet"
        },
        {
           "name":"REDMI Pad 6 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Graphite Gray) Tablet",
           "description":"Explore different perspectives and enjoy smooth gaming with Redmi Pad that enables you to achieve top-notch productivity. This gadget’s display features a 2K resolution and supports up to a billion hues, making everything on it a joy to watch. Furthermore, with the MediaTek Helio G99 processor equipped with the Redmi Pad, which makes every experience incredibly quick, you can multitask like a pro and breeze through games, papers, and other tasks without any hindrance. Moreover, thanks to the Redmi Pad’s multi-window capability, you can launch up to three apps at once by using two split-screen windows and one floating window, enabling you to enhance your performance.",
           "price":19999,
           "images":[
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/l/e/y/-original-imaggp4gpux53gcz.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/w/x/o/-original-imaggp4ggvt6hja5.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/e/u/c/-original-imaggp4gphmevwgb.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/1/j/l/-original-imaggp4gbepzeta8.jpeg?q=70"
           },
           {
              "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/j/s/a/-original-imaggp4gbcuh2xq7.jpeg?q=70"
           }
           ],
           "category": "Tablet"
        }
        ]
        const TV=[
          {
             "name":"BeethoSOL 60 cm (24 inch) HD Ready LED TV  (LEDATVBG2483HD17-TP)",
             "description":"You can enjoy immersive and captivating visuals with the BeethoSOL LED TV, which offers exceptional image quality. This TV's bezel-less design enhances the elegance and sophistication of any living space. And, with the absence of bezels around the screen, this TV lets you fully immerse yourself in the visuals. Furthermore, this TV's metal back design not only enhances durability but also adds a modern and sleek touch that seamlessly complements any interior decor.",
             "price":5899,
             "images":[
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/0/w/m/ledatvbg2483hd17-tp-beethosol-original-imagzheaxxzmwqza.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/m/w/c/ledatvbg2483hd17-tp-beethosol-original-imagzheauxpqwggt.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/9/z/n/ledatvbg2483hd17-tp-beethosol-original-imagzheaqu8qaggg.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/t/f/q/ledatvbg2483hd17-tp-beethosol-original-imagzheaf7hz55mw.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/m/b/n/ledatvbg2483hd17-tp-beethosol-original-imagzheaxubvesyu.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/f/x/5/ledatvbg2483hd17-tp-beethosol-original-imagzheajzbkhwfg.jpeg?q=70"
             }
             ],
             "category": "TV"
          },
          {
             "name":"XElectron X 80 cm (32 inch) HD Ready LED Smart Android TV  (32XETV)",
             "description":"Resolution: HD Ready (1366 x 768) | Refresh Rate: 60 hertz | Viewing angle: 178 degree - Connectivity: HDMI Ports to connect Set-Top Box, Blu Ray players, Gaming Console | USB Ports to connect Hard Drives & other USB devices | Wifi | LAN (Ethernet) - Sound output: 20 Watts Output | In-built Soundbar Speakers Optimum range remote with shortcut keys Remote | True Display | Android OS | HDR-10 | Wide Color Gamut | Supported Applications : Sony Liv, Disney+Hotstar, Zee5, Youtube, etc - Display: HRDD Techonology | Eco Vision | Cinema Mode | Cinema Zoom | Supports 16.7 Million Colours | Frameless Design - Warranty Information: 1 year warranty provided by the manufacturer from date of purchase - Installation: For requesting installation/wall mounting/demo of this product once delivered, please directly call XElectron support (Please visit brand website for customer care numbers)",
             "price":8499,
             "images":[
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/k/m/c/32xetv-32xetv-xelectron-original-imagn3bkuumzhhfb.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/z/v/d/-original-imagmg2crtwgxakd.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/i/0/f/-original-imagnb2nx6qyhvhj.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/b/y/l/-original-imagnb2nrzrw9ghy.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/e/4/n/-original-imagnb2njrgyrzze.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/d/6/b/-original-imagnb2nfkh2qwtk.jpeg?q=70"
             }
             ],
             "category": "TV"
          },
          {
             "name":"SONY Bravia 80 cm (32 inch) HD Ready LED Smart Google TV  (KD - 32W820K)",
             "description":"Experience the ultimate beauty of a daylight scene with crystal clear clarity on the Sony W820K 80 cm (32) HD Ready LED Smart TV. This TV comes with an X-Reality PRO display so that you can explore life-like visuals with refined colours and reduced noise. Thanks to the in-built voice control system and Google Assistant feature, you can enjoy streaming multiple applications just by using your voice. Also, it is equipped with a dedicated Netflix button that allows you to access content with just a single click.",
             "price":25990,
             "images":[
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/l3bx5e80/television/l/7/g/-original-imageh2qfqz9t5gs.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/l3bx5e80/television/r/n/v/-original-imageh2qrt7hwuzt.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/l3bx5e80/television/l/7/g/-original-imageh2qfqz9t5gs.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/l3bx5e80/television/x/z/5/-original-imageh2qmg25mwgn.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/ko0d6kw0/television/t/z/p/kd-50x74-sony-original-imag2jyufqb3zqys.jpeg?q=70"
             }
             ],
             "category": "TV"
          },
          {
             "name":"iFFALCON by TCL U62 126 cm (50 inch) Ultra HD (4K) LED Smart Google TV with Bezel-Less Design and Dolby Audio  (iFF50U62)",
             "description":"With the iFFALCON TV, which was meticulously created to enhance your visual experience, you can watch your favourite movie and experience every action with vivid clarity and amazing multimedia quality. A standout viewing experience with eye-catching luminance, great shadow definition, and brilliant colour reproduction is provided by this TV's HDR function. Additionally, this TV's Dynamic Colour Enhancement technology scales up the low coloured pictures to colour-enriched pictures, enhancing your enjoyment of TV. Moreover, the borderless design of this TV provides for a large viewing area and helps you to fully immerse yourself in the programme you are watching.",
             "price":27999,
             "images":[
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/k/4/q/-original-imagnvxzdrcbvzfn.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/l/8/f/-original-imaghepncy8efe2q.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/g/l/a/-original-imaghepn9yhyzqgg.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/q/e/e/-original-imaghepn5nzfjpgq.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/e/k/b/-original-imaghepn8f9wb7jt.jpeg?q=70"
             }
             ],
             "category": "TV"
          },
          {
             "name":"BeethoSOL 60 cm (24 inch) HD Ready LED TV  (ATVBG24HDEK)",
             "description":"BeethoSOL 60 cm (24 inch) HD Ready LED TV  (ATVBG24HDEK)",
             "price":5899,
             "images":[
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/l/l/x/-original-imaghy7kyyr9pnrr.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/2/b/l/ledatvbg2481hdz17-ek-beethosol-original-imaggezdk5pfrvec.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/l/g/g/ledatvbg2481hdz17-ek-beethosol-original-imaggezdeteeatzc.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/w/u/m/ledatvbg2481hdz17-ek-beethosol-original-imaggezd9usbfggy.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/c/l/l/ledatvbg2481hdz17-ek-beethosol-original-imaggezd3zv9phh7.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/0/b/q/ledatvbg2481hdz17-ek-beethosol-original-imaggezdr5zffe5r.jpeg?q=70"
             }
             ],
             "category": "TV"
          },
          {
             "name":"Dyanora 80 cm (32 inch) HD Ready LED Smart Android Based TV with Noise Reduction, Android 9.0, Powerful Audio Box Speakers  (DY-LD32H2S)",
             "description":"The All new Dyanora 32 Inch Frameless smart tv is there, to enhance your viewing experience with A+ Grade Panel, Wide viewing angle and Dynamic Picture Enhancement. Adding to the bundle comes the 20 watt box speakers and the feature of Cinema Zoom that provides you, a theatre like experience at your home. Browsing through the content becomes seamless with the tailor made UI and the feature like Mira Cast & E-share lets you bring your smart phone to your smart tv. On and all this tv brought to you by Dyanora is a complete package, so that you can enjoy your favourite shows, movies with your friends and family.",
             "price":8599,
             "images":[
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/a/d/d/-original-imaghbbqwnhg6gpe.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/z/2/g/-original-imaghbbq6nxxsk2g.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/l4d2ljk0/television/r/p/e/-original-imagf9thqp7zyqzs.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/4/o/-original-imaghbbqpwwxywq4.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/6/u/u/-original-imaghbbqnguvdmbt.jpeg?q=70"
             },
             {
                "url":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/j/p/f/-original-imagf9thxrjqtrqy.jpeg?q=70"
             }
             ],
             "category": "TV"
          }
          ]
          

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Categorys/>
          <SliderUp />
          
          <div  className="parent">
            <h1 style={{fontSize:"2.4vmax"}}>Laptop</h1>
            <Slider sliderImageUrl={Laptop}/>
          </div>
          <div  className="parent">
            <h1 style={{ marginLeft: "50px",fontSize:"2.4vmax" }}>Headphones</h1>
            <Slider sliderImageUrl={headphones}/>
          </div>
          <div  className="parent">
            <h1 style={{ marginLeft: "50px",fontSize:"2.4vmax"  }}>Mobile</h1>
            <Slider sliderImageUrl={sliderImageUrl}/>
          </div>
          <div  className="parent">
            <h1 style={{ marginLeft: "50px",fontSize:"2.4vmax"  }}>Mobile Cover</h1>
            <Slider sliderImageUrl={Mobile_Cover}/>
          </div>
          <div  className="parent">
            <h1 style={{ marginLeft: "50px",fontSize:"2.4vmax"  }}>Tablet</h1>
            <Slider sliderImageUrl={Tablet}/>
          </div>
          <div  className="parent">
            <h1 style={{ marginLeft: "50px",fontSize:"2.4vmax"  }}>TV</h1>
            <Slider sliderImageUrl={TV}/>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
