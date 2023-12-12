const Loading = () => {
  return (
    <section id="wrapper" className="animate-pulse cursor-default flex flex-col items-center justify-around lg:w-3/4 w-full mx-auto text-center text-slate-700 dark:text-gray-400 h-full font-bold [&>*]:w-full my-10">
      <div id="title" className="flex flex-col items-center">
        <div className="bg-slate-400 dark:bg-sky-400 mb-4 h-4 w-2/3" />
        <div className="bg-slate-400 dark:bg-sky-400 mb-4 h-4 w-2/3" />
        <div className="bg-slate-400 dark:bg-sky-400 mb-4 h-4 w-2/3" />
        <p className="text-xl uppercase">Loading</p>
        <div className="bg-slate-500 dark:bg-sky-500 h-4 w-2/4 my-4" />
        <div className="bg-slate-500 dark:bg-sky-500 h-4 w-2/4" />
      </div>
      <div className="my-10 icon-basic flex justify-center bg-slate-400 dark:bg-sky-400 h-10 [&]:w-20" />
    </section>
  )
}

export default Loading