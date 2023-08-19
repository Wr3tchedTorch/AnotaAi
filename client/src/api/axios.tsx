import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:10000/note" });

export const getNotes = async () => {
  const response = await api.get("/all");
  console.log(response);
  return response.data.db;
};

export const postNote = async (data: any) => {
  const response = await api.post("", {
    title: data[0],
    desc: data[1],
    date: data[2],
  });
  return response;
};

export const deleteNote = async (noteId: any) => {
    console.log(noteId);
    const response = await api.delete(`/${noteId}`);
    return response;
}