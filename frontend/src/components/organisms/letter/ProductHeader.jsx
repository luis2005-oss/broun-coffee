import { CategoryNav } from "../../molecules/letter/CategoryNav";

function ProductHeader({ title }) {
  return (
    <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-4xl font-bold text-[#5a3a06]">{title}</h1>
      <CategoryNav />
    </header>
  );
}

export { ProductHeader };