import Header from "./Header";
import jsonData from "./API_data.json";

function PostElement({ url, heading, descripition, req_body, resp_body }) {
	return (
		<div className="border_light mx-2 px-2 py-3 my-3">
			<div class="flex">
				<div className="px-2 pr-10 text-blue-600">POST</div>
				<div className="px-2 pr-10">{heading}</div>
				<div className="border_light px-2 bg-gray-100 w-2/4">{url}</div>
			</div>
			<div className="p-2 mt-2 text-gray-500 ">
				{descripition}
			</div>
			<div className="p-2 mt-2 border_light bg-gray-50">
				<pre>Request Body</pre>
				<hr />
				<pre className="mt-2">{JSON.stringify(req_body)}</pre>
			</div>
			<div className="p-2 mt-2 border_light bg-gray-50">
				<pre>Response Body</pre>
				<hr />
				<pre className="mt-2">{JSON.stringify(resp_body)}</pre>
			</div>
		</div>
	)
}

function GetElement({ url, heading, descripition, resp_body }) {
	return (
		<div className="border_light mx-2 px-2 py-3 my-3">
			<div class="flex">
				<div className="px-2 pr-10 text-green-500">GET</div>
				<div className="px-2 pr-10">{heading}</div>
				<div className="border_light px-2 bg-gray-100 w-2/4">{url}</div>
			</div>
			<div className="p-2 mt-2 text-gray-500 ">
				{descripition}
			</div>
			<div className="p-2 mt-2 border_light bg-gray-50">
				<pre>Response Body</pre>
				<hr />
				<pre className="mt-2">{JSON.stringify(resp_body)}</pre>
			</div>
		</div>
	)
}

export default function APIDocs() {
	return (
		<>
			<Header />
			<div className="mx-72 my-1 px-3 py-1">
				<div className="w-100 content-center px-10 py-2">
					{
						jsonData.map(item => {
							if (item.method === "POST") {
								return (
									<PostElement
										url={item.url}
										heading={item.name}
										descripition={item.description}
										req_body={item.req_body}
										resp_body={item.resp_body}
									/>
								)
							}
							else {
								return (
									<GetElement
										url={item.url}
										heading={item.name}
										descripition={item.description}
										resp_body={item.resp_body}
									/>
								)
							}
						})
					}
				</div>
			</div>
		</>
	)
}