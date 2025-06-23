
const LoadingPage: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
      <h2 className="text-2xl text-blue-700 font-bold">Loading tasks...</h2>
    </div>
  );
  
  export default LoadingPage;