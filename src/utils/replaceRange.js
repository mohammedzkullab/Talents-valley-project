export function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end);
}
