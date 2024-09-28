import {createBrowserRouter, LoaderFunctionArgs, redirect, RouteObject} from "react-router-dom";
import {dispatch, getState} from "@redux/store/rootStore";
import {Login} from "@pages/auth/Login";
import {Register} from "@pages/auth/Register";
import {Main} from "@pages/main/Main";
import {Home} from "@pages/main/Home";
import {authService} from "@services/authService";
import {updateUser} from "@redux/slices/userSlice";
import {apiEndpoints} from "@services/dataService";
import {NotFound} from "@pages/NotFound";
import {InputTextPage} from "@pages/main/showcase/InputTextPage";
import {InputTextareaPage} from "@pages/main/showcase/InputTextareaPage";
import {DropdownPage} from "@pages/main/showcase/DropdownPage";
import {CheckboxPage} from "@pages/main/showcase/CheckboxPage";
import {UtilsPage} from "@pages/main/showcase/UtilsPage";
import {AutoCompletePage} from "@pages/main/showcase/AutoCompletePage.tsx";
import {ButtonPage} from "@pages/main/showcase/ButtonPage.tsx";
import {CascadeSelectPage} from "@pages/main/showcase/CascadeSelectPage.tsx";
import {ChipsPage} from "@pages/main/showcase/ChipsPage.tsx";
import {ColorPickerPage} from "@pages/main/showcase/ColorPickerPage.tsx";
import {EditorPage} from "@pages/main/showcase/EditorPage.tsx";
import {InputMaskPage} from "@pages/main/showcase/InputMaskPage.tsx";
import {InputSwitchPage} from "@pages/main/showcase/InputSwitchPage.tsx";
import {InputNumberPage} from "@pages/main/showcase/InputNumberPage.tsx";
import {InputOtpPage} from "@pages/main/showcase/InputOtpPage.tsx";
import {KnobPage} from "@pages/main/showcase/KnobPage.tsx";
import {ListBoxPage} from "@pages/main/showcase/ListBoxPage.tsx";
import {MentionPage} from "@pages/main/showcase/MentionPage.tsx";
import {MultiSelectPage} from "@pages/main/showcase/MultiSelectPage.tsx";
import {MultiStateCheckboxPage} from "@pages/main/showcase/MultiStateCheckboxPage.tsx";
import {InputPasswordPage} from "@pages/main/showcase/InputPasswordPage.tsx";
import {RadioGroupPage} from "@pages/main/showcase/RadioGroupPage.tsx";

const provideUser = async () => {
  try {
    const storageToken = authService.hasToken();
    const {user} = getState();
    if (!storageToken) {
      return null;
    }
    if (user) {
      return null;
    }
    const {data} = await dispatch(apiEndpoints.getProfile.initiate());
    dispatch(updateUser(data));
    return user;
  } catch {
    return null;
  }
}

const protectedLoader = ({request}: LoaderFunctionArgs) => {
  const {user} = getState();
  if (!user) {
    const params = new URLSearchParams();
    params.set("return", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  return null;
}

const loginLoader = async () => {
  const {user} = getState();
  if (user) {
    return redirect("/");
  }
  return null;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main/>,
    loader: provideUser,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "button",
        element: <ButtonPage/>,
      },
      {
        path: "autoComplete",
        element: <AutoCompletePage/>,
      },
      {
        path: "cascadeSelect",
        element: <CascadeSelectPage/>,
      },
      {
        path: "checkbox",
        element: <CheckboxPage/>,
      },
      {
        path: "chips",
        element: <ChipsPage/>,
      },
      {
        path: "colorPicker",
        element: <ColorPickerPage/>,
      },
      {
        path: "editor",
        element: <EditorPage/>,
      },
      {
        path: "inputMask",
        element: <InputMaskPage/>,
      },
      {
        path: "inputNumber",
        element: <InputNumberPage/>,
      },
      {
        path: "inputOtp",
        element: <InputOtpPage/>,
      },
      {
        path: "inputPassword",
        element: <InputPasswordPage/>,
      },
      {
        path: "inputSwitch",
        element: <InputSwitchPage/>,
      },
      {
        path: "dropdown",
        element: <DropdownPage/>,
      },
      {
        path: "inputText",
        element: <InputTextPage/>,
      },
      {
        path: "inputTextarea",
        element: <InputTextareaPage/>,
      },
      {
        path: "knob",
        element: <KnobPage/>,
      },
      {
        path: "listBox",
        element: <ListBoxPage/>,
      },
      {
        path: "mention",
        element: <MentionPage/>,
      },
      {
        path: "multiSelect",
        element: <MultiSelectPage/>,
      },
      {
        path: "multiStateCheckbox",
        element: <MultiStateCheckboxPage/>,
      },
      {
        path: "radioGroup",
        element: <RadioGroupPage/>,
      },
      {
        path: "utils",
        element: <UtilsPage/>,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        loader: loginLoader,
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
]

export const router = createBrowserRouter(routes);
