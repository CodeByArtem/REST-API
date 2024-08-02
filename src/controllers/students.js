import createHttpError from 'http-errors';
import {
  createStudent,
  getAllStudents,
  getStudentById,
} from '../services/students.js';

export const getStudentsController = async (req, res) => {
  const student = await getAllStudents();
  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: student,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a student!',
    data: student,
  });
};
