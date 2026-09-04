export const getDiary = () => {
  const diary = localStorage.getItem('diary');
  return diary ? JSON.parse(diary) : [];
};
