import HttpStatus from 'http-status-codes';
import * as UserService from '../services/note.service';


export const newNote = async (req, res, next) => {
    try {
     
      const data = await UserService.newNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Note added successfully'
  
      });
    } catch (error) {
      next(error);
    }
  };

  export const getAllNotes = async (req, res, next) => {
    try {
      
      const data = await UserService.getAllNotes();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };


  export const getNote = async (req, res, next) => {
    try {
      const data = await UserService.getNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note fetched successfully'
        
      });
    } catch (error) {
      next(error);
    }

    
  };


  export const deleteNote = async (req, res, next) => {
    try {
      await UserService.deletNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Note deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateNote = async (req, res, next) => {
    try {
      const data = await UserService.updateNote(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Note updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };