const Icon = ({name, desc, ...props}) => (
    <svg aria-hidden={desc ? false : true} focusable="false" {...props}>
        {desc &&
            <title>{desc}</title>
        }
        <use xlinkHref={`/static/svg-legend.svg#icon-${name}`} />
    </svg>
);

export default Icon;