import { useState, useEffect } from "react";

import Header from "./Header";


function SentenceInserter({ sentences, set_sentencs, sid }) {
	return (
		<div>
			<div className="w-100">
				{
					sentences.map((item, indx) => {
						return (
							<div id={`${sid}_${indx}`} className="low_border h-10 my-2">
								<input type={"text"} value={item}
									onChange={(e) => {
										var l = [...sentences];
										l[indx] = e.target.value
										set_sentencs(l);
									}} />
								<button onClick={() => {
									var l = [];
									for (var i = 0; i < sentences.length; i++) {
										if (i !== indx) { l.push(sentences[i]); }
									}
									set_sentencs(l);
								}}>Delete</button>
							</div>
						)
					})
				}
			</div>
			<button
				className="w-100"
				onClick={() => {
					set_sentencs([...sentences, "james"])
				}}>Add New Sentence</button>
			<input className="w-100" type="file" id={`${sid}_file`} />
		</div>
	)
}

export default function ComparePage() {

	const [left_sent, setLeft_sent] = useState([])
	const [right_sent, setRight_sent] = useState([])

	useEffect(() => {
		console.log(left_sent);
	}, [left_sent])

	useEffect(() => {
		console.log(right_sent);
	}, [right_sent])



	return (
		<div className="mb-10">
			<Header />
			<div className="flex px-10 py-4 justify-around overflow-x-auto">
				<div className="low_border inputMainBox px-4 py-2">
					<SentenceInserter sentences={left_sent} set_sentencs={setLeft_sent} sid={"left"} />
				</div>
				<div className="low_border inputMainBox px-4 py-2">
					<SentenceInserter sentences={right_sent} set_sentencs={setRight_sent} sid={"right"} />
				</div>
			</div>
			<div className="px-32">
				<button className="px-32 w-100 bg-green-500 text-white rounded py-2"
					onClick={() => {
						alert("Compare api call")
					}}
				>Compare</button>
			</div>
			<div className="flex px-24 py-4 justify-around overflow-x-auto">
				<div className="low_border w-100 px-4 py-2">123</div>
			</div>
			<div className="px-32">
				<button className="px-32 w-100 bg-blue-500 text-white rounded py-2"
					onClick={() => {
						alert("Download api call")
					}}
				>Download</button>
			</div>
		</div>
	)
}