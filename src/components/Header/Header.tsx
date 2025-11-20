import { ContactInfo, HeaderContent } from "../../modules/cafe";
import { DeliveryPhone } from "../contact";

type HeaderProps = {
  content: HeaderContent;
  contact: ContactInfo;
};

export const Header = ({ content, contact }: HeaderProps) => {
  return (
    <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-6">
        <div className="flex items-center gap-4">
          {content.logo?.url && (
            <img
              src={content.logo.url}
              alt={content.logo.alternativeText ?? content.title}
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="text-xl font-semibold text-slate-900">{content.title}</p>
            {content.tagline && (
              <p className="text-sm text-slate-500">{content.tagline}</p>
            )}
          </div>
        </div>
        <nav className="hidden flex-1 justify-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {content.navigation.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <DeliveryPhone contact={contact} variant="badge" />
        </div>
      </div>
      <div className="space-y-4 px-6 pb-6 md:hidden">
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {content.navigation.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <DeliveryPhone contact={contact} variant="banner" />
      </div>
    </header>
  );
};
