import { Project, Status } from "./types";

const ProjectData: Project[] = [
  {
      name: "TV Remote",
      label: "Control your tv from your phone or laptop",
      status: Status.LIVE,
      description: "A high-performance Progressive Web App (PWA) remote for Android TV / Google TV. Built with an Apple TV Siri Remote aesthetic, zero external runtime dependencies, ultra-low latency, and tactile feedback.",
      image: "/remote.png",
      technologies: ["HTML","Css","JavaScript"],
      github:"https://github.com/johnkinuthiaa/tv-remote"
  },
  {
      name: "Stice",
      label: "Control your tv from your phone or laptop",
      status: Status.LIVE,
      description: "Stice is the unified trading journal and sales ledger for forex, futures, and crypto traders. Auto-sync MT4, MT5, Zerodha, Binance & track online course sales in one ledger.",
      image: "/remote.png",
      technologies: [],
      link:"https://ytracker-ten.vercel.app/"
  },
  
];
export default ProjectData;
