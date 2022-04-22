import User from "../components/user";

function users(props) {
  return (
    <div>
      <h1>List of users </h1>
      {props.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default users;

// get the data from external api
// static generating with data fetching proivde as a props to page

// getStaticProps runs only on server side (never run client-side)
// we can write server-side code in getStaticProps
// it will run at build time
// during development getStaticProps will run on every request

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      users: data,
    },
  };
}
