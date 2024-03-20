function pillars(numPill, dist, width) {
  let totalDistance = (numPill - 1) * dist * 100;
  totalDistance = totalDistance > 0 ? totalDistance : 0;

  let totalWidth = (numPill - 2) * width;
  totalWidth = totalWidth > 0 ? totalWidth : 0;

  const distanceBetweenFirstAndLast = totalDistance + totalWidth;

  return distanceBetweenFirstAndLast;
}
