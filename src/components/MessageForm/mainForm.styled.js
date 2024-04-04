import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 563px;
  height: 575px;

  .input-error {
    border: 1px solid red;
    &:focus-visible {
      border: 2px solid red;
    }
  }
`;

export const FormTitle = styled.p`
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;

  margin-bottom: 30px;
`;

export const FormInputs = styled.input`
  width: 465px;
  height: 33px;
  padding: 29px 46px;
  margin-bottom: 8px;

  border: 1px solid #dcdcdc;
  border-radius: 10px;

  font-family: Apercu Arabic Pro;
  font-size: 18px;
  line-height: 32px;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-family: Apercu Arabic Pro;
    font-size: 18px;
    line-height: 32px;
    color: #2d2d2d;
  }

  &:hover {
    border-color: #fad34f;
  }
`;

export const FormTextArea = styled.textarea`
  width: 465px;
  height: 129px;
  padding: 30px 46px;
  margin-bottom: 23px;

  border: 1px solid #dcdcdc;
  border-radius: 10px;
  resize: none;

  font-family: Apercu Arabic Pro;
  font-size: 18px;
  line-height: 32px;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-family: Apercu Arabic Pro;
    font-size: 18px;
    line-height: 32px;
    color: #2d2d2d;
  }

  &:hover {
    border-color: #fad34f;
  }
`;

export const SubmitBtn = styled.button`
  width: 218px;
  height: 73px;

  color: #fff;
  background-color: #fad34f;

  border: none;
  border-radius: 50px;

  font-size: 18px;
  line-height: 18px;
  font-family: Apercu Arabic Pro;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #facb2d;
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 500px;
  left: 458px;
`;
