export const mutationLogin = async () => {
    const res = await fetch("https://api.themoviedb.ogr/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWRjZDkyNTQ0ZTZlNjBiMDljOWMzMzIxYjQ3YTNiYyIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vOhF0XdGZtVNNs70rHl-Zy2f9pIHs8DNBiB-1IMIgE"
            },
        }
    );
    console.log(res)

    return res.json();
};