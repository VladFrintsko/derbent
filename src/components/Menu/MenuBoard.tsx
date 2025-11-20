import { MenuCategory } from "../../modules/cafe";
import { MenuSection } from "./MenuSection";

type MenuBoardProps = {
  categories: MenuCategory[];
};

export const MenuBoard = ({ categories }: MenuBoardProps) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <MenuSection key={category.id} category={category} />
      ))}
    </div>
  );
};

