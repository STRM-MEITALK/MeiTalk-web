import RequestStatus from '@lib/RequestStatus';

export interface ITestState {
  list: string[];
  fetchTestStatus: RequestStatus;
}

export interface ITestFetch {
  test: string;
}
