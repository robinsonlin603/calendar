const MonthSelectButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  const { children, onClick, disabled } = props

  return (
    <button
      type="button"
      className="flex h-[44px] hover:bg-hover items-center justify-center w-[44px]"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default MonthSelectButton
