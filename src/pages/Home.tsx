import { CTA } from "../components/UI";
import { HeroSection } from "../sections/home/HeroSection";
import { ProblemSection } from "../sections/home/ProblemSection";
import { ModulesSection } from "../sections/home/ModulesSection";
import { ModularSection } from "../sections/home/ModularSection";
import { ExecutiveSection } from "../sections/home/ExecutiveSection";
import { RolesSection } from "../sections/home/RolesSection";
import { MultiCompanySection } from "../sections/home/MultiCompanySection";
import { CompanySizeSection } from "../sections/home/CompanySizeSection";
import { EngagementSection } from "../sections/home/EngagementSection";
import { IntegrationsSection } from "../sections/home/IntegrationsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ModulesSection />
      <ModularSection />
      <ExecutiveSection />
      <RolesSection />
      <MultiCompanySection />
      <CompanySizeSection />
      <EngagementSection />
      <IntegrationsSection />
      <CTA />
    </>
  );
}
