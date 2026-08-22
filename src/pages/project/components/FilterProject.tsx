import { Search, X } from "lucide-react";
import { useProjectsContext } from "../context/ProjectFilterContext";

const categories = [
  { id: "All Projects", label: "All" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
];

const FilterProject = () => {
  const { searchQuery, selectedCategory, handleSearch, handleCategoryChange } =
    useProjectsContext();

  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <div className="flex items-center rounded-xl border border-border bg-background/50 px-4 py-3 transition-colors focus-within:border-primary focus-within:bg-background md:w-64 md:shrink-0">
        <Search className="text-muted-foreground mr-3 h-4 w-4 shrink-0" />
        <input
          type="text"
          placeholder="Find projects..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Search projects"
          className="bg-transparent placeholder:text-muted-foreground/60 w-full text-sm outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearch("")}
            aria-label="Clear search"
            className="text-muted-foreground hover:text-foreground ml-2 rounded-md p-1 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            aria-pressed={selectedCategory === cat.id}
            className={`
                rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider
                transition-all duration-200
                ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterProject;
