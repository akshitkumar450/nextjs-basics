function isr({ num }) {
  return <div>isr {num}</div>;
}

export default isr;
export function getStaticProps(context) {
  return {
    props: {
      num: Math.random(),
    },
    revalidate: 10,
  };
}
