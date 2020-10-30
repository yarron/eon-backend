export interface FilterI {
  columnName: string;
  value: string;
  operation: string;
}

export interface SortI {
  columnName: string;
  direction: string;
}

export enum ActionsEnum {
  ADD = 'ADD',
  EDIT = 'EDIT',
  REMOVE = 'REMOVE'
}

export interface ResponseMutationI {
  code: number;
  success: boolean;
  message: string;
}

export interface ResponseQueryI {
  meta: {
    totalCount: number;
  };
}
