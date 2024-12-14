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

  return (
      <>
        <Button label="Show Confirm Dialog" onClick={showConfirmation1}/>
        <Button label="Show Confirm Popup" onClick={showConfirmation2}/>
        <Button label="Show Toast" onClick={showToast}/>
        <h2>Home Page</h2>
      </>
  )
}
