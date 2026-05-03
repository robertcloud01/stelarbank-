import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import RegisterForm from 'components/RegisterForm';
import ConstantCookie from 'components/ConstantCookie';
import BrutalistLayout from 'components/BrutalistLayout';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'registerPage';

export default function RegisterPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <FormattedMessage {...messages.registration}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

      <BrutalistLayout
        subtitle="CADASTRO SEGURO"
        title={<>CRIAR <span className="accent">CONTA</span></>}
        heroTitleLines={["SUA JORNADA", "COMEÇA", "AQUI."]}
      >
        <RegisterForm />
      </BrutalistLayout>

      <ConstantCookie />
    </>
  );
}
