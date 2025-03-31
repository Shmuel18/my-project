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
      image: "https://via.placeholder.com/150?text=SatCom+A1",
    },
    {
      id: 2,
      name: "Orbiter-X",
      category: "לווינים",
      frequency: "8.0–8.4 GHz",
      manufacturer: "OrbitalSys",
      status: "ממתין לבדיקה",
      image: "https://via.placeholder.com/150?text=Orbiter+X",
    },
    {
      id: 3,
      name: "GeoTrack 200",
      category: "לווינים",
      frequency: "7.25–7.75 GHz",
      manufacturer: "GeoSat",
      status: "לא בשימוש",
      image: "https://via.placeholder.com/150?text=GeoTrack+200",
    },
  
    // רחפנים
    {
      id: 4,
      name: "SkyDrone 500",
      category: "רחפנים",
      frequency: "2.4 GHz",
      manufacturer: "SkyTech",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=SkyDrone+500",
    },
    {
      id: 5,
      name: "FalconEye",
      category: "רחפנים",
      frequency: "5.8 GHz",
      manufacturer: "Falcon Corp",
      status: "לא בשימוש",
      image: "https://via.placeholder.com/150?text=FalconEye",
    },
    {
      id: 6,
      name: "Recon Mini",
      category: "רחפנים",
      frequency: "5.2 GHz",
      manufacturer: "ReconSys",
      status: "ממתין לבדיקה",
      image: "https://via.placeholder.com/150?text=Recon+Mini",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Motorola_XTS5000_radio.jpg/220px-Motorola_XTS5000_radio.jpg",
    },
    {
      id: 9,
      name: "Kenwood TK-3360",
      category: "מכשירי קשר",
      frequency: "450–520 MHz",
      manufacturer: "Kenwood",
      status: "ממתין לבדיקה",
      image: "https://via.placeholder.com/150?text=Kenwood+TK-3360",
    },
  
    // מערכות הפעלה
    {
      id: 10,
      name: "ControlOS Alpha",
      category: "מערכות הפעלה",
      manufacturer: "ControlTech",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=ControlOS+Alpha",
    },
    {
      id: 11,
      name: "RemoteLink OS",
      category: "מערכות הפעלה",
      manufacturer: "RemoteWare",
      status: "ממתין לבדיקה",
      image: "https://via.placeholder.com/150?text=RemoteLink+OS",
    },
    {
      id: 12,
      name: "SatBase RT",
      category: "מערכות הפעלה",
      manufacturer: "SatTech",
      status: "לא בשימוש",
      image: "https://via.placeholder.com/150?text=SatBase+RT",
    },
  
    // דוגמאות נוספות להשלמה
    {
      id: 13,
      name: "MicroCom 210",
      category: "מכשירי קשר",
      frequency: "403–430 MHz",
      manufacturer: "MicroCom",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=MicroCom+210",
    },
    {
      id: 14,
      name: "DroneView X",
      category: "רחפנים",
      frequency: "2.4 GHz",
      manufacturer: "AeroDrone",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=DroneView+X",
    },
    {
      id: 15,
      name: "SkyMap OS",
      category: "מערכות הפעלה",
      manufacturer: "SkyControl",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=SkyMap+OS",
    },
    {
      id: 16,
      name: "StarLinker",
      category: "לווינים",
      frequency: "12.5–13.0 GHz",
      manufacturer: "StarComm",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=StarLinker",
    },
    {
      id: 17,
      name: "AeroX One",
      category: "רחפנים",
      frequency: "5.8 GHz",
      manufacturer: "AeroSystems",
      status: "ממתין לבדיקה",
      image: "https://via.placeholder.com/150?text=AeroX+One",
    },
    {
      id: 18,
      name: "OrbNet OS",
      category: "מערכות הפעלה",
      manufacturer: "OrbitalSoft",
      status: "לא בשימוש",
      image: "https://via.placeholder.com/150?text=OrbNet+OS",
    },
    {
      id: 19,
      name: "VoiceLink Pro",
      category: "מכשירי קשר",
      frequency: "144–148 MHz",
      manufacturer: "LinkCom",
      status: "פעיל",
      image: "https://via.placeholder.com/150?text=VoiceLink+Pro",
    },
    {
      id: 20,
      name: "SatGuardian",
      category: "לווינים",
      frequency: "11.0–12.2 GHz",
      manufacturer: "GuardSat",
      status: "ממתין לבדיקה",
      image: "https://via.placeholder.com/150?text=SatGuardian",
    },
  ];