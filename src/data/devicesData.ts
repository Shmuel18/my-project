export interface Device {
  id: number;
  name: string;
  category: string;
  frequency?: string;
  manufacturer: string;
  status: "פעיל" | "ממתין לבדיקה" | "לא בשימוש";
  image: string;
}

export const devicesData: Device[] = [
  // לווינים
  {
    id: 1,
    name: "SatCom A1",
    category: "לווינים",
    frequency: "10.7–12.75 GHz",
    manufacturer: "SpaceTech",
    status: "פעיל",
    image: "https://images1.ynet.co.il/PicServer3/2013/09/12/4857113/35647805921584490489no.jpg",
  },
  {
    id: 2,
    name: "Orbiter-X",
    category: "לווינים",
    frequency: "8.0–8.4 GHz",
    manufacturer: "OrbitalSys",
    status: "ממתין לבדיקה",
    image: "https://files.geektime.co.il/wp-content/uploads/2014/06/shutterstock_119852509.jpg.webp",
  },
  {
    id: 3,
    name: "GeoTrack 200",
    category: "לווינים",
    frequency: "7.25–7.75 GHz",
    manufacturer: "GeoSat",
    status: "לא בשימוש",
    image: "https://ynet-pic1.yit.co.il/cdn-cgi/image/format=auto/picserver5/crop_images/2018/03/14/35549_0_0_183_103_medium.jpg",
  },

  // רחפנים
  {
    id: 4,
    name: "SkyDrone 500",
    category: "רחפנים",
    frequency: "2.4 GHz",
    manufacturer: "SkyTech",
    status: "פעיל",
    image: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/eilat.payngo.co.il/media/catalog/product/1/-/1-03_1_.png/w_700,h_700,r_contain",
  },
  {
    id: 5,
    name: "FalconEye",
    category: "רחפנים",
    frequency: "5.8 GHz",
    manufacturer: "Falcon Corp",
    status: "לא בשימוש",
    image: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/eilat.payngo.co.il/media/catalog/product/s/c/screenshot_2025-03-11_111301_1_1_.png/w_240,h_300,r_contain",
  },
  {
    id: 6,
    name: "Recon Mini",
    category: "רחפנים",
    frequency: "5.2 GHz",
    manufacturer: "ReconSys",
    status: "ממתין לבדיקה",
    image: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/eilat.payngo.co.il/media/catalog/product/1/-/1-04_1_.png/w_240,h_300,r_contain",
  },

  // מכשירי קשר
  {
    id: 7,
    name: "ICOM IC-F1000",
    category: "מכשירי קשר",
    frequency: "400–470 MHz",
    manufacturer: "ICOM",
    status: "פעיל",
    image: "https://www.icomamerica.com/en/products/landmobile/portables/f1000/IC-F1000.jpg",
  },
  {
    id: 8,
    name: "Motorola XTS 5000",
    category: "מכשירי קשר",
    frequency: "136–174 MHz",
    manufacturer: "Motorola",
    status: "לא בשימוש",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9cf43c67eb104564b35f03f8d368fab4w.jpg_220x220q75.jpg_.avif",
  },
  {
    id: 9,
    name: "Kenwood TK-3360",
    category: "מכשירי קשר",
    frequency: "450–520 MHz",
    manufacturer: "Kenwood",
    status: "ממתין לבדיקה",
    image: "https://dummyimage.com/150x150/000/fff&text=Kenwood+TK-3360",
  },

  // מערכות הפעלה
  {
    id: 10,
    name: "ControlOS Alpha",
    category: "מערכות הפעלה",
    manufacturer: "ControlTech",
    status: "פעיל",
    image: "https://dummyimage.com/150x150/000/fff&text=ControlOS+Alpha",
  },
  {
    id: 11,
    name: "RemoteLink OS",
    category: "מערכות הפעלה",
    manufacturer: "RemoteWare",
    status: "ממתין לבדיקה",
    image: "https://techtime.co.il/wp-content/uploads/2024/10/AMOS-4.jpg",
  },
  {
    id: 12,
    name: "SatBase RT",
    category: "מערכות הפעלה",
    manufacturer: "SatTech",
    status: "לא בשימוש",
    image: "https://techtime.co.il/wp-content/uploads/2024/10/AMOS-4.jpg",
  },

  // דוגמאות נוספות להשלמה
  {
    id: 13,
    name: "MicroCom 210",
    category: "מכשירי קשר",
    frequency: "403–430 MHz",
    manufacturer: "MicroCom",
    status: "פעיל",
    image: "https://techtime.co.il/wp-content/uploads/2024/10/AMOS-4.jpg",
  },
  {
    id: 14,
    name: "DroneView X",
    category: "רחפנים",
    frequency: "2.4 GHz",
    manufacturer: "AeroDrone",
    status: "פעיל",
    image: "https://techtime.co.il/wp-content/uploads/2024/10/AMOS-4.jpg",
  },
  {
    id: 15,
    name: "SkyMap OS",
    category: "מערכות הפעלה",
    manufacturer: "SkyControl",
    status: "פעיל",
    image: "https://techtime.co.il/wp-content/uploads/2024/10/AMOS-4.jpg",
  },
  {
    id: 16,
    name: "StarLinker",
    category: "לווינים",
    frequency: "12.5–13.0 GHz",
    manufacturer: "StarComm",
    status: "פעיל",
    image: "https://ynet-pic1.yit.co.il/cdn-cgi/image/format=auto/picserver5/crop_images/2019/05/26/254830_0_0_183_103_medium.jpg",
  },
  {
    id: 17,
    name: "AeroX One",
    category: "רחפנים",
    frequency: "5.8 GHz",
    manufacturer: "AeroSystems",
    status: "ממתין לבדיקה",
    image: "https://dummyimage.com/150x150/000/fff&text=AeroX+One",
  },
  {
    id: 18,
    name: "OrbNet OS",
    category: "מערכות הפעלה",
    manufacturer: "OrbitalSoft",
    status: "לא בשימוש",
    image: "https://dummyimage.com/150x150/000/fff&text=OrbNet+OS",
  },
  {
    id: 19,
    name: "VoiceLink Pro",
    category: "מכשירי קשר",
    frequency: "144–148 MHz",
    manufacturer: "LinkCom",
    status: "פעיל",
    image: "https://dummyimage.com/150x150/000/fff&text=VoiceLink+Pro",
  },
  {
    id: 20,
    name: "SatGuardian",
    category: "לווינים",
    frequency: "11.0–12.2 GHz",
    manufacturer: "GuardSat",
    status: "ממתין לבדיקה",
    image: "https://dummyimage.com/150x150/000/fff&text=SatGuardian",
  },
];