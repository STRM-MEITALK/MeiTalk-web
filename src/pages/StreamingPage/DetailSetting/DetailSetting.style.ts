import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  padding: 2% 0;
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs46};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs22};
  `};
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  background: ${({ theme }) => theme.color.bg05};
  padding: 5% 0;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10%;
  ${({ theme }) => theme.media.tablet`
    width: 90%;
    flex-direction: column;
    padding: 0;
  `};
`;

export const SectionWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 47%;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const CategoryWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TextInputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 6px 15px;
  background: none;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
`;

export const DetailInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 9px 15px;
  margin-top: 10px;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  resize: none;
  background: none;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.tablet`
      margin-top: 20px;
  `};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs18};
  `};
`;

export const MultiStreamWrapperTitle = styled.div`
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
`;

export const RequireText = styled.h1`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs10};
  `};
`;

export const Point = styled(RequireText)`
  margin-left: 5px;
  color: ${({ theme }) => theme.color.point};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `};
`;

export const ButtonWrapper = styled.div`
  width: 47%;
  margin-top: 20px;
`;

export const MultiStreamWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 10%;
  margin-bottom: 40px;
  ${({ theme }) => theme.media.tablet`
    width: 90%;
    padding: 0;
  `};
`;

export const MultiStreamTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.tablet`
    justify-content: space-between;
  `};
`;

export const AddButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

export const RemoveButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: ${({ theme }) => theme.ic18};
  height: ${({ theme }) => theme.ic18};
  margin-left: auto;
  text-align: right;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
`;

export const RemoveButton = styled.img`
  width: 100%;
  height: 100%;
`;

export const MultiStreamInputWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.bg11};
  padding: 20px 48px 20px 20px;
  margin-top: 30px;
  ${({ theme }) => theme.media.tablet`
    padding: 20px;
  `};
`;

export const MultiStreamInputRow = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    align-items: flex-start;
  `};
`;

export const MultiStreamTitle = styled.h1`
  width: 10%;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.tablet`
      width: 100%;
  `};
`;

export const MultiStreamInput = styled.input`
  width: 90%;
  padding: 6px 15px;
  background: none;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
  ${({ theme }) => theme.media.tablet`
      width: 100%;
      margin-top: 10px;
  `};
`;

export const AddMultiWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 0;
  margin-top: 30px;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc12};
  &:hover {
    color: ${({ theme }) => theme.color.fc01};
  }
`;

export const AddMultiText = styled.h1``;
