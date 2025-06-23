
interface ErrorPageProps {
    onRetry: () => void;
  }
  
  const ErrorPage: React.FC<ErrorPageProps> = ({ onRetry }) => (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-xl text-red-700 mb-4">Failed to load tasks...</h2>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
  
  export default ErrorPage;