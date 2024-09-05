import { serviceData } from '../types/serviceTypes';

export interface IService {
  message: string;
  data: serviceData;
  statusCode: number;
}
