export function postSlug(id: string) {
  const withoutExtension = id.replace(/\.(md|mdx)$/, "");
  const parts = withoutExtension.split("/");

  return parts.at(-1) ?? withoutExtension;
}
