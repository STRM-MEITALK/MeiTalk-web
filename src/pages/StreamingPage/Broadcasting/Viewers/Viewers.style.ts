import styled, { css } from 'styled-components';

const Button = styled.button`
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const SCContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 40%;
  width: 343px;
  height: 570px;
  background: ${({ theme }) => theme.color.bg11};
  padding: 20px;
  z-index: 100;

  ${({ theme }) => theme.media.tablet`
    width: 90%;
    left: 5%;
    bottom: 5%;
  `}
`;

export const SCBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SCBtn = styled(Button)`
  background: none;
  padding: 0;
`;

export const SCBtnImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SCTitle = styled.p`
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  text-align: center;
`;

export const SCInnerContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
`;

export const SCInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.lc07};
`;

export const SCInput = styled.input`
  width: 100%;
  height: 40px;
  display: flex;
  background: none;
  border: none;
  outline: none;
  padding-left: 11px;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};

  ::placeholder {
    font-family: ${({ theme }) => theme.fmLight};
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.color.ph01};
  }
`;

export const SCBtnSearch = styled(Button)`
  min-width: 40px;
  height: 40px;
  background: none;
  padding: 0;
`;

export const SCImgSearch = styled.img`
  width: 36px;
  height: 36px;
`;

export const SCUserListContainer = styled.div`
  width: 100%;
  height: 319px;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  margin-top: 10px;
  padding: 20px 10px 20px 0;
`;

export const SCUserList = styled.div`
  width: 100%;
  height: 279px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const SCBottom = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const SCBottomBtn = styled(Button)<{ back: boolean }>`
  width: 100%;
  height: 40px;
  font-family: ${({ theme }) => theme.fmRegular};
  ${({ theme, back }) => css`
    background: ${back ? theme.color.bg12 : theme.color.point};
    color: ${back ? theme.color.fc02 : theme.color.fc07};
  `}
  & + & {
    margin-left: 10px;
  }
`;
