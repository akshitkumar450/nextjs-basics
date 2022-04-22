import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params); //array of params
  return <div>Doc {params}</div>;
}

export default Doc;
// catch all routes starting with docs
// http://localhost:3000/docs/feature1
// http://localhost:3000/docs/feature1/concept1
// for this we name the file [...params].js

// http://localhost:3000/docs
// for this we name the file [[...params]].js
