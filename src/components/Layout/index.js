import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { clearError } from '../../actions';
import Menu from '../Menu';
import './styles.css';

const Layout = ({ children }) => {
  const errorMessage = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      {errorMessage && (
        <div className='wrapper'>
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color='red'
          />
        </div>
      )}
      <Menu />
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;
