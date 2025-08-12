const CustomButton = ({ children, onClick,  disabled, className = ""}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center font-serif text-lg capitalize bg-[#14B8A6] rounded-xl p-3 text-white transition-all duration-500 ease-in-out hover:bg-transparent hover:border hover:border-[#14B8A6] hover:scale-102 hover:text-black hover:shadow-md ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton