import { ContactInfo, FooterContent } from "../../modules/cafe";
import { DeliveryPhone } from "../contact";

type FooterProps = {
  content: FooterContent;
  contact: ContactInfo;
};

export const Footer = ({ content, contact }: FooterProps) => {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900">
            We are nearby
          </h3>
          {content.address && (
            <p className="text-sm text-slate-500">{content.address}</p>
          )}
          {content.schedule && (
            <p className="text-sm text-slate-500">{content.schedule}</p>
          )}
          <DeliveryPhone contact={contact} variant="banner" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {content.columns.map((column) => (
            <div key={column.id} className="space-y-3">
              {column.title && (
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  {column.title}
                </p>
              )}
              <div className="space-y-2">
                {column.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="block text-sm font-medium text-slate-600 transition hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500">
          <p>{content.copyright ?? "© Derbent Cafe"}</p>
          <div className="flex flex-wrap gap-4">
            {content.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="font-medium text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

