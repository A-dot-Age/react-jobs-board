import { ClipLoader } from "react-spinners";

const Spinner = ({loading}) => {

  const override = {
    display: 'block',
    margin: '100px auto',
    borderColor: '#4F46E5',
  };
  return(
<ClipLoader
color='#4F46E5'
loading={loading}
cssOverride={override}
size={150}
/>
  )
}
export default Spinner;