const Icon = ({name, desc}) => (
    <svg aria-hidden={desc ? false : true} focusable="false">
        {desc &&
            <title>{desc}</title>
        }
        <use xlinkHref={`/static/svg-legend.svg#icon-${name}`} />
    </svg>
);

export default Icon;