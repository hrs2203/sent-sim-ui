import Header from "./Header";

export default function ComparePage() {
	return (
		<div className="mb-10">
			<Header />
			<div className="flex px-10 py-4 justify-around overflow-x-auto">
				<div className="low_border inputMainBox px-4 py-2">123</div>
				<div className="low_border inputMainBox px-4 py-2">456</div>
			</div>
			<div className="px-32">
				<button className="px-32 w-100 bg-green-500 text-white rounded py-2"
					onClick={()=>{
						alert("Compare api call")
					}}
				>Compare</button>
			</div>
			<div className="flex px-24 py-4 justify-around overflow-x-auto">
				<div className="low_border w-100 px-4 py-2">123</div>
			</div>
			<div className="px-32">
				<button className="px-32 w-100 bg-blue-500 text-white rounded py-2"
					onClick={()=>{
						alert("Download api call")
					}}
				>Download</button>
			</div>
		</div>
	)
}