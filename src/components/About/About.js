import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    requestUsers();
  }, []);

  async function requestUsers() {
    const res = await fetch(`https://api.github.com/users`);
    const json = await res.json();
    setAbout(json);
    console.log("ezaea");
  }

  return (
    <center>
      <div>
        <h1 className="mb-4" style={{ color: "white" }}>
          About{" "}
        </h1>
        {about.map((a) => (
          <div key={a.id}>
            <form className="text-center my-4 text-light">
              <img
                className={`form-control mb-3`}
                id="logo_avatar"
                src={a.avatar_url}
                style={{ width: "50%", borderRadius: "65%" }}
                alt=""
              />

              <input
                type="text"
                className={`form-control mb-3`}
                id="node_id"
                placeholder="Node Id"
                value={a.node_id}
              />
              <input
                type="text"
                className={`form-control mb-3`}
                id="login"
                placeholder="Login"
                value={a.login}
              />
            </form>
          </div>
        ))}
      </div>
    </center>
  );
};

export default About;
