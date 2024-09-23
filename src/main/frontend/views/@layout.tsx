import { createMenuItems, useViewConfig } from '@vaadin/hilla-file-router/runtime.js';
import { effect, signal } from '@vaadin/hilla-react-signals';
import { AppLayout, Icon } from '@vaadin/react-components';
import "../main.css";
import { Avatar } from '@vaadin/react-components/Avatar.js';
import { Button } from '@vaadin/react-components/Button.js';
import { useAuth } from 'Frontend/util/auth.js';
import { Suspense, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const defaultTitle = document.title;
const documentTitleSignal = signal('');
effect(() => {
  document.title = documentTitleSignal.value;
});

// Publish for Vaadin to use
(window as any).Vaadin.documentTitleSignal = documentTitleSignal;

export default function MainLayout() {
  const currentTitle = useViewConfig()?.title ?? defaultTitle;

  useEffect(() => {
    documentTitleSignal.value = currentTitle;
  });

  const { state, logout } = useAuth();
  const profilePictureUrl =
    state.user &&
    `data:image;base64,${btoa(
      state.user.profilePicture.reduce((str, n) => str + String.fromCharCode((n + 256) % 256), ''),
    )}`;
  return (
    <AppLayout>
      <header className="  h-[50px] flex mb-0 flex-row bg-primary-10 items-center justify-between  w-full" slot="navbar">
          <div className="flex flex-row items-center px-l">
              <img style={{width: '25px'}} src="images/empty-plant.png"/>
              <h1 className="my-m ml-s me-auto text-xl ">Store</h1>
          </div>
          <nav className="flex overflow-auto px-m py-xs items-center justify-between gap-xl">
          <ul className="flex gap-s list-none m-0 p-0">
            {createMenuItems().map(({ to, title, icon }) => (
              <li key={'li' + to}>
                <NavLink className="flex gap-xs h-m items-center px-s text-body" to={to} key={to}>
                  {icon ? <Icon src={icon} key={'icon' + to}></Icon> : <></>}
                  <span className="font-medium text-m whitespace-nowrap" key={'span' + to}>
                    {title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

               {state.user ? (
                   <>
                       <div className="flex items-center gap-s ">
                           <Avatar theme="xsmall" img={profilePictureUrl} name={state.user.name} />
                           {state.user.name}
                       </div>
                       <Button
                           onClick={async () => {
                               await logout();
                               document.location.reload();
                           }}
                       >
                           Sign out
                       </Button>
                   </>
               ) : (
                   <Link to="/login">Sign in</Link>
               )}

        </nav>
      </header>



      <Suspense>
       <div className=" bg-[url('images/bg.svg')] h-screen">
           <Outlet />
       </div>
      </Suspense>
    </AppLayout>
  );
}
