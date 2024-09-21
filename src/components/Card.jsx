

// eslint-disable-next-line react/prop-types
export default function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} height="256" alt="Teste"/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

