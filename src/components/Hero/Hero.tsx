import { ContactInfo, HeroSection } from "../../modules/cafe";
import { DeliveryPhone } from "../contact";

type HeroProps = {
  hero: HeroSection;
  contact: ContactInfo;
};

export const Hero = ({ hero, contact }: HeroProps) => {
  return (
    <section className="grid gap-8 rounded-3xl bg-slate-900 p-8 text-white md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
          Derbent Cafe
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          {hero.title}
        </h1>
        {hero.subtitle && (
          <p className="text-lg text-slate-200">{hero.subtitle}</p>
        )}
        <div className="max-w-sm">
          <DeliveryPhone contact={contact} variant="banner" />
        </div>
      </div>
      {hero.image?.url && (
        <div className="overflow-hidden rounded-2xl">
          <img
            src={hero.image.url}
            alt={hero.image.alternativeText ?? hero.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </section>
  );
};

