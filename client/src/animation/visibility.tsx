export const toggleVisibility = (id: any) => {
  const noteToDelete = document.getElementById(`note${id}`);
  noteToDelete?.classList.add("isInvisible");  
};
