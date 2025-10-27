import { Search, X } from 'lucide-react'
import { useProjectsContext } from '../context/ProjectFilterContext'

const FilterProject = () => {
  const {
    searchQuery,
    selectedCategory,
    handleSearch,
    handleCategoryChange,
    clearCategory,
  } = useProjectsContext()

  return (
    <aside className="w-full lg:w-80">
      <div className="border-border bg-card rounded-xl border p-6 lg:sticky lg:top-24">
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium">Search</h3>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-background border-border placeholder:text-muted-foreground focus:border-primary focus:ring-primary w-full rounded-lg border py-2 pr-10 pl-10 text-sm transition-colors focus:ring-1 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch('')}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-medium">Category</h3>
            <button
              onClick={clearCategory}
              className="text-muted-foreground hover:text-primary text-xs transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="space-y-2">
            {[
              'All Projects',
              'Web Application',
              'Mobile App',
              'Full Stack',
              'Frontend',
              'Backend',
            ].map((category) => (
              <label
                key={category}
                className="hover:text-foreground flex cursor-pointer items-center gap-2 text-sm transition-colors"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="border-border text-primary focus:ring-primary h-4 w-4"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterProject
