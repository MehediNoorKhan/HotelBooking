const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />

        {/* Text */}
        <p className="text-sm text-muted font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default GlobalLoader;
