import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

type HomeProps = {
  user: object;
};

export const Home = (props: HomeProps) => {
  return (
    <div className="Home">
      <Header name={props.user.name} />
      <Footer name={props.user.name} />
    </div>
  );
};
