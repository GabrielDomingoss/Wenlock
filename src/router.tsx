import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { UserCreate } from "./pages/user/user-create/user-create";
import { AppLayout } from "./layout/app-layout";
import { UserList } from "./pages/user/user-list/user-list";
import { UserEdit } from "./pages/user/user-edit/user-edit";
import { UserRead } from "./pages/user/user-read/user-read";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />
          <Route path="/users/:id" element={<UserRead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
