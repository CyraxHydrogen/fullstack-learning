import { Authenticated } from './Authenticated.tsx';
import { EmployeeAuth } from './EmployeeAuth.tsx';
import { EmployeeDetails } from './EmployeeDetails.tsx';
import { EmployeeForm } from './EmployeeForm.tsx';
import { Employees } from './Employees.tsx';
import { Logout } from './Logout.tsx';

function App() {
  return (
    <div>
      <div>List of employees</div>
      <Logout />
      <Authenticated>
        <Employees />
        <EmployeeDetails id={1} />
        <EmployeeForm />
      </Authenticated>
      <EmployeeAuth />
    </div>
  );
}

export default App;
