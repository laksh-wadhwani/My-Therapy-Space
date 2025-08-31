const CustomButton = ({ children, onClick,  disabled, className = ""}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full cursor-pointer flex items-center justify-center font-serif text-lg max-sm:text-sm capitalize bg-[#14B8A6] rounded-xl p-3 max-sm:p-2 text-white transition-all duration-500 ease-in-out hover:bg-transparent hover:border hover:border-[#14B8A6] hover:scale-105 hover:text-black hover:shadow-md ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton