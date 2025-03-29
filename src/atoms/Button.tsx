type ButtonProps = {
    children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
    return (
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {children}
        </button>
    );
}
