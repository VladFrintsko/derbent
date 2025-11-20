import { ContactInfo } from "../../modules/cafe";
import { normalizePhone } from "../../utils";

type DeliveryPhoneProps = {
  contact: ContactInfo;
  variant?: "badge" | "banner";
};

const getPhoneHref = (phone: string) => `tel:${normalizePhone(phone)}`;

const getWhatsappHref = (whatsapp?: string, phone?: string) => {
  if (whatsapp) {
    return whatsapp;
  }
  if (!phone) {
    return undefined;
  }
  return `https://wa.me/${normalizePhone(phone)}`;
};

export const DeliveryPhone = ({
  contact,
  variant = "badge",
}: DeliveryPhoneProps) => {
  if (!contact.phone) {
    return null;
  }

  const whatsappHref = getWhatsappHref(contact.whatsapp, contact.phone);

  if (variant === "banner") {
    return (
      <div className="rounded-2xl bg-emerald-50 p-5">
        <div className="text-sm font-medium text-emerald-900">
          Delivery
        </div>
        <a
          href={getPhoneHref(contact.phone)}
          className="mt-1 block text-2xl font-semibold tracking-wide text-emerald-700"
        >
          {contact.phone}
        </a>
        {contact.note && (
          <p className="mt-2 text-sm text-emerald-800">{contact.note}</p>
        )}
        {whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:border-emerald-400"
          >
            Message on WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-sm backdrop-blur">
      <span className="text-xs uppercase tracking-widest text-emerald-500">
        Delivery
      </span>
      <a href={getPhoneHref(contact.phone)}>{contact.phone}</a>
    </div>
  );
};

