export const mutationLogin = async () => {
    const res = await fetch("http://localhost:5001/authentication/guest_session/new");
    return res.json();
};
