
import { useSelector } from 'react-redux';

export const TaksList = () => {

    const taksSelect = useSelector('tasks');
    console.log('TaksList');
    console.log(taksSelect);

  return (
    <div>TaksList</div>
  )
}
