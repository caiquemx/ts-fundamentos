export interface IUpdateManyStudentsPayload {
  condition: {
    id?: number;
    name?: string;
    age?: number;
    email?: {
      contains: string;
    };
  };
  payload: {
    name?: string;
    age?: number;
    email?: string;
  };
}
