import { PropsWithChildren, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useUser } from "@hooks/useUser";
import { useConfig } from "@hooks/useConfig";
import { useTranslation } from "react-i18next";
import { Button } from "@powell/components/Button";
import { Logo } from "@components/Logo.tsx";

const drawerWidth = 240;

export const Navbar = (props: PropsWithChildren) => {
  const {t} = useTranslation();
  const currentUser = useUser();
  const [{theme, rtl, locale}, updateConfig] = useConfig();
  const location = useLocation();
  const {children} = props;
  const [open, setOpen] = useState(false);
  const navItems = [
    {text: t('home'), href: '/', icon: undefined},
    {text: t('login'), href: '/auth/login', icon: undefined},
    {text: t('protected'), href: '/protected', icon: undefined},
  ];

  const handleLocaleToggle = () => {
    updateConfig({locale: locale === 'faIR' ? 'enUS' : 'faIR'});
  }

  const handleDirectionToggle = () => {
    updateConfig({rtl: !rtl});
  }

  const handleThemeToggle = () => {
    updateConfig({theme: 'nova'});
  }

  const handleDrawerToggle = () => {
    setOpen(prev => !prev);
  };

  const drawer = (
      <div>Drawer</div>
  );

  return (
      <>
        <nav
            className="h-[70px] ذل-صاهفث fixed w-full z-20 top-0 start-0 border-b border-gray-200 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo className="w-[95px]" type="dark-horizontal"/>
          <Button icon="pi pi-bars" appearance="text" className="w-10 h-10 md:hidden"></Button>
          <ul className="hidden w-full md:w-auto md:flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Button label="Home" appearance="link" className="p-0"></Button>
            </li>
            <li>
              <Button label="About" appearance="link" className="p-0"></Button>
            </li>
            <li>
              <Button label="Services" appearance="link" className="p-0"></Button>
            </li>
            <li>
              <Button label="Contact" appearance="link" className="p-0"></Button>
            </li>
          </ul>
        </nav>
        <main className="pt-[70px]">
          {children}
        </main>
      </>
  );
}
