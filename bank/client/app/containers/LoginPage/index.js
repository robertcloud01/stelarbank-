import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import LoginForm from 'components/LoginForm';
import ConstantCookie from 'components/ConstantCookie';
import BrutalistLayout from 'components/BrutalistLayout';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'loginPage';
export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <FormattedMessage {...messages.login}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

      <BrutalistLayout 
        subtitle="ACESSO RESTRITO"
        title={<>CONECTE-<span className="accent">SE</span></>}
        heroTitleLines={["NOVA ERA", "BANCÁRIA.", "STELAR."]}
      >
        <LoginForm />
      </BrutalistLayout>

      <ConstantCookie />
    </>
  );
}
