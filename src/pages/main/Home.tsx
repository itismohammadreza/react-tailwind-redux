import {Button} from "@powell/components/Button";
import {overlayService} from "@powell/api/overlayService.tsx";

export const Home = () => {
  const showConfirmation1 = () => {
    overlayService.showConfirmDialog({
      message: 'Are you sure?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => console.log('Accepted'),
      reject: () => console.log('Rejected'),
    });
  };
  const showConfirmation2 = (e) => {
    overlayService.showConfirmPopup({
      target: e.currentTarget,
      message: 'Are you sure?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => console.log('Accepted'),
      reject: () => console.log('Rejected'),
    });
  };
  const showToast = () => {
    overlayService.showToast({severity: 'info', summary: 'Info', detail: 'Message Content'});
  };
  const showDialog = () => {
    overlayService.showDialog(
        {
          children: (close) =>
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla
                  pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
                <button onClick={() => close()}>Close</button>
              </>,
          style: {width: '50vw'},
          header: 'Header',
          onHide: () => console.log('hided')
        }
    );
  };

  const showDialogForm = () => {
    overlayService.showDialogForm(
      [],
      {
        children: (close) =>
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
                pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <button onClick={() => close()}>Close</button>
            </>,
        style: {width: '50vw'},
        header: 'Header',
        onHide: () => console.log('hided')
      });
  };

  return (
      <>
        <Button label="Show Confirm Dialog" onClick={showConfirmation1}/>
        <Button label="Show Confirm Popup" onClick={showConfirmation2}/>
        <Button label="Show Toast" onClick={showToast}/>
        <Button label="Show Dialog" onClick={showDialog}/>
        <Button label="Show Dialog Form" onClick={showDialogForm}/>
        <h2>Home Page</h2>
      </>
  )
}
