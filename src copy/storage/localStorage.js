export const storeDiary = (diary) => {
  localStorage.setItem('diary', JSON.stringify(diary));
};

export const getDiary = () => {
  const diary = localStorage.getItem('diary');
  return diary ? JSON.parse(diary) : [];
};
