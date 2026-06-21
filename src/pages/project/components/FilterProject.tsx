import { Search, X } from "lucide-react";
import { useProjectsContext } from "../context/ProjectFilterContext";

const categories = [
  { id: "All Projects", label: "All" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
];

const FilterProject = () => {
  const {
    searchQuery,
    selectedCategory,
    handleSearch,
    handleCategoryChange,
    clearCategory,
  } = useProjectsContext();

  return (
    <aside className="w-full lg:w-80">
      <div className="bg-card rounded-2xl p-6 lg:sticky lg:top-24 space-y-8">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Filter
            </p>
            <h3 className="font-amatic text-3xl font-bold tracking-wide -mt-1">
              Projects
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Search
          </label>
          <div className="relative">
            <div className="flex items-center rounded-xl border border-border bg-background/50 px-4 py-3 transition-colors focus-within:border-primary focus-within:bg-background">
              <Search className="text-muted-foreground mr-3 h-4 w-4 shrink-0" />
              <input
                type="text"
                placeholder="Find projects..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="bg-transparent placeholder:text-muted-foreground/60 w-full text-sm outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearch("")}
                  className="text-muted-foreground hover:text-foreground ml-2 rounded-md p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Category
            </label>
            {selectedCategory !== "All Projects" && (
              <button
                onClick={clearCategory}
                className="text-muted-foreground hover:text-primary text-xs transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
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
      </div>
    </aside>
  );
};

export default FilterProject;
