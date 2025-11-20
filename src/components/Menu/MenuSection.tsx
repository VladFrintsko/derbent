import { MenuCategory } from "../../modules/cafe";
import { MenuItemCard } from "./MenuItemCard";

type MenuSectionProps = {
  category: MenuCategory;
};

export const MenuSection = ({ category }: MenuSectionProps) => {
  return (
    <section className="space-y-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-100">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            {category.title}
          </h2>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            {category.items.length} items
          </span>
        </div>
        {category.description && (
          <p className="text-sm text-slate-500">{category.description}</p>
        )}
      </div>
      <div className="space-y-4">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

