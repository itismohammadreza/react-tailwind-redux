import {PropsWithChildren, useEffect, useState} from 'react';
import {useConfig} from "@hooks/useConfig";
import {useTranslation} from "react-i18next";
import {Button} from "@powell/components/Button";
import {Logo} from "@components/Logo";
import {primeClassNames, PrimeMenuItem, PrimePanelMenu, PrimeSidebar} from "@powell/api";
import {routes} from "@root/router";
import {useNavigate} from "react-router-dom";
import {Checkbox} from "@powell/components/Checkbox";

export const Navbar = (props: PropsWithChildren) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const responsiveThreshold: number = 768;
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [configSidebarVisible, setConfigSidebarVisible] = useState(false);
  const [config, setConfig] = useConfig();
  const {children} = props;
  const navItems: PrimeMenuItem[] = routes[0].children!.map(route => ({
    label: route.path || 'home',
    icon: 'pi pi-minus',
    command: () => {
      if (isMobileSize) {
        setSidebarVisible(false);
      }
      navigate(`/${route.path}`)
    },
  }));

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleResize = () => {
    if (document.defaultView.innerWidth < responsiveThreshold) {
      setSidebarVisible(false);
      setIsMobileSize(true);
    } else if (document.defaultView.innerWidth >= responsiveThreshold) {
      setIsMobileSize(false);
      setSidebarVisible(true);
    }
  }

  const handleLocaleToggle = () => {
    setConfig({locale: config.locale === 'faIR' ? 'enUS' : 'faIR'});
  }

  const handleThemeToggle = () => {
    setConfig({powellConfig: {theme: 'nova'}});
  }

  return (
      <>
        <nav
            className={primeClassNames('h-[70px] bg-white fixed z-20 duration-[300ms] transition-all top-0 border-b border-gray-200 shadow flex items-center justify-between p-4',
                {
                  'start-[20rem]': !isMobileSize,
                  'start-0': isMobileSize,
                  'w-full': isMobileSize,
                  'w-[calc(100%-20rem)]': !isMobileSize,
                }
            )}>
          <Logo className="w-[95px]" type="dark-horizontal"/>
          {
              isMobileSize &&
              <Button
                  icon="pi pi-bars"
                  appearance="text"
                  className="size-10"
                  onClick={() => setSidebarVisible(true)}/>
          }
          <Button
              className={primeClassNames("fixed top-[50%] rounded-tr-none rounded-br-none duration-[300ms] transition-all -translate-y-1/2",
                  {
                    'right-0': !configSidebarVisible,
                    'right-[20rem]': configSidebarVisible
                  }
              )}
              icon="pi pi-palette"
              onClick={() => setConfigSidebarVisible(true)}/>
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

        <main
            className={primeClassNames('pt-[70px] transition-all duration-[300ms]', {'ml-[20rem]': !isMobileSize})}>
          {children}
        </main>

        <PrimeSidebar
            className="w-[20rem]"
            visible={configSidebarVisible}
            onHide={() => setConfigSidebarVisible(false)}
            modal={false}
            position="right">
          <Checkbox checked={config.rtl} onChange={e => setConfig({rtl: e.checked})} name="rtl" label="RTL"/>
        </PrimeSidebar>

        <PrimeSidebar
            closeOnEscape={false}
            dismissable={isMobileSize}
            className="w-[20rem]"
            showCloseIcon={isMobileSize}
            modal={isMobileSize}
            visible={sidebarVisible}
            onHide={() => setSidebarVisible(false)}>
          <PrimePanelMenu model={navItems}/>
        </PrimeSidebar>
      </>
  );
}
