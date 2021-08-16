import Auth from '@aws-amplify/auth';
import { AmplifyAuthenticator, AmplifyForgotPassword } from '@aws-amplify/ui-react';
import './App.css';

Auth.configure({
  region: 'eu-west-1',
  userPoolId: 'eu-west-1_xxxxxxxx',
  userPoolWebClientId: 'XXX',
});

function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifyForgotPassword
        slot="forgot-password"
        usernameAlias="email"
        formFields={[{ type: 'email', label: '' }]}
      ></AmplifyForgotPassword>
    </AmplifyAuthenticator>
  );
}

export default App;
