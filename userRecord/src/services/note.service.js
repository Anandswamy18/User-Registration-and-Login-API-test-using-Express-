
import Note from '../models/note.model';

//create new user
export const newNote = async (body) => {
  const user = await Note.findOne({title:body.title});
  if(user){
    throw Error("title alredy exists")
  }

  const data = await Note.create(body);
  return data;

};

export const getAllNotes = async () => {
  const data = await Note.find();
  return data;
}; 


export const getNote = async (id) => {
  const data = await Note.findById(id);
  return data;
};


export const deletNote = async (id) => {
  const data = await Note.findByIdAndDelete(id);
  return data;
};


export const updateNote = async (_id, body) => {
  const data = await Note.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};