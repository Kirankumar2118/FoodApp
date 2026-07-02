import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userinfo: {
        name: "Loading...",
        location: "Loading...",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Kirankumar2118");

    const json = await data.json();

    this.setState({
      userinfo: json,
    });
  }

  render() {
    const { count, userinfo } = this.state;
    const {
      name,
      location,
      avatar_url,
      public_repos,
      followers,
      following,
      bio,
    } = userinfo;

    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          {/* Profile Image */}
          <img
            src={avatar_url}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500"
          />

          {/* User Info */}
          <h1 className="text-3xl font-bold mt-4">{name}</h1>

          <p className="text-gray-500 mt-2">
            📍 {location || "Location not available"}
          </p>

          <p className="text-gray-600 mt-3">{bio || "No bio available"}</p>

          {/* Stats */}
          <div className="flex justify-around mt-6 border-t pt-4">
            <div>
              <h3 className="font-bold text-lg">{public_repos || 0}</h3>
              <p className="text-sm text-gray-500">Repos</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">{followers || 0}</h3>
              <p className="text-sm text-gray-500">Followers</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">{following || 0}</h3>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>

          {/* Counter */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Counter: {count}</h3>

            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition"
              onClick={() => {
                this.setState({
                  count: count + 1,
                });
              }}
            >
              Increase Count
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Userclass;
