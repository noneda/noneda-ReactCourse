const url = "https://api.github.com/users/QuincyLarson";
const fetchUser = async (err, load, user) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      err(true);
      load(false);
      return;
    }
    const send = await res.json();
    user(send);
  } catch (e) {
    err(true);
  }
  load(true);
};

export { fetchUser };
