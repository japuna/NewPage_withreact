import { MyName, StyledCounter } from "./styles";

interface Cover_pageProps {}

const CoverPage = ({}: Cover_pageProps): JSX.Element => {
  return (
    <>
      <StyledCounter data-testid="Cover_page">
        <svg className="styledCounter__canvas1" viewBox="0 0 200 200">
          <defs>
            <linearGradient gradientTransform="rotate(-50)" id="a">
              <stop offset="2%" stopColor="#0c709d" />
              <stop offset="50%" stopColor="#4f195e" />
            </linearGradient>
            <linearGradient gradientTransform="rotate(90)" id="b">
              <stop offset="18%" stopColor="#4f195e" />
              <stop offset="50%" stopColor="#0c709d" />
            </linearGradient>
          </defs>
          <polygon
            className="fill-primary"
            points="-500,0 500,30 500,200 -500,140"
          />
          <polygon
            className="opacity-70"
            fill="url(#b)"
            points="600,170 500,0 200,190"
          />
          <polygon
            className="opacity-70"
            fill="url(#a)"
            points="-500,0 100,0 -400,180"
          />
          <polygon className="fill-primary" points="-250,30 -230,70 -270,70" />
          <polygon
            className="stroke-primary stroke-4 "
            fill="transparent"
            points="420,120 480,135 430,165"
          />
          <circle
            className="stroke-secondary stroke-4 fill-primary"
            cx="-50"
            cy="170"
            r="20"
          />
          <polygon
            className="stroke-secondary stroke-4 fill-primary"
            points="340,20 360,40 340,60 320,40"
          />
        </svg>
      </StyledCounter>
      <MyName>
        <h1>
          <span className="text-white white-shadow">JULIO</span>{" "}
          <span className="text-secondary secondary-shadow">PALACIOS</span>
        </h1>
        <h3 className="text-4xl text-white pt-10" >Multimedia engineer</h3>
      </MyName>
    </>
  );
};

export default CoverPage;
