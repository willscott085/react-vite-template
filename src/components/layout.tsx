import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
}
