type FooterProps = {
  name: string;
};

export const Footer = (props: FooterProps) => {
  return <div>Usuário Conectado: {props.name}</div>;
};
