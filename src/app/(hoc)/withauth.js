// hoc/withAuth.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
