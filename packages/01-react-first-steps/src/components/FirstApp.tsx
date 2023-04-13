interface Props {
  title: string;
  subtitle?: string;
  name?: string;
}

export const FirstApp: React.FC<Props> = ({ title, subtitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};
