interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = (props: Props) => {
  return (
    <button
      className="border rounded-sm px-2 bg-blue-500 hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:opacity-50"
      {...props}
    >
      {props.children}
    </button>
  )
}
