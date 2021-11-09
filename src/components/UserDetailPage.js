import Header from "./Header";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash"
import { getUserDetails, addCredit, sentenceList } from "../services/userAPI";
import { ACTION_SET } from "../model";
import { useEffect } from "react";


function TabelRow({ comp_type, transaction_charge, query_count, credit_added, id, showCompHistory }) {
	return (
		<tr>
			<td>{comp_type}</td>
			<td>{transaction_charge}</td>
			<td>{query_count}</td>
			<td>{credit_added ? "CREDITED" : "DEBITED"}</td>
			<td>
				<button onClick={() => { showCompHistory(id); }}>GetMoreDetail</button>
			</td>
		</tr>
	)
}


export default function UserDetailPage() {
	const dispatch = useDispatch();
	const { username, email, id, coin_count, user_history } = useSelector(state => Object({
		username: _.get(state, ["UserReducer", "userDetail", "username"], "username not found"),
		email: _.get(state, ["UserReducer", "userDetail", "email"], "email not found"),
		id: _.get(state, ["UserReducer", "userDetail", "id"], -1),
		coin_count: _.get(state, ["UserReducer", "userCompleteDetail", "user_bank"], -1),
		user_history: _.get(state, ["UserReducer", "userCompleteDetail", "user_history"], []),
	}))

	async function _getUserHistory() {
		const user_data = await getUserDetails(id);
		dispatch({
			type: ACTION_SET.USER_ACTION.USER_UPDATE,
			payload: { userCompleteDetail: user_data.data.data }
		})
	}

	const [amt, setAmt] = useState(0);
	const [show_history, setshow_history] = useState(false);
	const [sentence_list, setsentence_list] = useState([]);

	async function _addMoney() {
		const add = await addCredit(id, amt);
		window.location.reload();
	}

	async function showCompHistory(hid) {
		const sent_list = await sentenceList(hid);
		setshow_history(true);
		setsentence_list(sent_list);
		console.log("==========================");
		console.log(sentence_list);
		console.log("==========================");
	}



	useEffect(() => {
		_getUserHistory();
	}, [])

	return (
		<div>
			<Header />
			<div className="flex px-10 py-4 justify-around overflow-x-auto">
				<div className="mx-2 userDetail">
					<div className="low_border p-2 mx-1 mb-2">
						<td class="w-32">ID</td>
						<td>:</td>
						<td class="w-56">{id}</td>
					</div>
					<div className="low_border p-2 mx-1 mb-2">
						<td class="w-32">UserName</td>
						<td>:</td>
						<td class="w-56">{username}</td>
					</div>
					<div className="low_border p-2 mx-1 mb-2">
						<td class="w-32">Email</td>
						<td>:</td>
						<td class="w-56">{email}</td>
					</div>
					<div className="low_border p-2 mx-1 mb-2">
						<td class="w-32">Coin Count </td>
						<td>:</td>
						<td class="w-56">{coin_count}</td>
					</div>
					<div className="low_border p-2 mx-1 mb-2 flex">
						<input type="number"
							placeholder="enter Amount"
							value={amt}
							onChange={(e) => { setAmt(e.target.value) }} />
						<button onClick={_addMoney}>Add Amount</button>
					</div>
					<div className="low_border p-2 mx-1 mb-2 flex">
						<input type="file"
							onClick={() => { }}
							id="upload_user_file"
						/>
					</div>
					{
						show_history ? (
							<div className="low_border p-4 mx-1 mb-2">
								<div className="mb-2">Sentences</div>
								<hr />
								<ol className="mt-1">
									{
										sentence_list.map((item, indx) => {
											return <li className="my-1">{indx + 1}. {item["sentence"]}</li>
										})
									}
								</ol>
							</div>
						) : <div></div>
					}
				</div>
				<div className="low_border mx-2 userHistory">
					<table class="table-auto">
						<thead>
							<tr>
								<th>Type</th>
								<th>Amount</th>
								<th>Query Count</th>
								<th>Transaction</th>
								<th>Details</th>
							</tr>
						</thead>
						<tbody>
							{
								user_history.map(entry => {
									return (
										<TabelRow
											comp_type={entry["comp_type"]}
											transaction_charge={entry["transaction_charge"]}
											query_count={entry["query_count"]}
											credit_added={entry["credit_added"]}
											id={entry["id"]}
											showCompHistory={showCompHistory}
										/>
									)
								})
							}
						</tbody>
					</table>
				</div>

			</div>
		</div>
	)
}