import Header from "./Header";
import book from './book.jpg'
import lib from './library.jpeg'
import { Link } from "react-router-dom"


export default function HomePage() {
	return (
		<div>
			<Header />
			<div className="mx-32 my-2 px-3 py-1">
				<div className="flex">
					<div className="mx-10 my-4 w-50 flex justify-center">
						<img className="rounded-lg"src={book} alt="book" />
					</div>
					<div className="mx-10 my-4 w-50 px-5 py-3 flex content-center">
						<p>
						Comparing Text based on there semantic meaning made easy and accessable at a resonable cost.<br />
						We Provide RESTFull services. All you have to worry about is the format of input. Leave rest on us.<br />
						We Provide features to compare unseen pairs of test and save some default set of text for fast comparision in batches. 
						</p>
					</div>
				</div>

				<div className="flex my-3">
					
					<div className="mx-10 my-4 w-50 px-5 py-3 flex content-center">
						<p>
						Semantic Comparision requires a lot of effort and training. Creating an inhouse model will be pretty expensive. We provide an easy to use REST Service, which allows you to get this comparision done.
						<br /><br />
						Our model which has been trained on large set of standard datasets provides best in class results. Over the time, with feedbacks from customers our model will keep on improving, and provide better results so forth.
						</p>
					</div>
					<div className="mx-10 my-4 w-50 ">
						<img className="rounded-lg" src={lib} alt="book 2" />
					</div>
				</div>

				<hr />
				<div className="flex justify-center pt-3">
					<p className="px-2">Linkedin</p>
					<Link to="/doc"><p className="px-2">Github</p></Link>
					<p className="px-2">Twitter</p>
				</div>

			</div>
		</div>
	)
}