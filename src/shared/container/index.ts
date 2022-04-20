import { container } from 'tsyringe';
import { StudentsRepositories } from '../../modules/students/repositories/implementions/studentsRepositories';
import { IStudentsRepositories } from '../../modules/students/repositories/IStudentsRepositories';


container.registerSingleton<IStudentsRepositories>("StudentsRepositories", StudentsRepositories)