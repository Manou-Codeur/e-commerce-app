export const checkErrors = errors => {
  for (let els in errors) {
    if (els) return true;
  }
  return false;
};
