import { useSearchParams } from 'react-router-dom';

const ResetButton = () => {
  const [, setSearchParams] = useSearchParams();

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <button onClick={handleReset} type="button">
      Reset Filters
    </button>
  );
};

export default ResetButton;
