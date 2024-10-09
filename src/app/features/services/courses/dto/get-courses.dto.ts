import { IPagination } from "../../../../shared/interfaces/pagination.interface";
import { ICourse } from "./course.dto";

export interface IGetCoursesDto {
  data: ICourse[];
  pagination: IPagination;
}
