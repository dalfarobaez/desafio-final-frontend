import { useContext } from 'react';
import { AdminContext } from '../context/AdminProvider';

const useAdminContext = () => useContext(AdminContext);

export default useAdminContext;
