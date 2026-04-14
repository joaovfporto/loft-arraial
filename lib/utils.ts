export function formatCategoryHref(category: string) {
  return `/blog?categoria=${encodeURIComponent(category.toLowerCase())}`;
}
