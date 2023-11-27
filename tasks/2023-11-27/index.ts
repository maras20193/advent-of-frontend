export function calculateTilesNeeded(
  sections: Array<{ width: number; height: number }>
): number {
  let totalTiles = 0;

  if (sections.length > 0) {
    totalTiles = sections
      .map((section) => section.width * section.height)
      .reduce((acc, cur) => acc + cur);
  }

  return totalTiles;
}
