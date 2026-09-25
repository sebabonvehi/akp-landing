export function getFieldIds(id) {
  return { hintId: `${id}-hint`, errorId: `${id}-error` };
}

export function getDescribedBy(id, { hint, error }) {
  const { hintId, errorId } = getFieldIds(id);
  const ids = [hint && hintId, error && errorId].filter(Boolean);
  return ids.length > 0 ? ids.join(' ') : undefined;
}
