const Headline = (props) => {
    const As = props.variant;
    return <As className={props.style}>{props.children}</As>;
};

export default Headline;
