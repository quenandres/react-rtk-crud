import { useSelector } from 'react-redux';

export const TaksForm = () => {
    const taksSelect = useSelector(state => state.tasks);
    console.log('TaksList');
    console.log(taksSelect);
  return (
    <div>TaksForm</div>
  )
}
