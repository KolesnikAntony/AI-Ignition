import SignUpForm from '@/components/forms/SignUpForm';
import FormWrapper from '@/components/wrappers/FormWrapper';
import {EnumPage} from '@/enums/enums';

const Auth = () => {
  return (
    <FormWrapper page={EnumPage.SIGN_UP}>
      <SignUpForm />
    </FormWrapper>
  );
};

export default Auth;
