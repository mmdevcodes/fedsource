export default ({ ...props }) => {
    return (
        <div className="content" {...props}>{props.children}</div>
    );
}