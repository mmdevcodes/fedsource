import Repo from './Repo';

export default ({ name, repos }) => {
    return (
        repos.length ?
        <section className="items" aria-label={name || null}>
            {name && <header className="items-header">{name}</header>}
            {repos.map((repo, index) => (
                <Repo
                    key={repo.id}
                    id={repo.id}
                    name={repo.name}
                    author={repo.author}
                    url={repo.url}
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stars}
                    forks={repo.forks}
                    currentPeriodStars={repo.currentPeriodStars}
                />
            ))}
        </section> : <></>
    );
}