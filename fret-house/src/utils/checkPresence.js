

export const checkPresence = (list, selectedId) => {
  const check = list.find(({ _id }) => _id === selectedId);

  return !!check;
};
