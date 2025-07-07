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
import {AutoCompletePage} from "@pages/main/showcase/AutoCompletePage";
import {ButtonPage} from "@pages/main/showcase/ButtonPage";
import {CascadeSelectPage} from "@pages/main/showcase/CascadeSelectPage";
import {ChipsPage} from "@pages/main/showcase/ChipsPage";
import {ColorPickerPage} from "@pages/main/showcase/ColorPickerPage";
import {EditorPage} from "@pages/main/showcase/EditorPage";
import {InputMaskPage} from "@pages/main/showcase/InputMaskPage";
import {InputSwitchPage} from "@pages/main/showcase/InputSwitchPage";
import {InputNumberPage} from "@pages/main/showcase/InputNumberPage";
import {InputOtpPage} from "@pages/main/showcase/InputOtpPage";
import {KnobPage} from "@pages/main/showcase/KnobPage";
import {ListBoxPage} from "@pages/main/showcase/ListBoxPage";
import {MentionPage} from "@pages/main/showcase/MentionPage";
import {MultiSelectPage} from "@pages/main/showcase/MultiSelectPage";
import {MultiStateCheckboxPage} from "@pages/main/showcase/MultiStateCheckboxPage";
import {InputPasswordPage} from "@pages/main/showcase/InputPasswordPage";
import {RadioGroupPage} from "@pages/main/showcase/RadioGroupPage";
import {RatingPage} from "@pages/main/showcase/RatingPage";
import {SelectButtonPage} from "@pages/main/showcase/SelectButtonPage";
import {SliderPage} from "@pages/main/showcase/SliderPage";
import {TreeSelectPage} from "@pages/main/showcase/TreeSelectPage";
import {TriStateCheckboxPage} from "@pages/main/showcase/TriStateCheckboxPage";
import {ToggleButtonPage} from "@pages/main/showcase/ToggleButtonPage";
import {ConfirmDialogPage} from "@pages/main/showcase/ConfirmDialogPage";
import {ConfirmPopupPage} from "@pages/main/showcase/ConfirmPopupPage";
import {DialogFormPage} from "@pages/main/showcase/DialogFormPage";
import {DialogPage} from "@pages/main/showcase/DialogPage";
import {ToastPage} from "@pages/main/showcase/ToastPage";

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
    // const {data} = await dispatch(apiEndpoints.getProfile.initiate());
    // dispatch(updateUser(data));
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
        path: "autoComplete",
        element: <AutoCompletePage/>,
      },
      {
        path: "button",
        element: <ButtonPage/>,
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
        path: "confirmDialog",
        element: <ConfirmDialogPage/>,
      },
      {
        path: "confirmPopup",
        element: <ConfirmPopupPage/>,
      },
      {
        path: "dialogForm",
        element: <DialogFormPage/>,
      },
      {
        path: "dialog",
        element: <DialogPage/>,
      },
      {
        path: "dropdown",
        element: <DropdownPage/>,
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
        path: "rating",
        element: <RatingPage/>,
      },
      {
        path: "selectButton",
        element: <SelectButtonPage/>,
      },
      {
        path: "slider",
        element: <SliderPage/>,
      },
      {
        path: "toast",
        element: <ToastPage/>,
      },
      {
        path: "toggleButtonPage",
        element: <ToggleButtonPage/>,
      },
      {
        path: "treeSelect",
        element: <TreeSelectPage/>,
      },
      {
        path: "triStateCheckbox",
        element: <TriStateCheckboxPage/>,
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
