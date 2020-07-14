export function getSrc(img: string) {
  return `${img}.jpg`
}

export function getSrcSet(img: string) {
  return `${img}-small.jpg 480w, ${img}-medium.jpg 1600w`;
}
