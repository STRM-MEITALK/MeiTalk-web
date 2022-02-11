import RequestStatus from '@lib/RequestStatus';

export interface IResponseType {
  output: number;
  result: string;
}

export interface IInitState {
  response: IResponseType;
  status: RequestStatus;
}
