interface Props {
	icon: (props: React.ComponentProps<'svg'>) => JSX.Element
	label: string
}

const IconButton = ({ icon: Icon, label }: Props) => {
	return (
		<button className='flex items-center space-x-2 hover:text-white'>
			<Icon className='icon' />
			<span>{label}</span>
			<h1>aaaa</h1>
			<h2>4444</h2>
		</button>
	)
}

export default IconButton
