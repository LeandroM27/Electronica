
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { leerStorage } from '../helper/tokens';
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom';

export const ProtectedRouteAdmin = ({component: Component, ...rest}) => {
    
    const history = useHistory();
    const rango = leerStorage();
    const moverA = (administrador) => {
        if (administrador === 0) {
          history.push('/');
        } 
    };

    
    return (
    <Route
      {...rest}
      render={props => {
        if (jwt(rango.token).usuario.administrador === 1) {
          return <Component {...props} />;
        } else {
          return moverA(jwt(rango.token).usuario.administrador); 
        }
      }}
    />
  );
};

