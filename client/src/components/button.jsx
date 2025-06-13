function Button({children, onClick, variant = "primary", isLoading=false}) {
    const base = "px-4 py-2 rounded text-white font-medium transition";
    const styles = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover: bg-gray-600",
        danger: "bg-red-500 hover:bg-red-600"
    }
    return (
    <button onClick ={onClick} className={`${base} ${styles[variant]}`}>
       {isLoading ? "Loading..." : children}
    </button>
    );
}

export default Button;