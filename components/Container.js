import Navigation from "./Navigation";

const Container = (props) => (
	<div>
		<Navigation />
		<div>{props.children}</div>
	</div>
)

export default Container;
