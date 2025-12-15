function MinimalInput({ label, placeholder, type, onChange, value }) {
  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-sm font-medium text-[#FFBB00] group-focus-within:text-white transition-colors">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-transparent border-b border-gray-600 text-gray-200 py-2 outline-none focus:border-[#FFBB00] transition-colors placeholder-gray-600"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export {MinimalInput}
