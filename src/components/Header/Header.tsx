type HeaderProps = {
  name: string;
};

export const Header = (props: HeaderProps) => {
  return <div>Bem vindo {props.name}</div>;
};
