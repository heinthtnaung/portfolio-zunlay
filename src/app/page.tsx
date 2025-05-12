import LandingPage from "./_landingPage";
import AboutPage from "./about/page";
import CampaignsPage from "./campaigns/page";
import ContactMePage from "./contactme/page";
import EventsPage from "./events/page";
import SaymorePage from "./saymore/page";
import SpeicalSkillsPage from "./specialskills/page";
import WhatICanGiveYouPage from "./whaticangiveyou/page";
import WhatToDoPage from "./whatido/page";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <AboutPage />
      <WhatToDoPage />
      <EventsPage />
      <CampaignsPage />
      <SpeicalSkillsPage />
      <WhatICanGiveYouPage />
      <SaymorePage />
      <ContactMePage />
    </div>
  );
}
