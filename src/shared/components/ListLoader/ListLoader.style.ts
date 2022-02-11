import styled from 'styled-components';
import loadingSpinner from '@images/loadingSpinner.png';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Loading = styled.div`
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-image: url('${loadingSpinner}');
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
`;
