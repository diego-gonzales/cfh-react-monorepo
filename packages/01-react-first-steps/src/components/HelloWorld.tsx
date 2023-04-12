interface Titles {
  title: string;
  counter: number;
}

const HelloWorld = ({ title, counter }: Titles) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{counter}</p>
    </>
  );
};

export default HelloWorld;
