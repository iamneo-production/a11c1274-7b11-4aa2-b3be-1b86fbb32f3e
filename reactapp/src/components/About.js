import userContext from "../context/userContext";
//import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
            <>
          <h1>this is about page</h1>
          {console.log(object)}

          <p>Welcome user: {object.user.login && object.user.data.name}</p>
          </>
      )}
    </userContext.Consumer>
  );
};

export default About;