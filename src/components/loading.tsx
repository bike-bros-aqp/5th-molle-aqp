function LoadingInfo() {
  return (
    <div className="fixed inset-0 bg-black/90  flex flex-col justify-center items-center z-50">
      <div className="text-center">
        <div
          className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
        ></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">
          Mollebaya Bike Park
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Danos unos instantes...
        </p>
      </div>

    </div>
  );
}

export default LoadingInfo;