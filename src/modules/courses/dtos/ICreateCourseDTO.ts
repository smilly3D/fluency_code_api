interface ICreateCourseDTO {
  name: string;
  description: string;
  knowledge: string;
  trainingFor: string;
  teacher_id: string;
  price: number;
  content_id: string;
  photo_url: string;
  students_total: number;
}

export { ICreateCourseDTO };
