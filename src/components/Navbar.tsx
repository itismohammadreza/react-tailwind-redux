import { PropsWithChildren, useState } from 'react';
import { useUser } from "@hooks/useUser";
import { useConfig } from "@hooks/useConfig";
import { useTranslation } from "react-i18next";
import { Button } from "@powell/components/Button";
import { Logo } from "@components/Logo";
import { PrimeMenuItem, PrimePanelMenu, PrimeSidebar } from "@powell/api";
import { routes } from "@root/router.tsx";
import { useNavigate } from "react-router-dom";

export const Navbar = (props: PropsWithChildren) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const currentUser = useUser();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [configSidebarVisible, setConfigSidebarVisible] = useState(false);
  const [config, setConfig] = useConfig();
  const {children} = props;
  const navItems: PrimeMenuItem[] = routes[0].children!.map(route => ({
    label: route.path || 'home',
    icon: 'pi pi-minus',
    command: () => {
      setSidebarVisible(false);
      navigate(`/${route.path}`)
    },
  }))

  const handleLocaleToggle = () => {
    setConfig({locale: config.locale === 'faIR' ? 'enUS' : 'faIR'});
  }

  const handleDirectionToggle = () => {
    setConfig({rtl: !config.rtl});
  }

  const handleThemeToggle = () => {
    setConfig({powellConfig: {theme: 'nova'}});
  }

  return (
      <>
        <nav
            className="h-[70px] bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 flex items-center justify-between mx-auto p-4">
          <Logo className="w-[95px]" type="dark-horizontal"/>
          <Button
              icon="pi pi-bars"
              appearance="text"
              className="size-10"
              onClick={() => setSidebarVisible(true)}/>
          {/*<ul className="hidden w-full md:w-auto md:flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">*/}
          {/*  <li>*/}
          {/*    <Button label="Home" appearance="link" className="p-0"></Button>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Button label="About" appearance="link" className="p-0"></Button>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Button label="Services" appearance="link" className="p-0"></Button>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Button label="Contact" appearance="link" className="p-0"></Button>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </nav>

        <PrimeSidebar className="w-[20rem]" visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
          <PrimePanelMenu model={navItems}/>
        </PrimeSidebar>

        <main className="pt-[70px]">
          {children}
        </main>
      </>
  );
}
