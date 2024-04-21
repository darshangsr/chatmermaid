import { AuthModal } from "@/components/auth/auth-modal";
import { NavBar } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Features } from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import { PreviewLanding } from "@/components/sections/preview-landing";
import { SiteFooter } from "@/components/sections/site-footer";
import { Testimonials } from "@/components/sections/testimonials";
import { marketingConfig } from "@/config/marketing";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar items={marketingConfig.mainNav} scroll={true} />
      <AuthModal />
      <HeroLanding />
      <PreviewLanding />
      {/* <Features />
      <Testimonials /> */}
      <SiteFooter />
    </div>
  );
};

export default page;
