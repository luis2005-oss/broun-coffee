function AboutUsHistoryContainer({ children }) {
  return (
    <div className="col-span-1 md:col-span-3 bg-black/60 backdrop-blur-md border border-[#FFBB00]/30 p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col items-center text-center mt-6 relative z-10 w-full h-full justify-center">
      {children}
    </div>
  )
}
export { AboutUsHistoryContainer }