import { MenuItem } from "../../modules/cafe";
import { formatCurrency } from "../../utils";

type MenuItemCardProps = {
  item: MenuItem;
};

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const price = formatCurrency(item.price);

  return (
    <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm">
      {item.image?.url && (
        <img
          src={item.image.url}
          alt={item.image.alternativeText ?? item.title}
          className="h-20 w-20 rounded-xl object-cover"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-slate-900">{item.title}</p>
            {item.tags && item.tags.length > 0 && (
              <p className="text-sm uppercase tracking-wider text-emerald-500">
                {item.tags.join(" • ")}
              </p>
            )}
          </div>
          {price && (
            <span className="text-base font-semibold text-emerald-600">
              {price}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-2 text-sm text-slate-500">{item.description}</p>
        )}
      </div>
    </div>
  );
};

