import { useState } from "react";
import { useSelector } from "react-redux";
import { compareSentences, formatData, getUserSavedData } from "../services/compareAPI";
import _ from "lodash"
import Header from "./Header";
import { downloadFile } from "../util/navigation";

function SentenceInserter({ sentences, set_sentencs, sid, uid }) {

	async function _loadUserData(e) {
		e.preventDefault();
		const data = await getUserSavedData(uid);
		console.log(data);
		set_sentencs([...sentences, ...data]);
	}

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
			<button className="my-3" onClick={() => { set_sentencs([...sentences, ""]) }}>Add New Sentence</button>
			<br />
			<button className="my-3" onClick={_loadUserData}>Load User Data</button>

			<input className="w-100" type="file" id={`${sid}_file`}
				onChange={async (e) => {
					const file_up = e.target.files[0];
					console.log(file_up);
					if (file_up.type === "application/json") {
						const c = await file_up.text()
						const content = JSON.parse(c);
						set_sentencs([...sentences, ...content.sentences])
					} else {
						alert("invalid file type. Only json allowed. Please read the format.")
					}
					e.target.value = ""
				}}
			/>
		</div>
	)
}

export default function ComparePage() {

	const { id } = useSelector(state => Object({
		id: _.get(state, ["UserReducer", "userDetail", "id"], -1)
	}))

	const [left_sent, setLeft_sent] = useState([])
	const [right_sent, setRight_sent] = useState([])
	const [compare_data, setCompare_data] = useState({})

	async function _compareCustomSentences() {
		const compare_resp = await compareSentences(left_sent, right_sent, id);
		if (compare_resp.length === 0) {
			alert("something went wrong. Plese check you sentence input or balance")
		}
		else {
			const formated_response = formatData(left_sent, right_sent, compare_resp);
			console.log(
				formated_response
			);
			setCompare_data(formated_response)
		}

	}

	return (
		<div className="mb-10">
			<Header />
			<div className="flex px-10 py-4 justify-around overflow-x-auto">
				<div className="low_border inputMainBox px-4 py-2">
					<SentenceInserter sentences={left_sent} set_sentencs={setLeft_sent} sid={"left"} uid={id} />
				</div>
				<div className="low_border inputMainBox px-4 py-2">
					<SentenceInserter sentences={right_sent} set_sentencs={setRight_sent} sid={"right"} uid={id} />
				</div>
			</div>
			<div className="px-32">
				<button className="px-32 w-100 bg-green-500 text-white rounded py-2"
					onClick={_compareCustomSentences}
				>Compare</button>
			</div>
			<div className="flex px-24 py-4 justify-around overflow-x-auto">
				{
					Object.keys(compare_data).length > 0 ? (
						<div className="low_border w-100 px-4 py-2">
							<table>
								<thead>
									<tr>
										<th>Left</th>
										<th>Right</th>
									</tr>
								</thead>
								<tbody>
									{
										Object.keys(compare_data).map(item => {
											return (
												<tr>
													<td>{item}</td>
													<td>{compare_data[item].length > 0 ? compare_data[item][0][0] : "No sentence found"}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</div>
					) : (<div></div>)
				}
			</div>
			{
				Object.keys(compare_data).length > 0 ? (
					<div className="px-32">
						<button className="px-32 w-100 bg-blue-500 text-white rounded py-2"
							onClick={async () => {
								await downloadFile(compare_data);
							}}
						>Download</button>
					</div>
				) : (<div />)
			}
		</div>
	)
}