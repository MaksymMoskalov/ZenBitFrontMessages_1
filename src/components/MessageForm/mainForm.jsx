import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import {
  Form,
  FormTitle,
  FormInputs,
  FormTextArea,
  SubmitBtn,
  LoaderWrapper,
} from './mainForm.styled';
import {
  selectEmail,
  selectIsLoading,
  selectMessage,
  selectName,
} from '../../redux/message.selectors';
import {
  handlEmail,
  handlMessage,
  handlName,
  handlReset,
} from '../../redux/messageReducer';
import { sendMessage } from '../../redux/messageOperations';

export const MessageForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const message = useSelector(selectMessage);
  const isLoading = useSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      email: email,
      message: message,
    },
  });

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        dispatch(handlName(value));
        break;
      case 'email':
        dispatch(handlEmail(value));
        break;
      case 'message':
        dispatch(handlMessage(value));
        break;

      default:
        break;
    }
  };

  const onSubmit = data => {
    dispatch(sendMessage(data));
    console.log(data);
    reset();
    dispatch(handlReset());
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Reach out to us!</FormTitle>
      <div className="form__group field">
        <FormInputs
          {...register('name', { required: true })}
          type="text"
          placeholder="Your name*"
          autoComplete="off"
          onChange={onInputChange}
          className={errors.name ? 'input-error' : ''}
        />
      </div>

      <div className="form__group field">
        <FormInputs
          {...register('email', { required: true })}
          type="email"
          placeholder="Your e-mail*"
          autoComplete="off"
          onChange={onInputChange}
          className={errors.email ? 'input-error' : ''}
        />
      </div>

      <div className="form__group field">
        <FormTextArea
          {...register('message', { required: true })}
          type="text"
          placeholder="Your message*"
          autoComplete="off"
          onChange={onInputChange}
          className={errors.message ? 'input-error' : ''}
        />
      </div>

      <SubmitBtn type="submit">Send message</SubmitBtn>
      {isLoading && (
        <LoaderWrapper>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#FAD34F', '#F472B7', '#46EBB0', '#F472B7', '#FAD34F']}
          />
        </LoaderWrapper>
      )}
    </Form>
  );
};
